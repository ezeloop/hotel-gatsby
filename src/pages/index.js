import React from "react"
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHotel from "../components/imagenHotel"
import Layout from '../components/layout'
import useHabitaciones from "../hooks/use-habitaciones"

const IndexPage = () =>  {

  useHabitaciones()

  return (
    <Layout>

    <ImagenHotel />
    <ContenidoInicio />
    <useHabitaciones />

  </Layout>
  )
}
  
export default IndexPage 
