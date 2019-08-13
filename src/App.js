import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { runInThisContext } from 'vm';
class App extends Component {

  state = {
    pizzas: [],
    pizzaToEdit: {
      id: null,
      topping: "",
      size: "",
      vegetarian: null
    }
  }

  fetchAllPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  componentDidMount() {
    this.fetchAllPizzas()
  }

  handleEdit = pizza => {
    this.setState({
      pizzaToEdit: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      }
    })
  }

  changePizzaState = (event) => {
    this.setState({pizzaToEdit: {
      ...this.state.pizzaToEdit,
      [event.target.name]: event.target.value
    }})
  } 

  handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.pizzaToEdit)
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzaToEdit: {
        id: null,
        topping: "",
        size: "",
        vegetarian: null
      }
    }))
    .then(this.fetchAllPizzas())
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaToEdit} changePizzaState={this.changePizzaState} handleSubmit={this.handleSubmit} />
        <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
