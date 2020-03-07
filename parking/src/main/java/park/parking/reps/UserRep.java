package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import park.parking.models.User;

@Repository
public interface UserRep extends JpaRepository<User, Long> {
}
