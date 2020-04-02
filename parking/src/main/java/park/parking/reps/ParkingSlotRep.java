package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import park.parking.models.Account;
import park.parking.models.ParkingSlot;

@Repository
public interface ParkingSlotRep extends JpaRepository<ParkingSlot,Long> {
}
