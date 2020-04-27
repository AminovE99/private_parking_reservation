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
    // Ролей может быть несколько у пользователя? (пусть дефолтное значение будет тоже) TODO: Добавить дефолтное значение
    @Column
    private Roles role;
    @Column
    private String email;
    @Column
    private String login;
    @Column
    private String hash;

// Не очевидно что это! (счет юзера я так понимаю) 
//      При регистрации когда проходит insert требует,
// что бы было поле accountid не null, при это оно нигде не генерируется
// и новая сущность account тоже не заводится
    @OneToOne
    @JoinColumn(name = "accountid", nullable = false)
    private Account account;
}
