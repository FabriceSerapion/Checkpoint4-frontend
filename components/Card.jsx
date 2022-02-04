/* eslint-disable react/prop-types */
import * as React from 'react';
import Image from 'next/image';

export default function Card({ title, image, director, releaseDate, platform }) {
  return (
    <>
      <div className="borderRadius">
        <div className=" uk-card uk-card-default uk-margin-large-bottom uk-margin-left uk-margin-right  ">
          {/* <div className="uk-card-media-top ">
            <Image
              src={image}
              alt={image}
              layout="responsive"
              width={500}
              height={400}
            />
          </div> */}
          <div className="uk-card-body CardColor">
            <h3 className="uk-card-title">{title}</h3>
            <p>{director}</p>
            <p>Année de sortie : {releaseDate}</p>
            <p>Disponible sur : {platform}</p>
          </div>
          <button className="uk-button uk-button-default buttonCards">Voir plus</button>

        </div>
      </div>
    </>
  );
}
/* icon: plus-circle */