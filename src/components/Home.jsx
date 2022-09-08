import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import "./styles/home.css";
import logo from "../assets/img/logo.jpg";
import FooterPoke from "./shared/FooterPoke";

const Home = () => {
  /* genera instancia y guardar inf */
  const dispatch = useDispatch();

  /* Redireccionamiento */
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    /* evita que se recarge la pagina*/
    e.preventDefault();
    const inputValue = e.target.name.value.trim();

    /* Si y no le paso nada me salto el if en cambio si es distinto de vacio hago el dispatch(guarda inf) y navigate (redireccionamiento) */
    if (inputValue.length !== 0) {
      /* ejecutar esa action y enviar la informacion */
      dispatch(setNameTrainer(inputValue));
      navigate("./pokedex");
    }
    e.target.name.value = "";
  };

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" src={logo} alt="" />
        <h1 className="home__title">Hi Trainer</h1>
        <p className="home__parahrahp">To start</p>
        <form onSubmit={handleSubmit}>
          <input
            className="home__input"
            type="text"
            id="name"
            placeholder="write your name"
          />
          <button className="home__btn">Catch them all</button>
        </form>
      </div>
      <FooterPoke />
    </div>
  );
};

export default Home;
