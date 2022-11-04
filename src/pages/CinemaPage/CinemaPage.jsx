import { Cinema } from "../../components/Cinema/Cinema";
import { useEffect, useState } from "react";

import classnames from "classnames";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCinemas } from "../../store/cinema/selectors";
import { loadCinemasIfNotExist } from "../../store/cinema/loadCinemasIfNotExist";
import { NavLink, Outlet } from "react-router-dom";

export const CinemaPage = () => {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => selectCinemas(state));

  console.log(cinemas);

  useEffect(() => {
    dispatch(loadCinemasIfNotExist);
  }, []);

  return (
    <div>
      <div>
        {cinemas.length > 0 &&
          cinemas.map((cinema) => (
            <NavLink
              to={cinema.id}
              className={({ isActive }) =>
                classnames(styles.tab, {
                  [styles.activeTab]: isActive,
                })
              }
              key={cinema.id}
            >
              {cinema.name}
            </NavLink>
          ))}
      </div>
      <Outlet />
    </div>
  );
};
