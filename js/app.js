'use strict'

import './router.js'

let idFilm = 0

const createBannerFilm = film => {

  const img = document.createElement('img')
  img.classList.add('banner')
  img.src = `./img/${film.title}.png`
  img.href = '/film'
  img.id = idFilm
  idFilm++
  img.onclick = () => {
    route()
    loadFilm(img.id)
  }
  return img
}

export const loadBannerFilm = async () => {

  const url = 'https://swapi.dev/api/films/?format=json'

  const response = await fetch(url)
  const data = await response.json()
  const film = await data.results
  const container = document.getElementById('container')
  const cards = film.map(createBannerFilm)

  container.replaceChildren(...cards)

}

const createFilm = async film => {

  const card = document.createElement('div')
  card.classList.add('card')

  const title = document.createElement('h1')
  title.classList.add('title')
  title.textContent = film.title

  const content = document.createElement('div')
  content.classList.add('content')

  const img = document.createElement('img')
  img.src = `./img/${film.title}.png`
  img.classList.add('image-film')

  const description = document.createElement('div')
  description.classList.add('description')

  const director = document.createElement('span')
  director.classList.add('director')
  director.textContent = film.director

  const producer = document.createElement('span')
  producer.classList.add('producer')
  producer.textContent = film.producer

  const date = document.createElement('span')
  date.classList.add('date')
  date.textContent = film.release_date

  const openning = document.createElement('span')
  openning.classList.add('openning')
  openning.textContent = film.opening_crawl

  const planets = document.createElement('div')
  planets.classList.add('planets')

  const titlePlanet = document.createElement('h2')
  titlePlanet.classList.add('title')
  titlePlanet.textContent = 'PLANETS'

  const cardContainer = document.createElement('div')
  cardContainer.classList.add('card-container')
  let i = 0
  while (i < film.planets.length) {
    cardContainer.append(await loadPlanet(`${film.planets[i]}?format=json`))
    i++
  }
  planets.append(titlePlanet, cardContainer)
  description.append(director, producer, date, openning)
  content.append(img, description)

  card.append(title, content, planets)

  return card

}

export const loadFilm = async (number) => {

  const url = 'https://swapi.dev/api/films/?format=json'

  const response = await fetch(url)
  const data = await response.json()
  const film = await data.results[number]
  const container = document.getElementById('container')
  const cards = await createFilm(film)

  container.replaceChildren(cards)

}

const createPlanet = planet => {
  const card = document.createElement('card-wars')
  card.titulo = planet.name
  card.imagem = `./img/planet/${planet.name}.png`
  card.descricao = planet.terrain
  card.descricao1 = planet.diameter
  card.descricao2 = planet.climate
  card.descricao3 = planet.population
  card.icon__1 = './img/planet/icon/mandalorian.png'
  card.icon__2 = './img/planet/icon/diameter.png'
  card.icon__3 = './img/planet/icon/cloud.png'


  return card

}

const createInsidePlanet = planet => {
  const card = document.createElement('div')
  card.classList.add('card-planet')
  card.style.backgroundImage = `url('./img/planet/${planet.name}.png')`


  const infoPlanet = document.createElement('div')
  infoPlanet.classList.add('info-planet')


  const planet__description = document.createElement('div')
  planet__description.classList.add('planet__description')

  const planet__title = document.createElement('span')
  planet__title.classList.add('planet__title')
  planet__title.textContent = planet.name

  const planet__rotation_period = document.createElement('span')
  planet__rotation_period.classList.add('planet__orbital_period')
  planet__rotation_period.textContent = planet.rotation_period

  const planet__orbital_period = document.createElement('span')
  planet__orbital_period.classList.add('planet__orbital_period')
  planet__orbital_period.textContent = planet.orbital_period

  const planet__diameter = document.createElement('span')
  planet__diameter.classList.add('planet__diameter')
  planet__diameter.textContent = planet.diameter

  const planet__climate = document.createElement('span')
  planet__climate.classList.add('planet__climate')
  planet__climate.textContent = planet.climate

  const planet__gravity = document.createElement('span')
  planet__gravity.classList.add('planet__gravity')
  planet__gravity.textContent = planet.gravity

  const planet__terrain = document.createElement('span')
  planet__terrain.classList.add('planet__terrain')
  planet__terrain.textContent = planet.terrain

  const planet__surface_water = document.createElement('span')
  planet__surface_water.classList.add('planet__terrain')
  planet__surface_water.textContent = planet.surface_water

  const planet__population = document.createElement('span')
  planet__population.classList.add('planet__population')
  planet__population.textContent = planet.population


  planet__description.append(
    planet__title,
    planet__rotation_period,
    planet__orbital_period,
    planet__diameter,
    planet__climate,
    planet__gravity,
    planet__terrain,
    planet__surface_water,
    planet__population
  )
  infoPlanet.append(planet__description)
  card.append(infoPlanet)

  return card

}

export const loadInsidePlanet = async (urlApi) => {

  const url = urlApi

  const response = await fetch(url)
  const data = await response.json()
  const planet = await data
  const card = createInsidePlanet(planet)
  const container = document.getElementById('container')

  container.replaceChildren(card)

  return card
}

export const loadPlanet = async (urlApi) => {

  const url = urlApi

  const response = await fetch(url)
  const data = await response.json()
  const planet = await data
  const card = createPlanet(planet)
  card.id = urlApi
  card.href = '/planet'
  card.onclick = () => {
    route()
    loadInsidePlanet(card.id)
  }

  console.log(card);

  return card
}


const path = window.location.pathname;

if (path == '/' || path == '/index.html') {
  loadBannerFilm()
}

const recarregarPagina = () => {

  if (window.location.pathname == '/film') {
    window.location = 'https://viniciuswars.netlify.app/'
    route()
  }
}

document.addEventListener('DOMContentLoaded', recarregarPagina)

