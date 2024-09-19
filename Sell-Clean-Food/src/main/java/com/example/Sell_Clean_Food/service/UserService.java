package com.example.Sell_Clean_Food.service;

import com.example.Sell_Clean_Food.repository.UserRepository;
import com.example.Sell_Clean_Food.security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  public boolean emailExists(String email) {
    return userRepository.existsByEmail(email);
  }

  public void saveUser(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword())); // Mã hóa mật khẩu
    userRepository.save(user);
  }

  public User findByEmail(String email) {
    return userRepository.findByEmail(email);
  }
}
