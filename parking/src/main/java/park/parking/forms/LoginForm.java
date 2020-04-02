package park.parking.forms;


import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginForm {
    private String login;
    private String password;
}
