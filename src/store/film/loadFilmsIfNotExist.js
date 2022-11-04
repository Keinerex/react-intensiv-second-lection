import { cinemaSlice, filmSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "./selectors";

export const loadFilmsIfNotExist = (cinemaId) => (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }

  dispatch(filmSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/films?cinemaId=${cinemaId}`)
    .then((response) => response.json())
    .then((cinemas) => {
      dispatch(filmSlice.actions.successLoading(prepareData(cinemas)));
    })
    .catch(() => {
      dispatch(filmSlice.actions.failLoading());
    });
};
