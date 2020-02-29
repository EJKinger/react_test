import React from 'react';
import './App.css';

const userData = [
  {
    name: "ejkinger",
    company: "watchdogger",
    avatar_url: "https://avatars2.githubusercontent.com/u/12090906?v=4"
  },
  {
    name: "brian-brazil",
    company: "prometheus",
    avatar_url: "https://avatars0.githubusercontent.com/u/7115638?v=4"
  }
]

class Form extends React.Component {
  state = { userName: '' };
  userNameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
         type="text"
         placeholder="Github username"
         ref={this.userNameInput}
         value={this.state.userName}
         onChange={event => this.setState({ userName: event.target.value })}
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
      { props.users.map((user, i) => { return <Card {...user}/> }) }
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
    profiles: userData,
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
          <br />
          <Form />
          <br />
          <CardList users={userData}/>
        </header>
      </div>
    );
  }
}

export default App;
