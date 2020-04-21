package park.parking.models;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {

    private String name;
    private String surname;
    private String phonenumber;
    private Roles role;
    private String email;
    private Integer balance;
}
