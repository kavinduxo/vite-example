import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { someFunction } from './nonexistentModule'; 

document.querySelector('#app').innerHTML = `
  <h1>Welcome to My App</h1>
`;

setupCounter(document.querySelector('#counter'));