import './style.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUp, setLikeUP] = useState(likes);
  const [likeDown, setLikeDown] = useState(dislikes);

  const handleClickUp = () => {
    setLikeUP(likeUp + 1);
  };

  const handleClickDown = () => {
    setLikeDown(likeDown + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button
          onClick={handleClickUp}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likeUp}
        </span>
        <button
          onClick={handleClickDown}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likeDown}
        </span>
      </div>
    </div>
  );
};
