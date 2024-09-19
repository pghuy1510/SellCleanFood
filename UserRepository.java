package com.example.Sell_Clean_Food.repository;

import com.example.Sell_Clean_Food.security.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  User findByEmail(String email);
  boolean existsByEmail(String email);
}
