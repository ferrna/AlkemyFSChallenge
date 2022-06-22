import React, { useState } from "react";
import { LoginStyled, Button } from "./LoginStyled";
import "./styles.css";
import axios from "axios";

function Login() {
  const [userdata, setUserdata] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios({
      method: "post",
      data: {
        email: userdata.email,
        password: userdata.password,
      },
      withCredentials: true,
      url: "http://localhost:3001/user/register",
    }).then((res) => console.log(res));
  };

  return (
    <section className="container formulario">
      <h2>Login/Register</h2>
      <div>
        <label htmlFor="email">User email:</label>
        <input
          type="text"
          name="email"
          placeholder="johndoe@correo.com"
          value={userdata.email}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userdata.password}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div className="container-buttons">
        <button type="submit">Log In</button>
        <button id="signin-button" onClick={handleSubmit}>
          Create an account
        </button>
      </div>
    </section>
  );
}

export default Login;

/* import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.css";
import axios from "axios";

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          await axios({method: "post", data:  });
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field type="text" id="nombre" name="nombre" placeholder="John Doe" />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field type="text" id="correo" name="correo" placeholder="correo@correo.com" />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login; */