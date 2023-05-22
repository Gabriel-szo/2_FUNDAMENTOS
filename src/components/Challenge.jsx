import React from 'react'

const Challenge = () => {
    let a = 1
    let b = 2
    const soma = () =>{
        console.log(a+b)
    }
  return (
    <div>
        <p>Esse é o valor de a: {a}</p>
        <p>Esse é o valor de b: {b}</p>
        <button onClick={soma}>Soma</button>

    </div>
  )
}

export default Challenge