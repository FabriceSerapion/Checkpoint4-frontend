/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Image from "next/image";
import FormAdmin from "./FormAdmin";
import axios from "axios";

export default function CardAdmin({ id }) {
  const [updateContenu, setUpdateContenu] = useState(""); /* updateProduct */
  const [deleteContenu, setDeleteContenu] = useState(""); /* delete product */
  const [contenu, setContenu] = useState([]); /*  stock les données de la bdd */
  const [message, setMessage] =
    useState(
      ""
    ); /*  permet l'actualisation après le clic d'un bouton de la page */

  const update = (id) => {
    axios
      .put(`http://localhost:3001/admin/contenu/${id}`)
      .then((response) => setMessage(`Modification réussie ${id} !`))
      .catch((error) => {
        setMessage(`Il y a eu une erreur`);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/admin/contenu/${id}`)
      .then((response) => setMessage(`Suppression réussie ${id} !`))
      .catch((error) => {
        setMessage(`Il y a eu une erreur`);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/contenu", {
        Headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setContenu(response.data.data);
        console.log(setContenu);
      });
  }, [message]);

  return (
    <>
      <div>
        {update && <FormAdmin id={updateContenu} message={update} />}
      </div>
      <div className="uk-flex uk-flex-inline uk-flex-between uk-width-1-1 uk-flex-wrap">
        {message}
        {contenu &&
          contenu.map((contenu, index) => {
            return (
              <div key={index}>
                <div className=" uk-card uk-card-default uk-padding-large uk-margin-large-bottom uk-margin-left uk-margin-right uk-margin-top">
                  <div className="uk-card-media-top ">
                    {/*   <Image
            src={image}
            alt={image}
            layout="responsive"
            width={500}
            height={400}
          /> */}
                  </div>
                  <div className="uk-card-body">
                    <h2 className="uk-card-title">
                      {/* id: {contenu.id}  */}
                      titre: {contenu.title}{" "}
                    </h2>
                    <h3>Réalisateur: {contenu.director}</h3>
                    <h3>catégorie de contenu: {contenu.category_id}</h3>
                    <h3>Année de sortie : {contenu.releaseDate}</h3>
                    <h3>
                      Où le regarder ?{" "}
                      {contenu.platform_id === 1
                        ? contenu.platform_id === 2
                          ? "Netflix"
                          : "Amazon Prime"
                        : "autre"}
                    </h3>
                  </div>
                  <div className="uk-flex uk-flex-column uk-flex-middle">
                    <button
                      //   className="uk-button uk-button-default buttonCards"
                      //   onClick={() => setUpdateContenu(contenu.id)}
                      onChange={(e) => setUpdateContenu(e.target.value.id)}
                      className="uk-button uk-button-default buttonCards"
                      message={update}
                      category_id={contenu.category_id}
                      title={contenu.title}
                      poster={contenu.poster}
                      releaseDate={contenu.releaseDate}
                      director={contenu.director}
                      platform_id={contenu.platform_id}
                      id={contenu.id}
                      onClick={() => update(contenu.id)}
                    >
                      Modifier
                    </button>
                    <button
                      onChange={(e) => setDeleteContenu(e.target.value.id)}
                      className="uk-button uk-button-danger"
                      message={update}
                      category_id={contenu.category_id}
                      title={contenu.title}
                      poster={contenu.poster}
                      releaseDate={contenu.releaseDate}
                      director={contenu.director}
                      platform_id={contenu.platform_id}
                      id={contenu.id}
                      onClick={() => handleDelete(contenu.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
