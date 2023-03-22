package br.com.eduardoportifolio.security;

import br.com.eduardoportifolio.repositories.AdminRepository;
import br.com.eduardoportifolio.security.filters.CustomAuthenticationFilter;
import br.com.eduardoportifolio.security.filters.CustomAuthorizationFilter;
import br.com.eduardoportifolio.services.admin_service.CustomUserDetailsService;
import br.com.eduardoportifolio.util.AlgorithmUtil;
import br.com.eduardoportifolio.util.AuthorizedPathsUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final AdminRepository adminRepository;

    private final Environment environment;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(adminRepository,
                authenticationManager(null), algorithmUtil());

        CustomAuthorizationFilter customAuthorizationFilter = new CustomAuthorizationFilter(algorithmUtil(),
                adminRepository, authorizedPaths());

        http.csrf().disable();

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.cors().and().authorizeHttpRequests(request -> {
            request.requestMatchers(HttpMethod.POST,
                    "/api/project/createProject").hasAnyAuthority("ROLE_ADMIN");

            request.requestMatchers(HttpMethod.POST, "/login", "/api/admin/createAdmin").permitAll();
            request.requestMatchers(HttpMethod.GET, "/api/admin/token/refresh",
                    "/api/project/findAllProjects", "/api/admin/findCurriculum").permitAll();

            request.requestMatchers(HttpMethod.DELETE,
                    "/api/project/deleteProject/**").hasAnyAuthority("ROLE_ADMIN");
            request.requestMatchers(HttpMethod.PUT,
                    "/api/project/editProject/**, '/api/admin/addCurriculum").hasAnyAuthority("ROLE_ADMIN");
        });

        http.authorizeHttpRequests().anyRequest().authenticated();
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(customAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        CustomUserDetailsService customUserDetailsService = new CustomUserDetailsService(adminRepository);
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        authenticationProvider.setUserDetailsService(customUserDetailsService);

        return authenticationProvider;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AlgorithmUtil algorithmUtil() {
        return new AlgorithmUtil(environment);
    }

    @Bean
    public AuthorizedPathsUtil authorizedPaths() {
        return new AuthorizedPathsUtil();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(List.of("https://eduardoportifolio.netlify.app/","https://portfolio.eduardopaixao.tech/"));
        corsConfiguration
                .setAllowedHeaders(List.of("Authorization", "Access-Control-Allow-Origin", "Content-Type", "Cookie"));
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        corsConfiguration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;

    }

}
