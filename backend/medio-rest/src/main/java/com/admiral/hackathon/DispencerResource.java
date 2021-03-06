package com.admiral.hackathon;

import java.util.ArrayList;
import java.util.Calendar;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.admiral.hackathon.model.Action;
import com.admiral.hackathon.model.Event;
import com.admiral.hackathon.model.Prescription;

@Path("/medio")
public class DispencerResource {

    private int actionIndex = 0;
    private boolean take = false;

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

    private ArrayList<Event> events = new ArrayList<>();

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

        if (take) {
            take = false;
            System.out.println("action take!");
            return new Action("move", "cw", "28"); 
        } else {
            System.out.println("action noop!");
            return new Action("noop", "", "");
        }

        // actionIndex++;
        // if (actionIndex >= actions.length) {
        //     actionIndex = 0;
        // }
        // Action nextAction = actions[actionIndex];
        
        // return nextAction;
    }

    @POST
    @Path("/action")
    @Produces(MediaType.APPLICATION_JSON)
    public void postEvent(Event event) {
        System.out.println("Event has arised: " + event);
        events.add(event);
    }

    @GET
    @Path("/event")
    @Produces(MediaType.APPLICATION_JSON)
    public Event[] getEvents() {
        // System.out.println("Event has arised: " + event);
        return events.toArray(new Event[events.size()]);
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

        System.out.println("taken!");

        take = true;

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