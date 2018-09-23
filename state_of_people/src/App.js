import React, { Component } from 'react';
import Questions from './comnonents/Questions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaWithQuestions: false
    }
    this.onStartTest = this.onStartTest.bind(this);
  };

  onStartTest() {
    this.setState({
      areaWithQuestions: true
    });
  }

  render() {
    return (
      <div>
        <header className="App-header" style={{ backgroundColor: 'red' }}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Узнать состояние</h1>
          {!this.state.areaWithQuestions &&
            <button onClick={this.onStartTest} >Начать</button>
          }
          {this.state.areaWithQuestions &&
            <button onClick={this.onStartTest} >Сбросить</button>
          }
        </header>
        <section>
          {!this.state.areaWithQuestions &&
            <Questions
              title="Добро пожаловать! Lorem Upsum"
            />
          }
          {this.state.areaWithQuestions &&
            <Questions
              title="Questions this"
              questions="true"
            />
          }
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;
