package park.parking.models;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parking_area")
@Data
public class ParkingArea {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String location;
}
