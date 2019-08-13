import React from "react";

const Pizza = props => {
  const { topping, size, vegetarian, id, editPizzas } = props;
  
  const handleClick = e => {
    editPizzas(e.target.value)
  };


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{`${vegetarian}`}</td>
      <td>
        <button
          onClick={handleClick}
          value={id}
          type="button"
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
