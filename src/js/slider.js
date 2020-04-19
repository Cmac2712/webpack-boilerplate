import '../css/slider.css';

export default class Slider {

  constructor() {
    this.p = document.createElement('p')

    this.p.innerHTML = '<h1>This is being added here</h1>';

    document.body.appendChild( this.p );
  }


}