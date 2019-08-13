import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    id: '',
    topping: "",
    size: "",
    vegetarian: false,
    pizzas: []
  }

  sendToPizzaForm = (topping, size, vegetarian, id) => {
    this.setState({
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    })
  }

  vegHandler = () => {
    this.setState({
      vegetarian: !this.state.vegetarian
    })
  }

  sizeHandler = (event) => {
    this.setState({
      size: event.target.value
    })
  }

  topHandler = (event) => {
    this.setState({
      topping: event.target.value
    })
  }


  patchPizza = () => {
    fetch(`http://localhost:3001/pizzas/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(
      this.fetchData()
      .then(data => {
      this.setState({
        pizzas: data
      })
    })
    )
  }

  fetchData = () => {
    return fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.fetchData()
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
    
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          selectedPizza={this.state} 
          vegHandler={this.vegHandler} 
          patchPizza={this.patchPizza}
          sizeHandler={this.sizeHandler}
          toppingHandler={this.topHandler}
        />
        <PizzaList sendToPizzaForm={this.sendToPizzaForm} sendPizza={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
