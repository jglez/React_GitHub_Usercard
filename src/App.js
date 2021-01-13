import React from 'react'
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
  // Schedule code inside of the callback to run after the first render of
  // the component lifecycle. 
  componentDidMount() {
    axios
      // .get(`${URL}${usernames[0]}`)
      .get('https://api.github.com/users/jglez')
      .then(res => {

        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          id: res.data.login
        })
      })
      .catch(err => {
        console.log('no bueno')
      })
  }

  render() {

    return (
      <div className='App'>
        <header className='App-header'>

          <div className='card-container'>
            <h1>GitHub Usercard</h1>
            <img src={this.state.img} alt='avatar' />
            <p><span>Name: </span> {this.state.name}</p>
            <p><span>GitHub Handle: </span> <code>{this.state.id}</code></p>
          </div>

        </header>
      </div>
    )
  }
}

export default App;