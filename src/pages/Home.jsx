import React from "react";
import { useNavigate } from "react-router-dom";
import germany2 from "../assets/germany2.jpeg";

export const Home = () => {
  let navigate = useNavigate();

  function clickHandler() {
    navigate("/tours");
  }

  return (
    <div className="bg-dark position-relative home-container">
      <img src={germany2} className="w-100 h-100" />

      <button
        className="bg-danger explore-button position-absolute home-button"
        style={{ color: "#FFF125" }}
        onClick={clickHandler}
      >
        Explore Tours
      </button>
    </div>
  );
};

//<img src='https://img.freepik.com/free-photo/neuschwanstein-castle-germany_395237-205.jpg?t=st=1734056745~exp=1734060345~hmac=204e901494c6c4cd8a852dd442b07d739a08eb6d5c41cc63ac8e91d11eeadeb6&w=996' className='w-100 h-100' />
