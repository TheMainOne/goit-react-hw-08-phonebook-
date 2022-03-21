import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";
import ResponsiveAppBar from "./AppBar/AppBarNew";
import Registration from "./Registration/Registration";
import { Container } from "./GlobalStyles";
import { Login } from "./Login/Login";
import Layout from "./Layout/Layout";
import { Phonebook } from "./Phonebook/Phonebook";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./Phonebook/PublicRoute/PublicRoute";
import { Home } from './Home/Home'
import Footer from "./Footer/Footer";

export const App = () => {
  return (
    <Container>
      <Toaster />
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
                <Home/>
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
      <Footer title={'Phonebook'}/>
    </Container>
  );
};
