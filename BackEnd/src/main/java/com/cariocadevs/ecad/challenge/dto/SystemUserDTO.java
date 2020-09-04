package com.cariocadevs.ecad.challenge.dto;

import com.cariocadevs.ecad.challenge.model.SystemUser;

public class SystemUserDTO {
    private Long id;
    private String name;
    private String login;
    private String password;

    public SystemUserDTO(SystemUser user) {
        this.setName(user.getName());
        this.setLogin(user.getLogin());
        this.setPassword(user.getPassword());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
