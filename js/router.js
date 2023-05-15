"use strict";

import './app.js'
import { loadBannerFilm } from './app.js';
import { loadFilm } from './app.js';


const routes = {

  "/": "/index.html",
  "/film": "/pages/film.html",
  "/planet": "/pages/planet.html",

};

const route = async () => {
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  const path = window.location.pathname;
  const route = routes[path];

  const response = await fetch(route);
  const html = await response.text();

  document.getElementById("root").innerHTML = html;

  if (path == '/' || path == '/index.html') {
    loadBannerFilm()
  }


}

window.route = route;