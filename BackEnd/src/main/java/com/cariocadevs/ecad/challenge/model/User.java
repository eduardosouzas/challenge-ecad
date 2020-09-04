package com.cariocadevs.ecad.challenge.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_ecad")
public class User extends DomainModel<User>{

    private String name;
    private String login;
    private String password;

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
