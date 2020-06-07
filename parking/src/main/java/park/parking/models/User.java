package park.parking.models;


import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parking_user")
@Data
public class User {

    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String phonenumber;
    @Column
    private Roles role;
    @Column
    private String email;
    @Column
    private String login;
    @Column
    private String hash;

    @Column
    private Integer balance;
//    @OneToOne
//    @JoinColumn(name = "accountid", nullable = false)
//    private Account account;
}
