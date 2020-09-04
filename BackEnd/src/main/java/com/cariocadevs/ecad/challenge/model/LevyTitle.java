package com.cariocadevs.ecad.challenge.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "levy_title")
public class LevyTitle extends DomainModel<LevyTitle>{

    @Column(nullable = false)
    private LocalDate competenceAt;
    @Column(nullable = false)
    private BigDecimal levyValue;
    @Column(nullable = false)
    private Integer installmentQt;
    @Column(nullable = false)
    private String cancelJustify;
    @Column(nullable = false)
    private String level;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name="system_user_id")
    private SystemUser systemUser;
    @OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
    @JoinColumn(name="levy_title_id", referencedColumnName="id")
    private List<Installment> installments;

    public LocalDate getCompetenceAt() {
        return competenceAt;
    }

    public void setCompetenceAt(LocalDate competenceAt) {
        this.competenceAt = competenceAt;
    }

    public BigDecimal getLevyValue() {
        return levyValue;
    }

    public void setLevyValue(BigDecimal levyValue) {
        this.levyValue = levyValue;
    }

    public Integer getInstallmentQt() {
        return installmentQt;
    }

    public void setInstallmentQt(Integer installmentQt) {
        this.installmentQt = installmentQt;
    }

    public String getCancelJustify() {
        return cancelJustify;
    }

    public void setCancelJustify(String cancelJustify) {
        this.cancelJustify = cancelJustify;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public SystemUser getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(SystemUser systemUser) {
        this.systemUser = systemUser;
    }

    public List<Installment> getInstallments() {
        return installments;
    }

    public void setInstallments(List<Installment> installments) {
        this.installments = installments;
    }
}
