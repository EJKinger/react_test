import React from 'react';
import './App.css';
import axios from 'axios';

//const userData = [
//  {
//    name: "ejkinger",
//    company: "watchdogger",
//    avatar_url: "https://avatars2.githubusercontent.com/u/12090906?v=4"
//  },
//  {
//    name: "brian-brazil",
//    company: "prometheus",
//    avatar_url: "https://avatars0.githubusercontent.com/u/7115638?v=4"
//  }
//]

class Form extends React.Component {
  state = { userName: '' };
  //userNameInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault(); //without this, page will refresh
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({ userName: '' })
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
         type="text"
         placeholder="Github username"
         //ref={this.userNameInput}
         value={this.state.userName}
         onChange={event => this.setState({ userName: event.target.value })} //this is required, since with `state` and `value`, react is now controlling display of the form value
         required
        />
        <button>Add Card</button>
      </form>
    );
  };
}

const CardList = (props) => {
  return (
    <div>
      { props.users.map((user, i) => { return <Card key={user.id} {...user}/> }) }
    </div>
  );
}


class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img className="github-profile-img" src={this.props.avatar_url} alt="profile" />
        <div className="github-info">
          <div className="github-name">{this.props.name}</div>
          <div className="github-company">{this.props.company}</div>
          <br />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };

  addProfile = (profile) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profile]
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
          <br />
          <Form onSubmit={this.addProfile}/>
          <br />
          <CardList users={this.state.profiles}/>
        </header>
      </div>
    );
  }
}

export default App;
