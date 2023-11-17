import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './views/Home';
import routes from './Constants/routes';
import ErrorPage from './Views/ErrorPage';

const Rutas = () => (
  <Router>
    <Routes>
      <Route exact path={routes.HOME} element={<Home />} />
      <Route path={routes.ERRONEAS} element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default Rutas;