import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";
// import AppBar from "./AppBar/AppBar";
import ResponsiveAppBar from "./AppBar/AppBarNew";
import Registration from "./Registration/Registration";
import { Container } from "./GlobalStyles";
import { Login } from "./Login/Login";
import Layout from "./Layout/Layout";
import { Phonebook } from "./Phonebook/Phonebook";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./Phonebook/PublicRoute/PublicRoute";

export const App = () => {
  return (
    <Container>
      <Toaster />
      {/* <AppBar /> */}
      <ResponsiveAppBar/>
      <Suspense fallback="" />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Layout />
            </PublicRoute>
          }
        >
          <Route
            path="/"
            element={
              <PublicRoute>
                <h1>Welcome to our phonebook app</h1>
              </PublicRoute>
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo={`/phonebook`}>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo={`/phonebook`} restricted>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
