import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaForEdit: {}
  }

  componentDidMount = () => {
    this.getPizzas()
  }

  getPizzas = () =>{
    fetch("http://localhost:3000/pizzas").then(resp => resp.json()).then(data => this.setState({pizzas: data}))
  }

  setPizzaForEdit = (pizza) => {
    
    this.setState({
      pizzaForEdit: {id: pizza.id, topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian}
    })
  }
  

  editPizzaTopping = (newValue) => {
    this.setState({
      pizzaForEdit: {...this.state.pizzaForEdit, topping: newValue}
    })
  }
  editPizzaSize = (newValue) => {
    this.setState({
      pizzaForEdit: {...this.state.pizzaForEdit, size: newValue}
    })
  }

  editPizzaVege = (newValue) => {
    this.setState({
      pizzaForEdit: {...this.state.pizzaForEdit, vegetarian: (newValue==="true") ? true : false}
    })
  }

  updatePizza = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaForEdit.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( {
        "topping": this.state.pizzaForEdit.topping,
        "size": this.state.pizzaForEdit.size,
        "vegetarian": this.state.pizzaForEdit.vegetarian
      })
    }).then(this.getPizzas)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        pizzaForEdit={this.state.pizzaForEdit} 
        editPizzaTopping={this.editPizzaTopping} 
        editPizzaSize={this.editPizzaSize} 
        editPizzaVege={this.editPizzaVege} 
        updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} setPizzaForEdit={this.setPizzaForEdit}/>
      </Fragment>
    );
  }
}

export default App;
