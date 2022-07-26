import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { FavoriteList } from "./favorites/FavoriteList";
import { FavoriteDelete } from "./favorites/FavoriteDelete";
import { FavoriteDetails } from "./favorites/FavoriteDetails";
import { CocktailList } from "./cocktails/CocktailList";
import { CocktailDetails } from "./cocktails/CocktailDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <FavoriteList /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="favorite" >
            <Route path="delete/:id" element={<FavoriteDelete />} />
            <Route path="details/:id" element={<FavoriteDetails />} />
          </Route>

          <Route path="cocktail" >
            <Route index element={<CocktailList />} />
            <Route path="details/:idDrink" element={<CocktailDetails />} />
          </Route>

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};