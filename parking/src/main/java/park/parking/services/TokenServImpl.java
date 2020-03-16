package park.parking.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import park.parking.models.Token;
import park.parking.reps.TokenRep;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class TokenServImpl implements TokenServ {
    @Autowired
    private TokenRep tokenRep;
    @Autowired
    private UsersService usverServ;
    @Override
    public boolean isNotExpired(String token) {
        return LocalDateTime.now().isBefore(tokenRep.findFirstByValue(token).get().getExpiredDateTime());
    }
    @Override
    public Optional<Token> findFirstByUser(String email){
        return tokenRep.findFirstByUserId(usverServ.findIdByEmail(email)) ;
    }


}
