import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { URL, usernames } from './data.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      img: '',
      id: ''
    }
  }


  render() {
    // Schedule code inside of the callback to run after the first render of
    // the component lifecycle. 
    // useEffect(() => {
    //   axios
    //     .get(`${URL}${usernames[0]}`)
    //     .then(res => {
    //       this.setState({
    //         name: res.data.name
    //       })
    //     })
    //     .catch(err => {
    //       console.log('no bueno')
    //     })
    // }, [])

    return (
      <div className='App'>
        <header className='App-header'>
          <h1>GitHub Usercard</h1>
          <h2>Name: {this.state.name}</h2>
        </header>
      </div>
    )
  }
}

export default App;