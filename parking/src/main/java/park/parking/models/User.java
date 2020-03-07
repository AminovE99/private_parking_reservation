package park.parking.models;


import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
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

    @OneToOne
    @JoinColumn(name = "accountid", nullable = false)
    private Account account;
}
