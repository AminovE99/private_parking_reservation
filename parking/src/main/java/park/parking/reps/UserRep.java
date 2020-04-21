package park.parking.reps;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import park.parking.models.Roles;
import park.parking.models.User;

import javax.transaction.Transactional;
import java.util.Optional;

@RepositoryRestResource(path = "user")
public interface UserRep extends JpaRepository<User, Long> {

    User findByLogin(String login);

    Optional<User> findByEmail(String email);

    @Transactional
    @Modifying
    @RestResource(path = "updateBal", rel = "updateBalance")
    @Query("update User set balance=:balance where login=:login")
    void updateBalance(@Param("login") Long login, @Param("balance") Integer balance);

    @Transactional
    @Modifying
    @RestResource(path = "updateRole", rel = "updateRole")
    @Query("update User set role=:role where login=:login")
    void updateRole(@Param("login") Long login, @Param("role") Roles role);

}
