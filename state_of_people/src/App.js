import React, { Component } from 'react';
import Field from './components/Field';
import { Button, Navbar } from 'react-bootstrap';
import Logo from './img/8.png'
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
          {/* <h1 className="App-title">Узнать состояние</h1> */}


          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <img src={Logo} alt='logo'
                //  style={{ width: '15%', height: '15%'}} 
                 />
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>
                Тест на психологическое состояние
            </Navbar.Text>
              <Navbar.Text pullRight>
                {!this.state.areaWithField &&
                  <Button onClick={this.onStartTest} bsStyle="success">Начать</Button>
                }
                {this.state.areaWithField &&
                  <Button bsStyle="warning" onClick={this.onEndTest} >Сбросить</Button>
                }
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>

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
              onClickResult={this.onEndTest}
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
