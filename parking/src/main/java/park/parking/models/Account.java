package park.parking.models;


import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "account")
@Data
public class Account {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private Integer balance;
}
