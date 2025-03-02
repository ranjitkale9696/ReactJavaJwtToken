package com.loginbackend.login.repository;


//import com.phegondev.usersmanagementsystem.entity.OurUsers;
import com.loginbackend.login.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<OurUsers, Integer> {

    Optional<OurUsers> findByEmail(String email);
}
