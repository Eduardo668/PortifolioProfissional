package br.com.eduardoportifolio.services.admin_service;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.repositories.AdminRepository;
import br.com.eduardoportifolio.util.AlgorithmUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

import static org.springframework.http.HttpHeaders.COOKIE;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{

    private final AdminRepository adminRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final AlgorithmUtil algorithmUtil;

    @Override
    public AdminModel createAdmin(AdminModel admin) {
        try{
            AdminModel admin_data = adminRepository.findByUsername(admin.getUsername());
            if (admin_data != null){
                throw new RuntimeException("This username already exists!!");
            }

            admin.setPassword(passwordEncoder.encode(admin.getPassword()));

            return adminRepository.save(admin);
        }
        catch (Exception error){
            throw new RuntimeException("An error occurred while trying to create an admin: ", error);
        }
    }

    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) {
        String cookie_header = request.getHeader(COOKIE);

        if (cookie_header != null){

            try {

                String refresh_token = cookie_header.substring("refresh_token=".length());
                System.out.println(refresh_token);

                JWTVerifier verifier = JWT.require(algorithmUtil.defineAlgorithm()).build();

                DecodedJWT decodedJWT = verifier.verify(refresh_token);

                String admin_id = decodedJWT.getSubject();
                Optional<AdminModel> admin_data = adminRepository.findById(Long.valueOf(admin_id));

                List<String> roles = new ArrayList<>();

                admin_data.get().getRoles().forEach(role ->{
                    roles.add(role);
                });

                String new_access_token = JWT.create()
                        .withSubject(admin_id)
                        .withClaim("roles", roles)
                        .withIssuer("Eduardo Portifolio API")
                        .withExpiresAt(new Date(System.currentTimeMillis() + 3600000))
                        .sign(algorithmUtil.defineAlgorithm());


                Map<String, String> token = new HashMap<>();
                token.put("access_token", new_access_token);
                new ObjectMapper().writeValue(response.getOutputStream(), token);

            } catch (Exception error){
                throw new RuntimeException("An error occurred while trying refresh the access token:", error);
            }


        }
    }


}
