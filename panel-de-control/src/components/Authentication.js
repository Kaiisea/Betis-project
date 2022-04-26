import { IniciarSesion } from "./IniciarSesion"

export function Authentication(props) {
    const isLoggedIn = true
  return 
  isLoggedIn ? props.children : IniciarSesion
}
