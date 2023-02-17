package br.com.eduardoportifolio.security.filters;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.repositories.AdminRepository;
import br.com.eduardoportifolio.util.AlgorithmUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.auth0.jwt.JWT;

import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AdminRepository adminRepository;
    private final AuthenticationManager authenticationManager;

    private final AlgorithmUtil algorithmUtil;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(username, password);

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain, Authentication auth) throws IOException, ServletException {
        User user_details = (User)auth.getPrincipal();
        AdminModel admin_data = adminRepository.findByUsername(user_details.getUsername());

        List<String> roles = new ArrayList<>();
        admin_data.getRoles().forEach(role ->{
            roles.add(role);
        });

        String access_token = JWT.create()
                .withSubject(admin_data.getId().toString())
                .withExpiresAt(new Date(System.currentTimeMillis() + 3600000))
                .withIssuer("Eduardo Portifolio API")
                .withClaim("roles", roles)
                .sign(algorithmUtil.defineAlgorithm());

        String refresh_token = JWT.create()
                .withSubject(admin_data.getId().toString())
                .withExpiresAt(new Date(System.currentTimeMillis() + 2629000L * 1000))
                .withIssuer("Eduardo Portifolio API")
                .sign(algorithmUtil.defineAlgorithm());


        Map<String, String> token = new HashMap<>();
        token.put("access_token", access_token);
        new ObjectMapper().writeValue(response.getOutputStream(), token);


        Cookie refresh_token_cookie = new Cookie("refresh_token", refresh_token);
        refresh_token_cookie.setMaxAge(2592000); // 1 month
        refresh_token_cookie.setHttpOnly(true);
//        refresh_token_cookie.setSecure(true);

        response.addCookie(refresh_token_cookie);


    }
}
