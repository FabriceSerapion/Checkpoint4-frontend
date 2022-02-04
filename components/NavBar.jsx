import * as React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <nav
        className="uk-navbar-container uk-margin uk-navbar-right NavBar uk-navbar-transparent"
        uk-navbar="mode: click"
      >
        <div className="uk-navbar-right ">
          <ul className="uk-navbar-nav">
            <li>
              <a
                className="test"
                data-uk-icon="icon: menu "
                uk-navbar="mode: click"
                href="#"
              ></a>
              <div className="uk-navbar-dropdown  ">
                <ul className="uk-nav uk-navbar-dropdown-nav  ">
                  <li>
                    <Link href="/">
                      <a>Accueil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/films">
                      <a>Films</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/series">
                      <a>Séries</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/connexion">
                      <a>Connexion</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
