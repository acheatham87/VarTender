import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { FavoriteList } from "./favorites/FavoriteList";
import { FavoriteDelete } from "./favorites/FavoriteDelete";
import { FavoriteDetails } from "./favorites/FavoriteDetails";
import { CocktailList } from "./cocktails/CocktailList";
import { CocktailDetails } from "./cocktails/CocktailDetails";
import { UserIngredientList } from "./userIngredient/UserIngredientList";
import { IngredientList } from "./ingredient/IngredientList";
import { UserIngredientDetails } from "./userIngredient/UserIngredientDetails";
import { UserIngredientDelete } from "./userIngredient/UserIngredientDelete";
import { IngredientDetails } from "./ingredient/IngredientDetails";

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

          <Route path="myBar" >
            <Route index element={<UserIngredientList />} />
            <Route path="delete/:id" index element={<UserIngredientDelete />} />
            <Route path="ingredientDetails/:id" index element={<UserIngredientDetails />} />
          </Route>

          <Route path="ingredient" >
            <Route index element={<IngredientList />} />
            <Route path="details/:id" index element={<IngredientDetails />} />
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