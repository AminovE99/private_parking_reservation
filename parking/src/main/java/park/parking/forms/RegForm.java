package park.parking.forms;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

// В форме регистрации у нас приходит только логин|пароль|email
// остальное дополняется в профиле (EditUserForm)
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegForm {
    private String login;
    private String email;
    private String password;
    //    private String name;
//    private String surname;
//    private String phone;
}
