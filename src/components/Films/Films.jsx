import { Film } from "../Film/Film";

import styles from "./styles.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFilmsIfNotExist } from "../../store/film/loadFilmsIfNotExist";
import { selectFilms, selectIsFilmsLoading } from "../../store/film/selectors";
import { selectCinemasFilmIds } from "../../store/cinema/selectors";

export const Films = ({ cinemaId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilmsIfNotExist(cinemaId));
  }, [cinemaId]);

  const filmIds = useSelector((state) => selectCinemasFilmIds(state, cinemaId));
  const isLoading = useSelector((state) => selectIsFilmsLoading(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!filmIds) {
    return null;
  }

  return (
    <div>
      <h3>Films</h3>
      <div>
        {filmIds.map((id) => (
          <Film key={id} filmId={id} className={styles.film} />
        ))}
      </div>
    </div>
  );
};
