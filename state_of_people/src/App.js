import React, { Component } from 'react';
import Field from './components/Field';
//redux
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaWithField: false
    }
    this.onStartTest = this.onStartTest.bind(this);
    this.onEndTest = this.onEndTest.bind(this);
  };

  onStartTest() {
    this.setState({
      areaWithField: true
    });
  };

  onEndTest() {
    this.setState({
      areaWithField: false
    })
  };

  render() {
    return (
      <div>
        <header className="App-header" style={{ backgroundColor: 'red' }}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Узнать состояние</h1>
          {!this.state.areaWithField &&
            <button onClick={this.onStartTest} >Начать</button>
          }
          {this.state.areaWithField &&
            <button onClick={this.onEndTest} >Сбросить</button>
          }
        </header>
        <section>
          {!this.state.areaWithField &&
            <Field
              title="Добро пожаловать! Lorem Upsum"
            />
          }
          {this.state.areaWithField &&
            <Field
              title="Выберите характеристики"
              questions="true"
            />
          }
        </section>
        <footer></footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    face: state.face || null
  };
};

export default connect(mapStateToProps)(App);
