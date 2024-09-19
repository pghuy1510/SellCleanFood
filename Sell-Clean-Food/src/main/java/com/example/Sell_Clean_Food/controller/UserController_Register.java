package com.example.Sell_Clean_Food.controller;

import com.example.Sell_Clean_Food.service.UserService;
import com.example.Sell_Clean_Food.security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController_Register {

  @Autowired
  private UserService userService;



  @PostMapping("/api/register")
  public ResponseEntity<String> registerUser(@RequestBody User user) {
    // Kiểm tra xem email có tồn tại không
    if (userService.emailExists(user.getEmail())) {
      return new ResponseEntity<>("Email đã tồn tại", HttpStatus.BAD_REQUEST);
    }

    // Lưu người dùng mới
    userService.saveUser(user);

//    //Tìm kiếm qua email
//    userService.findByEmail(user.getEmail());

    return new ResponseEntity<>("Đăng ký thành công", HttpStatus.CREATED);
  }
}
