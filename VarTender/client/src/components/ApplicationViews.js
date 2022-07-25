import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { FavoriteList } from "./favorites/FavoriteList";
import { FavoriteDelete } from "./favorites/FavoriteDelete";
import { FavoriteDetails } from "./favorites/FavoriteDetails";

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

          <Route path="FavoritedDrink" >
            {/* <Route index element={<CategoryList />} /> */}
            {/* <Route path="create" element={<CatAddForm />} /> */}
            <Route path="delete/:id" element={<FavoriteDelete />} />
            {/* <Route path="details/:id" element={<FavoriteDetails />} /> */}
          </Route>

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};