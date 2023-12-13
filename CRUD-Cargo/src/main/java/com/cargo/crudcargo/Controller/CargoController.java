package com.cargo.crudcargo.Controller;

import com.cargo.crudcargo.Models.Cargo;
import com.cargo.crudcargo.Dto.CargoDto;
import com.cargo.crudcargo.Repositories.CargoRepository;
import com.cargo.crudcargo.Services.CargoService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/cargos", produces = {"application/json"})
public class CargoController {

    @Autowired
    private CargoService cargoService;

    @Autowired
    private CargoRepository cargoRepository;

    @GetMapping
    @ResponseBody
    public List<Cargo> getAllCargos() {
        return cargoService.getAllCargos();
    }

    @GetMapping("/{id}")
    public Cargo getCargoById(@PathVariable UUID id) {
        return cargoService.getCargoById(id);
    }


    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public ResponseEntity<Object> cadastrarCargo(@RequestBody CargoDto dadosRecebidos) {
        if (dadosRecebidos.nomeCargo() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O Cargo deve ser informado");
        }

        Cargo cargo = new Cargo();
        BeanUtils.copyProperties(dadosRecebidos, cargo);
        return ResponseEntity.status(HttpStatus.CREATED).body(cargoRepository.save(cargo));
    }

    @PutMapping(value = "/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public ResponseEntity<Object> editarCargo(@PathVariable(value = "id") UUID id, @RequestBody CargoDto dadosRecebidos) {
        Optional<Cargo> cargoBuscado = cargoRepository.findById(id);
        if (!cargoBuscado.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cargo não encontrado");
        }

        Cargo cargo = cargoBuscado.get();
        BeanUtils.copyProperties(dadosRecebidos, cargo);
        return ResponseEntity.status(HttpStatus.CREATED).body(cargoRepository.save(cargo));
    }
}
