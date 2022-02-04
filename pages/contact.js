import Link from "next/link";
import NavBar from "../components/NavBar";
import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");

  const handleSend = async (e) => {
    setSent(true);
    try {
      await axios.post("http://localhost:3001/contact", {
        text,
        email,
        objet,
      });
    } catch (error) {
      console.error(error);
    }
  };
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
      <div className="uk-position-center">
        {!sent ? (
          <>
            <h2>Contactez nous</h2>
            <form className="uk-form-width-large" onSubmit={handleSend}>
              <div className="uk-margin ">
                <input
                  type="text"
                  name="firstname"
                  className="uk-input"
                  placeholder="votre prénom"
                />
              </div>
              <div className="uk-margin">
                <input
                  type="text"
                  name="lastname"
                  className="uk-input"
                  placeholder="votre nom"
                />
              </div>
              <div className="uk-margin">
                <input
                  type="text"
                  name="objet"
                  className="uk-input"
                  placeholder="Objet"
                  value={objet}
                  onChange={(e) => setObjet(e.target.value)}
                />
              </div>
              <div className="uk-margin">
                <input
                  type="text"
                  name="email"
                  className="uk-input"
                  placeholder="votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="uk-margin">
                <textarea
                  value={text}
                  className="uk-textarea"
                  placeholder="votre message"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </>
        ) : (
          <h2>Merci ! Email envoyé</h2>
        )}
      </div>
    </>
  );
}
