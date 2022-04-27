package com.example.la1av1a.Controller.dto;

import com.example.la1av1a.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserRegistDto {

    private String userName;

    @Builder
    public UserRegistDto(String userName){
        this.userName = userName;
    }

    public User toEntity(){
        return User.builder()
                .userName(userName)
                .build();
    }
}
