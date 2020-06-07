package park.parking.forms;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegForm {
    private String name;
    private String surname;
    private String login;
    private String email;
    private String password;
    private String phone;
}
