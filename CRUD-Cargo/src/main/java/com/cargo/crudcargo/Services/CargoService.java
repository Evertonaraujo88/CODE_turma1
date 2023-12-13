package com.cargo.crudcargo.Services;

import com.cargo.crudcargo.Models.Cargo;
import com.cargo.crudcargo.Repositories.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CargoService {

    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> getAllCargos() {
        return cargoRepository.findAll();
    }

    public Cargo getCargoById(UUID id) {
        return cargoRepository.findById(id).orElse(null);
    }

    public void addCargo(Cargo cargo) {
        cargoRepository.save(cargo);
    }

}

