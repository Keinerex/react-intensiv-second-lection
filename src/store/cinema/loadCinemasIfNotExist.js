import { cinemaSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "./selectors";

export const loadCinemasIfNotExist = (dispatch, getState) => {
  if (selectCinemas(getState())?.length > 0) {
    return;
  }

  dispatch(cinemaSlice.actions.startLoading());
  fetch("http://localhost:3001/api/cinemas")
    .then((response) => response.json())
    .then((cinemas) => {
      dispatch(cinemaSlice.actions.successLoading(prepareData(cinemas)));
    })
    .catch(() => {
      dispatch(cinemaSlice.actions.failLoading());
    });
};
