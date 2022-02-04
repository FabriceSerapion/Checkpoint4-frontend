import Cards from '../components/Card';
import Link from 'next/link';
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
// import Image from 'next/image';

export default function Menu() {
  const [result, setResult] = useState([]); // stock le résultat de l'api dans result

  useEffect(() => {
    let apiCheckpoint4 = 'http://localhost:3001/'; // appel de l'api pour product
    axios
      .get(apiCheckpoint4)
      .then((response) => {
        console.log(response.data.data);
        setResult(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    
      <header>        
        <div className="container">

          <NavBar />
          
          {/* classe horizontalNavBar qui permet de faire disparaitre la navBar en mode téléphone */}
          <div className="horizontalNavBar">
            
            <div>
              <Link href="/">
                <a>Accueil</a>
              </Link>
            </div>
            <div>
              <Link href="/films">
                <a>Films</a>
              </Link>
            </div>
            <div>
              <Link href="/series">
                <a>Séries</a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
            <div>
              <Link href="/connexion">
                <a>Connexion</a>
              </Link>
            </div>
          </div>
        </div>
        
      </header>
      
      <div>
        {/* MAP sur les séries */}
        <h1 className="uk-text-center">Les Séries</h1>
        <div className="container-search ">
          <div className="uk-margin ">
            <form className="uk-search uk-search-default ">
              <span uk-search-icon></span>
              <input
                className="uk-search-input uk-position-center "
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="uk-grid uk-grid-column-large uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-4@l uk-margin uk-text-center ">
          {result &&
            result
              .filter((contenu) => contenu.category_id === 2)
              .map((element, index) => (
                <Cards
                  key={index}
                  title={element.title}
                  director={element.director}
                  releaseDate={element.releaseDate}
                  platform={element.platform_id === 1 ? "Netflix" : "Amazon Prime"}
                //   image={`/assets/${element.image}`}
                />
              ))}
        </div>

      </div>
    </>
  );
}
