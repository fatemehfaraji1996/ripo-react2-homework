import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Called from './components/Called'
import Alert from './components/Alert'
import Building from './components/Building'
import RenderList from './components/RenderList'
function App() {
  const data = {
    image: '../../.learn/assets/Dylan.png?raw=true',
    cardTitle: 'Bob Dylan',
    cardDescription:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    },
  }
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];
  return (
  <>
  <Called/>
  <Alert text ="OMG! Something really bad has happened!"/>
  <Building cardDescription={data.cardDescription}
  image={data.image}
  cardTitle={data.cardTitle}
  url={data.button.url}
  lable={data.button.label}/>
  <RenderList animals={animals}/>
  
  </>)
}

export default App
