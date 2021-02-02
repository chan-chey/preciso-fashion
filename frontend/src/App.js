import React, { Component } from 'react'
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import HomeScreenRoute from '../src/HomeScreen/HomeScreenRoute/HomeScreenRoute';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menubar/>
        <HomeScreenRoute/>
      </div>
    )
  }
}
