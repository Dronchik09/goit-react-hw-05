import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import css from "./App.module.css";

export default function App(){
  return(
    
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path = "/movies/:movieId" element = {<MovieDetailsPage />}>
        <Route path = "cast" element = {<MovieCast />}/>
        <Route path = "reviews" element = {<MovieReviews />}/>
      </Route>  
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
    </div>
  
  );
}