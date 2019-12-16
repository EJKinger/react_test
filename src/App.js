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

const CardList = (props) => {
  let u;
  for (u in props.users) {
    console.log(u)
  }

  return (
    <div>
      {props.users.map((user, i) => {
        return <Card {...user}/>
      })}
    </div>
  );
}

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src={this.props.avatar_url} alt="profile" />
        <div className="github-info">
          <div className="github-name">{this.props.name}</div>
          <div className="github-company">{this.props.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
          <CardList users={userData}/>
        </header>
      </div>
    );
  }
}

export default App;
