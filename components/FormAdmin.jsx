import axios from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function FormAdmin({ id, message }) {
  const [category, setCategory] = useState();
  const [allCategory, setAllCategory] = useState(); /*  stock les catégories de contenu */
  const [title, setTitle] = useState();
  const [poster, setPoster] = useState();
  const [director, setDirector] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [allPlatformId, setAllPlatformId] = useState();
  const [platformId, setPlatformId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      category_id: category,
      title: title,
      director: director,
      release_date: releaseDate,
      poster: poster,
      platform_id: platformId

    };

    axios
      .put(`http://localhost:3001/admin/contenu/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
      .then((response) => {
        message(`${title} - ${response.data.message}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
    //   .get(`http://localhost:3001/admin/contenu/category`)
      .get(`http://localhost:3001/admin/contenu/`)
      .then((response) => {
        setAllCategory(response.data.data);
      });
    axios.get(`http://localhost:3001/admin/contenu/${id}`).then((response) => {
      setCategory(response.data.data.category);
      setTitle(response.data.data.title);
      setDirector(response.data.data.director);
      setPoster(response.data.data.poster);
      setReleaseDate(response.data.data.releaseDate);
      setPlatformId(response.data.data.platform_id)
    });
  }, [id]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="uk-margin">
          <div uk-form-custom="target: > * > span:first-child">
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Catégories :</option>
              {allCategory &&
                allCategory.map((cat, index) => {
                  return (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  );
                })};
            </select>
            <button
              className="uk-button uk-button-default"
              type="button"
              tabIndex="-1"
            >
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>
        </div>

        <div className="uk-margin">
          <div uk-form-custom="target: > * > span:first-child">
            <select
              name="platform"
              onChange={(e) => setPlatformId(e.target.value)}
            >
              <option>Plateformes :</option>
              {allPlatformId &&
                allPlatformId.map((platform, index) => {
                  return (
                    <option key={index} value={platform.platform}>
                      {platform.platform}
                    </option>
                  );
                })};
            </select>
            <button
              className="uk-button uk-button-default"
              type="button"
              tabIndex="-1"
            >
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>
        </div>

        {/* <label>
          Catégorie :
          <input
            className="uk-input"
            type="text"
            name={category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label> */}
        <label>
          Titre :
          <input
            className="uk-input"
            type="text"
            name={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Réalisateur :
          <input
            className="uk-input"
            type="text"
            name={director}
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </label>
        <label>
          Affiche :
          <input
            className="uk-input"
            type="number"
            name={poster}
            value={poster}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Date de sortie :
          <input
            className="uk-input"
            type="text"
            name={releaseDate}
            value={releaseDate}
            onChange={(e) => setDirector(e.target.value)}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}

// composant select pour les catégories
{
  /* <form>
  <div className="uk-margin">
    <div uk-form-custom="target: > * > span:first-child">
      <select>
              <option name={category} value={category}>
                Category :
              </option>
              <option name={category} value={category}>
                Pizzas
              </option>
              <option name={category} value={category}>
                Tartes flambées
              </option>
              <option name={category} value={category}>
                Pâtes
              </option>
              <option name={category} value={category}>
                Salades
              </option>
              <option name={category} value={category}>
                Desserts
              </option>
              <option name={category} value={category}>
                Boissons
              </option>
            </select>
      <button
        className="uk-button uk-button-default"
        type="button"
        tabIndex="-1"
      >
        <span></span>
        <span uk-icon="icon: chevron-down"></span>
      </button>
    </div>
  </div>
</form>; */
}