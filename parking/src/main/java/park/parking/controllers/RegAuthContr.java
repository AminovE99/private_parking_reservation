package park.parking.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import park.parking.forms.LoginForm;
import park.parking.forms.RegForm;
import park.parking.models.User;
import park.parking.models.UserAfterLoginDto;
import park.parking.models.UserDto;
import park.parking.reps.UserRep;
import park.parking.services.UsersService;

@RestController
public class RegAuthContr {
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    private UsersService usersService;

    @Autowired
    private UserRep userRep;

    @PostMapping("/register")
    public void reg(@RequestBody String data) throws JsonProcessingException {
        RegForm regForm = objectMapper.readValue(data, RegForm.class);
        usersService.reg(regForm);
    }

    @PostMapping("/login")
    public UserAfterLoginDto login(@RequestBody String data) throws JsonProcessingException {
        LoginForm loginForm = objectMapper.readValue(data, LoginForm.class);
        return UserAfterLoginDto.builder()
                .login(loginForm.getLogin())
                .token(usersService.login(loginForm).getValue())
                .build();
    }


    @GetMapping("/user/{login}")
    public UserDto userProfilePage(@PathVariable("login") String login) {
        User u = userRep.findByLogin(login);
        return UserDto.builder()
                .balance(u.getBalance())
                .email(u.getEmail())
                .name(u.getName())
                .phonenumber(u.getPhonenumber())
                .surname(u.getSurname())
                .role(u.getRole())
                .build();
    }
}
