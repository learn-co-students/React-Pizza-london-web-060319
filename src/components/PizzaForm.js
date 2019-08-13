import React from "react"

class PizzaForm extends React.Component {
  render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                this.props.pizzaForEdit.topping
              } onChange={event => this.props.editPizzaTopping(event.target.value)}/>
        </div>
        <div className="col">
          <select value={this.props.pizzaForEdit.size} className="form-control" onChange={event => this.props.editPizzaSize(event.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="true" name="vege" checked={this.props.pizzaForEdit.vegetarian} onChange={event => this.props.editPizzaVege(event.target.value)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="false" name="vege" checked={!this.props.pizzaForEdit.vegetarian} onChange={event => this.props.editPizzaVege(event.target.value)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.updatePizza()}>Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm
