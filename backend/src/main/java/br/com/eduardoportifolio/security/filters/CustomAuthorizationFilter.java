package br.com.eduardoportifolio.security.filters;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.repositories.AdminRepository;
import br.com.eduardoportifolio.util.AlgorithmUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.security.sasl.AuthenticationException;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

// Filtro de authorização das requests
@RequiredArgsConstructor
@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {

    private final AlgorithmUtil algorithmUtil;
    private final AdminRepository adminRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        if (request.getServletPath().equals("/login") || request.getServletPath().equals("/api/admin/createAdmin")
                || request.getServletPath().equals("/api/admin/token/refresh")){

            filterChain.doFilter(request, response);
        } else {

            String authorization_header = request.getHeader(AUTHORIZATION);

            if (authorization_header != null && authorization_header.startsWith("Bearer ")){

                try {

                    String token_jwt = authorization_header.substring("Bearer ".length());

                    JWTVerifier jwtVerifier = JWT.require(algorithmUtil.defineAlgorithm()).build();
                    DecodedJWT decodedJWT = jwtVerifier.verify(token_jwt);
                    String admin_id = decodedJWT.getSubject();
                    String[] roles = decodedJWT.getClaim("roles").asArray(String.class);

                    Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

                    Arrays.stream(roles).forEach(role ->{
                        authorities.add(new SimpleGrantedAuthority(role));
                    });

                    Optional<AdminModel> admin_data = adminRepository.findById(Long.valueOf(admin_id));
                    if (admin_data.isEmpty()){
                        throw new RuntimeException("This admin don't exists!");
                    }

                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                            new UsernamePasswordAuthenticationToken(admin_data.get().getUsername(),
                                    admin_data.get().getPassword(), authorities);

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);


                    filterChain.doFilter(request, response);

                } catch (Exception error){
                    throw new RuntimeException("An error occurred while trying to Authorize a request:", error);
                }


            }



        }



        

    }
}
