import React from "react";

const PizzaForm = props => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          name="topping"
          onChange={event => props.changePizzaState(event)}
          className="form-control"
          placeholder="Pizza Topping"
          value={props.pizza.topping}
        />
      </div>
      <div className="col">
        <select
          name="size"
          onChange={event => props.changePizzaState(event)}
          className="form-control"
          value={props.pizza.size}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vegetarian"
            onChange={event => props.changePizzaState(event)}
            value={true}
            defaultChecked={props.pizza.vegetarian}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vegetarian"
            onChange={event => props.changePizzaState(event)}
            value={false}
            defaultChecked={!props.pizza.vegetarian}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={event => props.handleSubmit(event)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
