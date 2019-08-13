import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const pizzaURL = "http://localhost:3000/pizzas";

class App extends Component {
  state = {
    pizzas: [],
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  };

  fetchPizzas = () => {
    return fetch(pizzaURL).then(resp => resp.json());
  };

  componentDidMount() {
    this.storePizzas();
  }

  storePizzas = () => {
    this.fetchPizzas().then(pizzas =>
      this.setState({
        pizzas
      })
    );
  };

  editPizzas = id => {
    const { pizzas } = this.state;
    const editThisPizza = pizzas.find(pizza => pizza.id === parseInt(id));

    this.setState({
      id: editThisPizza.id,
      topping: editThisPizza.topping,
      size: editThisPizza.size,
      vegetarian: editThisPizza.vegetarian
    });
  };

  handleToppingChange = e => {
    this.setState({
      topping: e.target.value
    });
  };

  handleSizeChange = e => {
    this.setState({
      size: e.target.value
    });
  };

  handleVegetarianChange = e => {
    this.setState({
      vegetarian: e.target.value === "Vegetarian" ? true : false
    });
  };

  updatePizza = pizza => {
    const { pizzas } = this.state;
    const updateThisPizza = pizzas.find(p => p.id === parseInt(pizza.id));
    console.log(updateThisPizza);
  };

  submitNewRecipe = () => {
    const { id, topping, size, vegetarian } = this.state;
    const data = {
      topping: topping,
      size: size,
      vegetarian: vegetarian
    };
    if (id !== "") {
      const configObj = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch(pizzaURL + "/" + id, configObj).then(data => data.json());
      this.storePizzas();
    } else {
      const configObj = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch(pizzaURL, configObj)
        .then(data => data.json())
        .then(pizza =>
          this.setState({
            pizzas: [...this.state.pizzas, pizza]
          })
        );
      return this.setState({
        id: "",
        topping: "",
        size: "",
        vegetarian: ""
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizzaData={this.state}
          submitNewRecipe={this.submitNewRecipe}
          handleToppingChange={this.handleToppingChange}
          handleSizeChange={this.handleSizeChange}
          handleVegetarianChange={this.handleVegetarianChange}
        />
        <PizzaList editPizzas={this.editPizzas} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
