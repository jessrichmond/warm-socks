import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Projects from './components/projects/projects';
import ContactInfo from './components/contact/contact';

import './app.css';

const App = () => {
  return (
    <div className="App">
        <Header />
        <About />
        <Projects />
        <ContactInfo />
    </div>
  )
}

export default hot(module)(App);