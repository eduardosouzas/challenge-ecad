package com.cariocadevs.ecad.challenge.dto;

import com.cariocadevs.ecad.challenge.model.User;

public class UserDTO {

    private Long id;
    private String name;
    private String login;
    private String password;

    public UserDTO(User user) {
        this.setId(user.getId());
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
