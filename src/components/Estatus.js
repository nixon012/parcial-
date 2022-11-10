import React from 'react'

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Estatus(props) {
  
  return (
    <header>
        {<h1>likes</h1>}
        {<p> Cantidad de likes <span>{props.contador}</span> </p>}
    </header>
  )
}
