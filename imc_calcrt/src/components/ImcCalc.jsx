/* eslint-disable react/prop-types */
import { useState } from "react"
import "./ImcCalc.css"
import Button from "./Button"

const ImcCalc = ({calcImc}) => {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

 const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }
  

  const handleHeight = (e) => {
   const updateValue = validDigits(e.target.value)

    setHeight(updateValue)
  }

  const handleWeight = (e) => {
    const updateValue = validDigits(e.target.value)

    setWeight(updateValue)
  }

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("")
    setWeight("")
  }

  return (
    <div className="container">
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo 1,75"
                required
                onChange={(e) => handleHeight(e)}
                value={height}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70,5"
                onChange={(e) => handleWeight(e)}
                value={weight}
              />
            </div>
          </div>
          <div className="action-control">
            <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
            <Button id="clear-btn" text="Limpar" action={clearForm}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ImcCalc