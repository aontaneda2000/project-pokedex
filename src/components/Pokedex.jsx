import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
import SearchInput from "./Pokedex/SearchInput";
import SelectType from "./Pokedex/SelectType";
import HeaderPoke from "./shared/HeaderPoke";
import "./styles/searchinput.css";
import "./styles/pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [optionType, setOptionType] = useState("All");

  useEffect(() => {
    /* Logica del input */
    if (optionType !== "All") {
      /* Aqui se hace la logica de cuando el usuario quiere filtrar por tipo */
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios
        .get(URL)
        .then((res) => {
          const arr = res.data.pokemon.map((e) => e.pokemon);
          setPokemons({ results: arr });
        })
        .catch((err) => console.log(err));
    } else if (pokeSearch) {
      /* logica cuando el usuario busca por el input */
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

      const obj = {
        results: [{ url }],
      };
      setPokemons(obj);
    } else {
      /* Logica cuando el usuario quiere todos los pokemons */
      const URL = "https://pokeapi.co/api/v2/pokemon";
      axios
        .get(URL)
        .then((res) => {
          setPokemons(res.data);
        })
        .catch((err) => console.log(err));
      /* Cada vez que cambie hace una peticion */
    }
  }, [pokeSearch, optionType]);

  console.log(pokemons);
  // console.log(optionType);
  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <section className="section__pokemons">
      <HeaderPoke />
      <div className="section__container">
        <h1 className="section__title">Welcome {nameTrainer}</h1>
        <SearchInput
          setPokeSearch={setPokeSearch}
          setOptionType={setOptionType}
        />
        <SelectType
          optionType={optionType}
          setOptionType={setOptionType}
          setPokeSearch={setPokeSearch}
        />
      </div>
      <div className="cards-container">
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
    </section>
  );
};

export default Pokedex;
