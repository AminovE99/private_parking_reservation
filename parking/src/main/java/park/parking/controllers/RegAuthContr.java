package park.parking.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import park.parking.forms.LoginForm;
import park.parking.forms.RegForm;
import park.parking.services.UsersService;

// Запросы с моего урла не принимались серваком, одно из решений данная аннотация.
// Уверен есть изящнее
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class RegAuthContr {
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    private UsersService usersService;


// Я хз должно ли что-то приходить в ответ при регистрации, 
// (но пусть хотя бы статус приходит, что все норм добавилось)
    @PostMapping("/register")
    public ResponseEntity<Object> reg(@RequestBody String data) throws JsonProcessingException {
        System.out.println(data);
        RegForm regForm = objectMapper.readValue(data, RegForm.class);
        usersService.reg(regForm);
        return ResponseEntity.ok().build();
    }

// response.data.token - так я хочу получать токен из response)
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody String data) throws JsonProcessingException {
        System.out.println(data);
        LoginForm loginForm = objectMapper.readValue(data, LoginForm.class);
        usersService.login(loginForm).getValue();
        return ResponseEntity.ok().build();
    }
}
