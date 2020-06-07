package park.parking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import park.parking.models.ParkingSlot;
import park.parking.reps.ParkingSlotRep;

import javax.transaction.Transactional;

@RestController
public class ParkingController {

    @Autowired
    private ParkingSlotRep rep;

    @PostMapping("/slot/create")
    @Transactional
    public void createNew(ParkingSlot slot){rep.save(slot);};
}
