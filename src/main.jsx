import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import CharactersListPage from "./Pages/CharactersListpage";
import BooksListPage from "./Pages/BooksListPage";
import HousesListPage from "./Pages/HousesListPage";
import SpellsListPage from "./Pages/SpellsListPage";
import CharacterPage from "./Pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/characters", element: <CharactersListPage /> },
      { path: "/books", element: <BooksListPage /> },
      { path: "/Houses", element: <HousesListPage /> },
      { path: "/Spells", element: <SpellsListPage /> },
    ],
  },
  { path: "/characters/:characterId", element: <CharacterPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
