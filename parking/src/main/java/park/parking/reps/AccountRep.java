package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import park.parking.models.Account;

@Repository
public interface AccountRep extends JpaRepository<Account,Long> {
}