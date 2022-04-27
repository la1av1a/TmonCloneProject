package com.example.la1av1a.Controller;

import com.example.la1av1a.Controller.dto.UserRegistDto;
import com.example.la1av1a.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserApiController {

    private final UserService userService;

    @PostMapping("/regist")
    public int regist(@RequestBody  UserRegistDto userRegisterDto){
        return 1;
    }
}
