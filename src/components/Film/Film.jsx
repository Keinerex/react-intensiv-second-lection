import { useState } from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilmById } from "../../store/film/selectors";
import { selectFilmCount } from "../../store/cart/selectors";
import { cartSlice } from "../../store/cart";

export const Film = ({ filmId, className }) => {
  const dispatch = useDispatch();
  const film = useSelector((state) => selectFilmById(state, filmId));
  const count = useSelector((state) => selectFilmCount(state, filmId));

  if (!film) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div>{film.name}</div>
      {film.price !== undefined ? (
        <div>{film.price}р</div>
      ) : (
        <div>Нет билетов</div>
      )}
      <div>
        <button
          onClick={() => dispatch(cartSlice.actions.removeFilm(filmId))}
          disabled={count === 0}
        >
          -
        </button>
        {count || 0}
        <button
          onClick={() => dispatch(cartSlice.actions.addFilm(filmId))}
          disabled={count === 6}
        >
          +
        </button>
      </div>
    </div>
  );
};
