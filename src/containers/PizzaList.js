import React, { Component } from "react";
import Pizza from "../components/Pizza";

class PizzaList extends Component {
  render() {
    const { pizzas, editPizzas } = this.props;
    const pizza = pizzas.map(p => (
      <Pizza key={p.id} {...p} editPizzas={editPizzas} />
    ));

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{pizza}</tbody>
      </table>
    );
  }
}

export default PizzaList;
