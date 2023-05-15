'use strict'

class card extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.imagem = null
    this.titulo = 'Nome'
    this.descricao = 'descricao'
    this.descricao1 = 'descricao1'
    this.descricao2 = 'descricao2'
    this.descricao3 = 'descricao3'
    this.icon__1 = null
    this.icon__2 = null
    this.icon__3 = null



  }

  static get observedAttributes() {
    return [
      'imagem',
      'titulo',
      'descricao',
      'descricao1',
      'descricao2',
      'descricao3',
      'icon__2',
      'icon__2',
      'icon__3'
    ]
  }


  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue
  }

  connectedCallback() {
    this.shadow.appendChild(this.component())
    this.shadow.appendChild(this.styles())
  }

  styles() {
    const css = document.createElement('style')
    css.textContent = `

    .card {
      margin: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 200px;
      cursor: pointer;
      transition: all 0.5s;
      position: relative;
      overflow: hidden;
      color: #fff;
      border-radius: 20px;
    }
    
    .card-cover {
      position: absolute;
      height: 200px;
      width: 300px;
      z-index: -1;
      filter: brightness(40%);
    }
    
    .card__title {
      letter-spacing: 0.25rem;
      font-size: 1.5rem;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;

    }

    .card__description{
      text-align: center;
    }
    
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80%;
    }
    
    .diameter::after {
      font-size: 0.75rem;
      padding-left: 4px;
      content: '10465';
      font-family: 'Inter', sans-serif;
    }
    
    .diameter {
      font-size: 0.75rem;
    }
    
    .climate::after {
      font-size: 0.75rem;
      padding-left: 4px;
      content: 'arid';
      font-family: 'Inter', sans-serif;
    }
    
    .climate {
      font-size: 0.75rem;
    }
    
    .population {
      font-size: 0.75rem;
    }
    
    .icons {
      height: 8px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
    }
    
    
    .icon__content {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-evenly;
      height: 20px;
      gap: 4px;
      font-size: 0.75rem;
    }

      
    .div_icon {
      display: flex;
      align-items: center;
      height: 20px;
      gap: 4px;
      font-size: 0.75rem;
      color: white;

    }


    
    .icon {
      height: 12px;
      width: fit-content;
    }

 
      
        `

    return css
  }

  component() {
    const card = document.createElement('div')
    card.classList.add('card')

    const card__cover = document.createElement('img')
    card__cover.classList.add('card-cover')
    card__cover.src = this.imagem

    const card__text = document.createElement('div')
    card__text.classList.add('text')

    const text__title = document.createElement('span')
    text__title.classList.add('card__title')
    text__title.textContent = this.titulo

    const text__description = document.createElement('span')
    text__description.classList.add('card__description')
    text__description.textContent = this.descricao

    const card__icon = document.createElement('div')
    card__icon.classList.add('icons')

    const icon__content = document.createElement('div')
    icon__content.classList.add('icon__content')


    const icon__population = document.createElement('img')
    icon__population.classList.add('icon')
    icon__population.src = this.icon__1

    const population = document.createElement('span')
    population.textContent = this.descricao3

    const icon__diameter = document.createElement('img')
    icon__diameter.classList.add('icon')
    icon__diameter.src = this.icon__2

    const diameter = document.createElement('span')
    diameter.textContent = this.descricao1

    const icon__temperature = document.createElement('img')
    icon__temperature.classList.add('icon')
    icon__temperature.src = this.icon__3

    const temperature = document.createElement('span')
    temperature.textContent = this.descricao2

    const div_population = document.createElement('div')
    div_population.classList.add('div_icon')
    div_population.append(icon__population, population)

    const div_diameter = document.createElement('div')
    div_diameter.classList.add('div_icon')
    div_diameter.append(icon__diameter, diameter)

    const div_temperature = document.createElement('div')
    div_temperature.classList.add('div_icon')
    div_temperature.append(icon__temperature, temperature)

    icon__content.append(div_population, div_diameter, div_temperature)
    card__icon.append(icon__content)
    card__text.append(text__title, text__description)
    card.append(card__cover, card__text, card__icon)

    return card
  }
}

customElements.define('card-wars', card)