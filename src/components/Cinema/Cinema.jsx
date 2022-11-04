import { Films } from "../Films/Films";
import { Reviews } from "../Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCinemaById } from "../../store/cinema/selectors";

export const Cinema = () => {
  const { cinemaId } = useParams();
  const cinema = useSelector((state) => selectCinemaById(state, cinemaId));

  if (!cinema) {
    return null;
  }

  return (
    <div>
      <h2>{cinema.name}</h2>
      <Films cinemaId={cinema.id} />
      {/*<Reviews reviews={cinema.reviews}/>*/}
    </div>
  );
};
