package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import park.parking.models.User;

import java.util.Optional;

@Repository
public interface UserRep extends JpaRepository<User, Long> {

    User findByLogin(String login);

    Optional<User> findByEmail(String email);

}
