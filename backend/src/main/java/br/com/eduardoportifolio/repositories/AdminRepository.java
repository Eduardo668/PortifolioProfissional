package br.com.eduardoportifolio.repositories;

import br.com.eduardoportifolio.models.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Long> {

    AdminModel findByUsername(String username);

}
