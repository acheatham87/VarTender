import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* <Route path="categories" >
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CatAddForm />} />
            <Route path="delete/:id" element={<CategoryDelete />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
          </Route> */}

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};