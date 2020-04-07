package park.parking.services;

import org.springframework.stereotype.Service;
import park.parking.dto.TokenDto;
import park.parking.forms.LoginForm;
import park.parking.forms.RegForm;

@Service
public interface UsersService {

    void reg(RegForm regForm);
    TokenDto login(LoginForm loginForm);

    Long findIdByEmail(String email);
}
