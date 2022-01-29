import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    topping: '',
    size: '',
    vegetarian: '',
  })

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then(r => r.json())
      .then(data => setPizzas(data))
  }, [])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function onClick(pizza) {
    const newObj = {
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian'
    }
    setFormData(newObj)
  }

  function onSubmit(item) {
    setPizzas([...pizzas].map(pizza => {
      if (pizza.id === item.id) {
        return item
      } else {
        return pizza
      }
    }))
  }

  return (
    <>
      <Header />
      <PizzaForm handleChange={handleChange} formData={formData} onSubmit={onSubmit} />
      <PizzaList pizzas={pizzas} onClick={onClick} />
    </>
  );
}

export default App;
