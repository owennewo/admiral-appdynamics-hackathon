package com.admiral.hackathon;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/medio")
public class DispencerResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }

    @GET
    @Path("/action")
    @Produces(MediaType.APPLICATION_JSON)
    public Action getAction() {
        return new Action("move", "cw", "25");
    }

}