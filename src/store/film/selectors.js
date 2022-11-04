import { Statuses } from "../../constants/statuses";

export const selectFilmModule = (state) => state.film;

export const selectFilms = (state) =>
  Object.values(selectFilmModule(state).entities);

export const selectFilmById = (state, filmId) =>
  selectFilmModule(state).entities[filmId];

export const selectIsFilmsLoading = (state) =>
  selectFilmModule(state).status === Statuses.inProgress;
