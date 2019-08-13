import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.selectedPizza
  const [veg, setVeg] = React.useState(false)

  React.useEffect(() => {
    setVeg(vegetarian)
  })

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza toppings" value={topping} onChange={props.toppingHandler} />
        </div>
        <div className="col">
          <select className="form-control" value={size} onChange={props.sizeHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="veg" value="Vegetarian"  checked={veg} onChange={props.vegHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="veg" value="Not Vegetarian" checked={!veg} onChange={props.vegHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()  => props.patchPizza()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
