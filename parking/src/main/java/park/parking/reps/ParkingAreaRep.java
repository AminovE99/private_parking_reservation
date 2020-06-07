package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import park.parking.models.Account;
import park.parking.models.ParkingArea;

@Repository
public interface ParkingAreaRep extends JpaRepository<ParkingArea,Long> {
}