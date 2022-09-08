import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import StatPokemon from "./StatPokemon";
import "./styles/pokedex.css";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(pokemon?.types[0].type.name);

  /* No ? Porque la inf ya llego */
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <article className={`pokemon__card `} onClick={handleClick}>
      <header
        className={`pokemon__card-header bg-${pokemon?.types[0].type.name}`}
      >
        <img
          className="pokemon__img"
          src={pokemon?.sprites.other["official-artwork"]["front_default"]}
          alt=""
        />
      </header>
      <section className="body">
        <h3>{pokemon?.name}</h3>
        <ul>
          {pokemon?.types.map((slot) => (
            <li key={slot.type.url}>{slot.type.name}</li>
          ))}
        </ul>
        <hr />
      </section>
      <footer>
        <ul className="pokemon__card-nav">
          {pokemon?.stats.map((stat) => (
            <StatPokemon key={stat.stat.url} infoStat={stat} />
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default PokemonCard;
