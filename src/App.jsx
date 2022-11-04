import { Layout } from "./components/Layout/Layout";
import { CinemaPage } from "./pages/CinemaPage/CinemaPage";
import { cinemas } from "./constants/mock";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Cinema } from "./components/Cinema/Cinema";

const test = "Hello";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout a={test}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/cinemas" element={<CinemaPage />}>
              <Route path=":cinemaId" element={<Cinema />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
