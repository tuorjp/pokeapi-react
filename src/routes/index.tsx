import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import DefaultAppLayout from "../layout/DefaultAppLayout"
import DetailedPokemonPage from "../pages/DetailedPokemonPage"

export default function RoutesComponent() {
  return (
    <Routes>
      <Route element={<DefaultAppLayout/>} path="/">
        <Route element={<Home/>} path="/"/>
        <Route element={<DetailedPokemonPage />} path="/:id"/>
      </Route>
    </Routes>
  )
}