import React, { Component } from 'react'
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import HomeScreenRoute from '../src/HomeScreen/HomeScreenRoute/HomeScreenRoute';
import {
  MemoryRouter,
  Switch,
  Route,
} from "react-router-dom";
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';

export default class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <Menubar />
        <Switch>
          <Route path="/" component={HomeScreenRoute} exact />
          <Route path="/ContactUs" render={() => (<ContactForm />)} />
          <Route path="/About" render={() => (<About />)} />
        </Switch>
        <Footer />
      </MemoryRouter>
    )
  }
}
