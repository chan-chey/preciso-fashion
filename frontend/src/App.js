import React, { Component } from 'react'
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import HomeScreenRoute from '../src/HomeScreen/HomeScreenRoute/HomeScreenRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menubar />
        <Switch>
          <Route path="/" component={HomeScreenRoute} exact />
          <Route path="/ContactUs" render={() => (<ContactForm />)} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
