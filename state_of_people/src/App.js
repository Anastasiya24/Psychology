import React, { Component } from 'react';
import Questions from './comnonents/Questions'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      areaWithQuestions: false
    }
    this.onStartTest=this.onStartTest.bind(this);
  };

  onStartTest(){
    this.setState({
      areaWithQuestions: <Questions />
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: 'red'}}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Узнать состояние</h1>
          <button onClick={this.onStartTest} >Начать</button>
        </header>
        <section>
          {this.state.areaWithQuestions}
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;
