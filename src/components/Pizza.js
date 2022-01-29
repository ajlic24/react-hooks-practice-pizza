import React from "react";

function Pizza({pizza, onClick}) {
  const {topping, size, vegetarian, id} = pizza

  function handleClick() {
    onClick(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick} >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
