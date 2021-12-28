import React from 'react';

const Photo = ({ ...image }) => {
  const {
    alt_description: alt,
    urls: { regular: photo },
    likes,
    user: {
      name,
      profile_image: { medium },
      portfolio_url,
    },
  } = image;

  return (
    <article className="photo">
      <img src={photo} alt={alt} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
