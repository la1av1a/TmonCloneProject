package com.example.la1av1a.service;


import com.example.la1av1a.Controller.dto.UserRegistDto;
import com.example.la1av1a.domain.UserRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Getter
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public Long save(UserRegistDto userRegisterDto){

        return userRepository.save(userRegisterDto.toEntity()).getId();
    }
}
