package com.cariocadevs.ecad.challenge.dto;

import com.cariocadevs.ecad.challenge.model.Installment;


import java.math.BigDecimal;

public class InstallmentDTO {
    private Long id;
    private BigDecimal value;
    private Integer number;

    public InstallmentDTO(Installment installment) {
        this.setId(installment.getId());
        this.setNumber(installment.getNumber());
        this.setValue(installment.getValue());
    }

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
