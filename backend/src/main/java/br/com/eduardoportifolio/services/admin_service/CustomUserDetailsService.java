package br.com.eduardoportifolio.services.admin_service;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.repositories.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.Collection;

@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminModel admin_data = adminRepository.findByUsername(username);
        if (admin_data == null){
            throw new UsernameNotFoundException("This admin don´t exists!!");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        admin_data.getRoles().forEach(role ->{
            authorities.add(new SimpleGrantedAuthority(role));
        });

        return new User(
                admin_data.getUsername(), admin_data.getPassword(), authorities
        );


    }
}
