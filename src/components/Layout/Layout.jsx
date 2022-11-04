import { Link } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/cinemas">Cinemas</Link>
      </header>
      <div>{props.children}</div>
      <footer>footer</footer>
    </div>
  );
};
