package park.parking.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import park.parking.forms.LoginForm;
import park.parking.forms.RegForm;
import park.parking.services.UsersService;

@RestController
public class RegAuthContr {
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public void reg(@RequestBody String data) throws JsonProcessingException {
        RegForm regForm = objectMapper.readValue(data, RegForm.class);
        usersService.reg(regForm);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody String data) throws JsonProcessingException {
        LoginForm loginForm = objectMapper.readValue(data, LoginForm.class);
        usersService.login(loginForm).getValue();
        return ResponseEntity.ok().build();
    }
}
