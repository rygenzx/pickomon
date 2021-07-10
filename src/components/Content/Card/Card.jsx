import React, { Fragment, useEffect, useState } from "react";
import API from "./../../../services/index";
import "./Card.css";

function Card(props) {
  const [gender, setGender] = useState([]);

  const getSpecPokemon = () => {
    API.getData("gender", props.data.id).then((result) => {
      setGender(result);
    });
  };

  // const handleClick = (id) => {
  //   const dataItem = document.getElementById(id);
  //   const imageContainer =
  //     dataItem.children[0].children[0].children[0].children[1];
  //   const image = imageContainer.firstChild;

  //   // dataItem.className =
  //   //   "rounded-lg cursor-pointer bg-gradient-to-b transform scale-105 shadow-2xl from-yellow-100  to-yellow-300";
  //   // image.className = "mx-auto pt-4";
  // };

  useEffect(() => {
    getSpecPokemon();
  }, []);

  return (
    <Fragment>
      <div className="pokemon-item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2">
        <div
          className="card rounded-lg shadow-xl cursor-pointer bg-gradient-to-b transform transition ease-in duration-150 hover:scale-105 hover:shadow-2xl from-transparent to-transparent hover:from-yellow-100  hover:to-yellow-300"
          id={props.data.id}
          onClick={() => props.detail(props.data.id)}
        >
          <div className="rounded-lg p-2 bg-white transform transition ease-in duration-150 hover:bg-opacity-0 bg-opacity-30 flex flex-col justify-center">
            <div className="border-2 border-white rounded-md bg-pokeball">
              <div className="px-2 pb-4 py-2">
                <div className="card-header grid">
                  <div className="flex justify-between items-center text-gray-900">
                    <p className="font-bold text-blue-400 text-lg">
                      XP. {props.data.base_experience}
                    </p>
                    <div>
                      {gender.name === "male" ? (
                        <i className="fas fa-mars text-3xl text-blue-400"></i>
                      ) : gender.name === "female" ? (
                        <i className="fas fa-venus text-3xl text-pink-400"></i>
                      ) : (
                        <i className="fas fa-genderless text-4xl text-green-400"></i>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-img h-32">
                  <img
                    src={props.data.sprites.front_default}
                    className="mx-auto pt-8"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="text-lg capitalize text-gray-900 font-bold">
                    {props.data.name}
                  </p>
                  <div className="flex justify-center mt-1">
                    <p
                      className={`uppercase text-xs rounded-lg font-bold text-white bg-${props.data.types[0].type.name} px-2 py-1`}
                    >
                      {props.data.types[0].type.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;