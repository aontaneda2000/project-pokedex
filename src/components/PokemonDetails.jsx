import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/pokedetails.css";

const PokemonDetails = () => {
  const { name } = useParams();

  const [pokeInfo, setPokInfo] = useState();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="pokemon__details">
      <header className="pokemon__details-header">
        <img
          className="pokemon__details-img"
          src={pokeInfo?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>

      <h1>{pokeInfo?.name}</h1>
    </article>
  );
};

export default PokemonDetails;
