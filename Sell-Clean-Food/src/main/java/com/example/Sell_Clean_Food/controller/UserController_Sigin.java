package com.example.Sell_Clean_Food.controller;


import com.example.Sell_Clean_Food.JWT_Utility_Class.JwtResponse;
import com.example.Sell_Clean_Food.JWT_Utility_Class.JwtTokenProvider;
import com.example.Sell_Clean_Food.JWT_Utility_Class.LoginRequest;
import com.example.Sell_Clean_Food.security.User;
import com.example.Sell_Clean_Food.service.UserService;
import javax.security.auth.login.LoginContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController_Sigin {
  @Autowired
  private UserService userService;

  @Autowired
  private JwtTokenProvider jwtTokenProvider;

  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  @GetMapping("/test")
  public ResponseEntity<String> testEndpoint() {
    return ResponseEntity.ok("API is up and running");
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
    User user = userService.findByEmail(loginRequest.getEmail());

    if (user == null || !bCryptPasswordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Thông tin đăng nhập không chính xác");
    }

    String token = jwtTokenProvider.generateToken(user);
    return ResponseEntity.ok(new JwtResponse(token));
  }
}
