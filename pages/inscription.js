import * as React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Image from 'next/image';

export default function Inscription() {
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  function handleChangeFirstName(e) {
    setUserFirstname(e.target.value);
  }
  function handleChangeLastName(e) {
    setUserLastname(e.target.value);
  }
  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setUserPassword(e.target.value);
  }

  const toggleConfirmation = confirmation ? '' : 'hidden-confirmation';
  return (
    <>
      <div className="global-container">
        <div className="container-formulaire">
          <div className="formulaire">
            <h2>Inscription</h2>
            <form>
              <div className="input-div">
                <label htmlFor="firstname">
                  Prénom
                  <input
                    type="text"
                    id="firstname"
                    autoComplete="off"
                    onChange={handleChangeFirstName}
                  />
                </label>
              </div>
              <div className="input-div">
                <label htmlFor="lastname">
                  Nom
                  <input
                    type="text"
                    id="lastname"
                    autoComplete="off"
                    onChange={handleChangeLastName}
                  />
                </label>
              </div>
              <div className="input-div">
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    onChange={handleChangeEmail}
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
                    onChange={handleChangePassword}
                  />
                </label>
              </div>
              <div className="buttons-inscription">
                <button type="submit" id="inscription-login">
                  Enregistrer
                </button>
              </div>
            </form>
            <button type="submit" id="retour-accueil">
              <Link href="/">
                <a>Retourner à l&apos;accueil</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
