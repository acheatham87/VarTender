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
import {CreateCocktail} from "./createCocktail/CreateCocktail";
import { CreatedCocktailList } from "./createCocktail/CreateCocktailList";
import { CreateCocktailDetails } from "./createCocktail/CreateCocktailDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={isLoggedIn ? <FavoriteList /> : <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="favorite" >
            <Route path="delete/:id" element={isLoggedIn ? <FavoriteDelete /> : <Navigate to="/login" />} />
            <Route path="details/:id" element={isLoggedIn ? <FavoriteDetails /> : <Navigate to="/login" />} />
          </Route>

          <Route path="myBar" >
            <Route index element={isLoggedIn ? <UserIngredientList /> : <Navigate to="/login" />} />
            <Route path="delete/:id" index element={isLoggedIn? <UserIngredientDelete /> : <Navigate to="/login" />} />
            <Route path="ingredientDetails/:id" index element={isLoggedIn? <UserIngredientDetails /> : <Navigate to="/login" />} />
          </Route>

          <Route path="create" >
            <Route index element={isLoggedIn ? <CreateCocktail /> : <Navigate to="/login" />} />
            <Route path="details/:idDrink" element={isLoggedIn ? <CreateCocktailDetails /> : <Navigate to="/login" />} />
          </Route>

          <Route path="ingredient" >
            <Route index element={isLoggedIn ? <IngredientList /> : <Navigate to="/login" />} />
            <Route path="details/:id" index element={isLoggedIn ? <IngredientDetails /> : <Navigate to="/login" />} />
          </Route>

          <Route path="cocktail" >
            <Route index element={isLoggedIn ? <CocktailList /> : <Navigate to="/login" />} />
            <Route path="details/:idDrink" element={isLoggedIn ? <CocktailDetails /> : <Navigate to="/login" />} />
          </Route>

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};