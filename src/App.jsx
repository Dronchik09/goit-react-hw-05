import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import css from "./App.module.css";

export default function App(){
  return(
    
    <div className={css.container}>
      <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path = "/movies/:movieId" element = {<MovieDetailsPage />}>
        <Route path = "cast" element = {<MovieCast />}/>
        <Route path = "reviews" element = {<MovieReviews />}/>
      </Route>  
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
  
  );
}