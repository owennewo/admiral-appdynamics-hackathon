package com.admiral.hackathon;

import java.util.Calendar;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.admiral.hackathon.model.Action;
import com.admiral.hackathon.model.Prescription;

@Path("/medio")
public class DispencerResource {

    private int actionIndex = 0;

    private Action[] actions = {
        new Action("noop", "", ""),
        new Action("move", "cw", "50"),
        new Action("noop", "", ""),
        new Action("move", "ccw", "25"),
        new Action("noop", "", ""),
        new Action("move", "cw", "50"),
        new Action("noop", "", ""),
        new Action("move", "ccw", "75"),
        new Action("noop", "", ""),
    };

    private Prescription currentPrescription;
    private long nextPrescriptionTime;
    
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }

    @GET
    @Path("/action")
    @Produces(MediaType.APPLICATION_JSON)
    public Action getAction() {

        actionIndex++;
        if (actionIndex >= actions.length) {
            actionIndex = 0;
        }
        Action nextAction = actions[actionIndex];
        
        return nextAction;
    }

    @PUT
    @Path("/prescription/{id}/load")
    @Produces(MediaType.APPLICATION_JSON)
    public Prescription loadPrescription(@PathParam("id") String id ) {
        if (id.equals("1")) {
            currentPrescription = Prescription.PRESCRIPTION1.clone();
        } else {
            currentPrescription = Prescription.PRESCRIPTION2.clone();
        }

        resetPrescriptionTime();
        return currentPrescription;
    }

    @GET
    @Path("/prescription/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Prescription getPrescription(@PathParam("id") String id ) {


        if (id.equals("1")) {
            return Prescription.PRESCRIPTION1.clone();
        } else {
            return Prescription.PRESCRIPTION2.clone();
        }

    }

    private void resetPrescriptionTime() {
        
        if (currentPrescription == null) {
            return;    
        }
        Calendar pillTime = Calendar.getInstance();
        pillTime.add(Calendar.SECOND, currentPrescription.getIntervalSeconds());
        nextPrescriptionTime = pillTime.getTimeInMillis();
        
    }

    @GET
    @Path("/prescription/current")
    @Produces(MediaType.APPLICATION_JSON)
    public Prescription getCurrentPrescription() {

        if (currentPrescription == null) {
            return null;
        }

        long interval = (nextPrescriptionTime - Calendar.getInstance().getTimeInMillis())/1000;

        currentPrescription.setNextPrescriptionSeconds((int) interval);

        return currentPrescription;
    }

    @PUT
    @Path("/prescription/current/take")
    @Produces(MediaType.APPLICATION_JSON)
    public Prescription takeMedicine() {

        if (currentPrescription == null) {
            return null;
        }

        if (currentPrescription.getQuantityRemaining() < 1) {
            return currentPrescription;
        }
        resetPrescriptionTime();
        currentPrescription.setQuantityRemaining(currentPrescription.getQuantityRemaining() -1);
        currentPrescription.setNextPrescriptionSeconds(currentPrescription.getIntervalSeconds());
        return currentPrescription;
    }

    @PUT
    @Path("/prescription/reset")
    // @Produces(MediaType.APPLICATION_JSON)
    public void resetPrescription() {
        currentPrescription = null;
        resetPrescriptionTime();
    }

}