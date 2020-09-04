package com.cariocadevs.ecad.challenge.controller;

import com.cariocadevs.ecad.challenge.dto.LevyTitleDTO;
import com.cariocadevs.ecad.challenge.service.levyTitle.LevyTitleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(value = "levyTitle")
@RequestMapping("/api/levy_title")
public class LevyTitleController extends BaseRestController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LevyTitleController.class);

    @Autowired
    private LevyTitleService levyTitleService;
    @ApiOperation(value = "Api para Titulo de cobrança, busca todos os titulos.s")
    @GetMapping(path = "/", produces = APPLICATION_JSON, consumes = APPLICATION_JSON)
    public ResponseEntity<?> findAll(@RequestHeader(value = "Accept-Language", required = false) String language) {
        String method = " findAll LevyTitle";
        LOGGER.info("{} Request:", method);
        List<LevyTitleDTO> list = this.levyTitleService.findAll();
        LOGGER.info("{} Response: {}", method, list);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


}
