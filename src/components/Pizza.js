import React from "react"


const Pizza = (props) => {
  const {topping, size, vegetarian, id} = props.pizza
  const {sendToPizzaForm} = props
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{"Replace Me With Vegatarian"}</td>
      <td><button onClick={() => sendToPizzaForm(topping, size, vegetarian, id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
