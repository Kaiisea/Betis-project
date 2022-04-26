import classes from './LoginForm.css'
import PropTypes from 'prop-types'

export function LoginForm(props) {
  return (
      <>
      <h3>{props.titulo}</h3>
    <form className={classes.form}>
      <label htmlFor="email" className={classes.label}>
        Correo electrónico
      </label>
      <input id="email" type="email" className={classes.field} />
      <label
        htmlFor="password"
        className={[classes.field, classes.formSpacing]}
      >
        Contraseña
      </label>
      <div className={classes.formSpacing}>

      </div>
      <button id="submit" className={classes.button}>
        Iniciar sesión
      </button>
    </form>
    </>
  );
}

LoginForm.defaultProps = {
titulo: "Iniciar sesión",
array: []
}