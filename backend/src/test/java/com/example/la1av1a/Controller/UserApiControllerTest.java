package com.example.la1av1a.Controller;

import com.example.la1av1a.Controller.dto.UserRegistDto;
import com.example.la1av1a.domain.User;
import com.example.la1av1a.domain.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class UserApiControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper mapper;

    @Test
    public void 테스트_Post() throws Exception {

        UserRegistDto userRegistDto = UserRegistDto.builder()
                .userName("테스트1")
                .build();

        mockMvc.perform(post("/user/regist")
                        .content(mapper.writeValueAsString(userRegistDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void 테스트_JPA() throws Exception{
        RestTemplate restTemplate = new RestTemplate();
    }
}