package com.cargo.crudcargo.Dto;

import jakarta.validation.constraints.NotBlank;


public record CargoDto(
        @NotBlank String nomeCargo,
        String id
) {}
