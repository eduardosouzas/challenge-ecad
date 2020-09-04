package com.cariocadevs.ecad.challenge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Installment")
public class Installment extends DomainModel<LevyTitle>{

    @Column(nullable = false)
    private BigDecimal value;
    @Column(nullable = false)
    private Integer number;

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
