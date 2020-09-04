package com.cariocadevs.ecad.challenge.repository;

import com.cariocadevs.ecad.challenge.model.LevyTitle;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
@Repository
public interface LevyTitleRepository extends CrudRepository<LevyTitle, Long>, JpaSpecificationExecutor<LevyTitle> {

    public List<LevyTitle> findAllByDateModelCreatedAtBetween(LocalDate stardDate, LocalDate endDate);
}
