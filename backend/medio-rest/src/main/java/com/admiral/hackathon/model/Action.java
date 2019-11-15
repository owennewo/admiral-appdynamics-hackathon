package com.admiral.hackathon.model;

public class Action {
    private String action;
    private String arg1;
    private String arg2;    

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getArg1() {
        return arg1;
    }

    public void setArg1(String arg1) {
        this.arg1 = arg1;
    }

    public String getArg2() {
        return arg2;
    }

    public void setArg2(String arg2) {
        this.arg2 = arg2;
    }

    

    public Action(String action, String arg1, String arg2) {
        this.action = action;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    
    
}