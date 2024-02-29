// import { TiposBasicos } from "./typescript/TiposBasicos"
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
// import { Funciones } from "./typescript/Funciones"
// import { Contador } from "./components/Contador"
// import { Login } from "./components/Login" 
// import { ContadorConHook } from "./components/ContadorConHook"
// import { Usuarios } from "./components/Usuarios"

import { Fromularios } from "./components/Fromularios"
import { UsersPage } from "./components/UsersPage"




const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a typescript</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}

      {/* Login Zustand en Formularios */}
      {/* <Fromularios /> */}
      
      <UsersPage/>
    </div>
  )
}

export default App