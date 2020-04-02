package park.parking.models;


import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parking_slot")
@Data
public class ParkingSlot {

    @Id
    @GeneratedValue
    private Long id;
    @Column
    private Timestamp time_before;
    @Column
    private Timestamp time_after;
    @Column
    private Integer price_per_hour;
    @Column
    private SlotsStatus slotsStatus;
    @Column
    private String photo_path;

    @OneToOne
    @JoinColumn(name ="parking_area_id", nullable = false)
    private ParkingArea parkingArea;
}
