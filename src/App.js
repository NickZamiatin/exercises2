import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './InputBox'


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.addUser = this.addUser.bind(this)

  }


  addUser(user) {
    this.setState({
      users: [...this.state.users, user]
    })
    console.log(user.liInput)
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <section className="container">
         <h3> New Thing</h3>
        <InputBox   addUser={this.addUser}/>
        <div>
      {this.state.users.map(user =>{
        return <li key={user.data}>{user.liInput}</li>
      })}
      </div>

        </section>
      </div>
    );
  }
}

export default App;