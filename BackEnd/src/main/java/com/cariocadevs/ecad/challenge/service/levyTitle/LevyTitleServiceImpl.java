package com.cariocadevs.ecad.challenge.service.levyTitle;

import com.cariocadevs.ecad.challenge.dto.FilterDTO;
import com.cariocadevs.ecad.challenge.dto.LevyTitleDTO;
import com.cariocadevs.ecad.challenge.repository.LevyTitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class LevyTitleServiceImpl implements LevyTitleService{



    private LevyTitleRepository levyTitlerepository;

    @Autowired
    public LevyTitleServiceImpl(LevyTitleRepository levyTitlerepository) {
        this.levyTitlerepository = levyTitlerepository;
    }
    @Override
    public List<LevyTitleDTO> findAll() {
        List<LevyTitleDTO> list = new ArrayList<>();
        levyTitlerepository.findAll().forEach(levyTitle -> list.add(new LevyTitleDTO(levyTitle)));
        return list;
    }

    public List<LevyTitleDTO> findByFilter(FilterDTO filter) {
        LocalDate startDate = LocalDate.parse(filter.getStartDate());
        LocalDate endDate = LocalDate.parse(filter.getEndDate());
        List<LevyTitleDTO> list = new ArrayList<>();
        levyTitlerepository.findAllByDateModelCreatedAtBetween(startDate,endDate).forEach(levyTitle -> list.add(new LevyTitleDTO(levyTitle)));
        return list;
    }
}
