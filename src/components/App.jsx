// import { Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from "./GlobalStyles";
import AppBar from "./AppBar/AppBar";
import Registration from './Registration/Registration';
import { Container } from "./GlobalStyles";
import { Login } from './Login/Login';
import Layout from './Layout/Layout';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <hr />
      <Suspense fallback=""/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<h1>Welcome to our phonebook app</h1>} />
          <Route path='phonebook' element={<Phonebook/>}/>
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login/>}/>
          </Route>
      </Routes>
    </Container>
  );
};
