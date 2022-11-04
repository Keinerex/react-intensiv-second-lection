export const selectCinemaModule = (state) => state.cinema;

export const selectCinemas = (state) =>
  Object.values(selectCinemaModule(state).entities);

export const selectCinemaById = (state, cinemaId) =>
  selectCinemaModule(state).entities[cinemaId];

export const selectCinemasFilmIds = (state, cinemaId) =>
  selectCinemaModule(state).entities[cinemaId].films;
