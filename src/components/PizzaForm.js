import React from "react";

const PizzaForm = props => {
  console.log(props.pizzaData.topping);
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            props.pizzaData.topping
          }
          onChange={props.handleToppingChange}
        />
      </div>
      <div className="col">
        <select
          value={props.pizzaData.size}
          className="form-control"
          onChange={props.handleSizeChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div
          className="form-check"
          // onChange={props.handleVegetarianChange}
        >
          <input
            name="test"
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={props.pizzaData.vegetarian}
            onChange={props.handleVegetarianChange}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            name="test"
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={!props.pizzaData.vegetarian}
            onChange={props.handleVegetarianChange}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.submitNewRecipe}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
