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
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand  >
                <img src={Logo} alt='logo' style={{ margin: '10px' }}
                />
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>
                <div style={{ margin: '10px' }}>
                  Тест на психологическое состояние
                </div>
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
              title="Добро пожаловать! Предлагаем вам пройти тест по определению психологического состояния человека. Для этого нажмите кнопку 'Начать' и выберите характеристики. В конце теста узнайте результат, удачи вам :)"
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
