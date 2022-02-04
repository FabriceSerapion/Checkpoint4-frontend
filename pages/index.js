import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div /* className={styles.container} */>
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
      <div className="uk-tile uk-tile-default uk-padding-large uk-margin-large-right uk-margin-large-left uk-margin-large-top uk-flex uk-flex-column uk-flex-middle uk-border-rounded">
        <h1>On regarde OÙ ce soir ?</h1>
        <p>
          Le premier site qui recense tout ce que vous avez envie de regarder et
          où vous pouvez le regarder
        </p>
      </div>
      {/* <div className="banniere-accueil">
        <h1>On regarde OÙ ce soir ?</h1>
        <p>
          Le premier site qui recense tout ce que vous avez envie de regarder et
          où vous pouvez le regarder
        </p>
      </div> */}
      <footer className={styles.footer}></footer>
    </div>
  );
}
