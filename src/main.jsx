import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePages/HomePage";
import NotFoundPage from "./Pages/HomePages/NotFoundPage";
import CharactersListPage from "./Pages/CharacterPages/CharactersListpage";
import CharacterPage from "./Pages/CharacterPages/CharacterPage";
import BooksListPage from "./Pages/BookPages/BooksListPage";
import BookPage from "./Pages/BookPages/BookPage";
import HousesListPage from "./Pages/HousesPages/HousesListPage";
import HousePage from "./Pages/HousesPages/HousePage";
import SpellsListPage from "./Pages/SpellsPages/SpellsListPage";
import SpellPage from "./Pages/SpellsPages/SpellPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/characters", element: <CharactersListPage /> },
      { path: "/books", element: <BooksListPage /> },
      { path: "/houses", element: <HousesListPage /> },
      { path: "/spells", element: <SpellsListPage /> },
      { path: "/characters/:characterId", element: <CharacterPage /> },
      { path: "/books/:bookId", element: <BookPage /> },
      { path: "/houses/:houseId", element: <HousePage /> },
      { path: "/spells/:spellId", element: <SpellPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
