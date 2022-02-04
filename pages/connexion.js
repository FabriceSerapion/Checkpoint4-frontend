import * as React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Image from 'next/image';

export default function Connexion() {
  const [connect, setConnect] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    setConnect(true);

    try {
      await axios.post("http://localhost:3001/auth", {
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }

    const newEntry = { email, password };
    setAllEntry([...allEntry, newEntry]);
  };

  // function handleClick(e) {
  //   e.preventDefault();
  //   if (email && password) {
  //     alert('Vous êtes connecté');
  //   } else {
  //     alert('Veuillez renseigner tous les champs');
  //   }
  // }

  return (
    <>
      <div className="global-container">
        <div className='container-formulaire'>
          <div className="formulaire">
            <h2>Connexion</h2>

            <form action="" onSubmit={submitForm}>
              <div className="input-div">
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    pattern=".+@globex\.com"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="input-div">
                <label htmlFor="password">
                  Mot de passe
                  <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
            </form>
            <div className="buttons">
              <button type="submit" id="forgot-password">
                Mot de passe oublié ?
              </button>
              <button type="submit" id="creation-compte">
                <Link href="/inscription">
                  <a>Pas encore de compte ?</a>
                </Link>
              </button>
              <button type="submit" id="connexion-login" >
                connexion
              </button>
              <button type="submit" id="retour-accueil">
                <Link href="/">
                  <a>Retourner à l&apos;accueil</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
