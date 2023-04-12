import React from 'react'
import estilo from '../styles/spinner.module.css'

const Spinner = () => {
  return (
    <div class={estilo.spinner}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner