package com.cariocadevs.ecad.challenge.dto;


import com.cariocadevs.ecad.challenge.model.LevyTitle;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class LevyTitleDTO {

    private Long id;
    private LocalDate competenceAt;
    private BigDecimal levyValue;
    private Integer installmentQt;
    private String cancelJustify;
    private String level;
    private UserDTO user;
    private SystemUserDTO systemUser;
    private List<InstallmentDTO> installments;


    public LevyTitleDTO(LevyTitle levyTitle) {
        this.setId(levyTitle.getId());
        this.setCompetenceAt(levyTitle.getCompetenceAt());
        this.setLevyValue(levyTitle.getLevyValue());
        this.setInstallmentQt(levyTitle.getInstallmentQt());
        this.setCancelJustify(levyTitle.getCancelJustify());
        this.setLevel(levyTitle.getLevel());
        this.setUser(new UserDTO(levyTitle.getUser()));
        this.setSystemUser(new SystemUserDTO(levyTitle.getSystemUser()));
        List<InstallmentDTO> installmentDTOs = new ArrayList<>();
        levyTitle.getInstallments().stream().forEach(installment -> installmentDTOs.add(new InstallmentDTO(installment)));
        this.setInstallments(installmentDTOs);
    }

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

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public SystemUserDTO getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(SystemUserDTO systemUser) {
        this.systemUser = systemUser;
    }

    public List<InstallmentDTO> getInstallments() {
        return installments;
    }

    public void setInstallments(List<InstallmentDTO> installments) {
        this.installments = installments;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
