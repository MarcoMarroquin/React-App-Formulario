import React, { Fragment, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import '../css/desktop.css'

import datos from "../assets/datos.svg";
import historial from "../assets/historial.svg";
import reconocimiento from "../assets/reconocimiento.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Main = () => {
  /*---------------------------------------Metodo Post de Formulario Contacto----------------------------------------------------------*/

  const URLPOST = "http://localhost:4000/api/contacto/AgregarContacto/"; // MetodoPost - Rest Api

  const [addcontacto, setAddContacto] = useState({ //Estado agregar contacto
    Nombre_Contacto: "",
    Telefono_Contacto: "",
    Correo_Contacto: "",
  });

  const handleChange = ({ target }) => { // Ingreso de valores name y value al estado addContacto
    setAddContacto({
      ...addcontacto,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(URLPOST, addcontacto); //Metodo Axios
    if (res.status === 200) {
      Swal.fire(
        "Guardado",
        `El Registro se ha guardado Correctamente`,
        "success"
      );
      setAddContacto({ //Limpiar Formulario
        Nombre_Contacto: "",
        Telefono_Contacto: "",
        Correo_Contacto: "",
      });
    } else {
      Swal.fire("Registro no Guardado", "Sucedio un error", "error");
    }
  };

  return (
    <Fragment>
      <main className="main">
        <section className="main__container container">
          <h2 className="main__subtitle">¿Nemo enim ipsam voluptatem quia </h2>
          <h1 className="main__title">
            <span>75,000 voluptas</span> sit aspernatur?
          </h1>
        </section>

        <div className="servicios container">
          <section className="servicio">
            <div className="iconos">
              <img src={datos} alt="datos" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span>adipiscing elit, sed do eiusmod</span>
            </p>
          </section>

          <section className="servicio">
            <div className="iconos">
              <img src={historial} alt="Historial" />
            </div>
            <p>
              Duis aute irure dolor in reprehenderit <span>14,230</span>
            </p>
          </section>

          <section className="servicio">
            <div className="iconos">
              <img src={reconocimiento} alt="reconocimiento" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium{" "}
              <span>“doloremque laudantium, totam rem aperiam”</span>
            </p>
          </section>
        </div>

        <section className="social__media container">
          {/* icons facebook and instagram */}

          <section className="servicio__center container">
            <div className="iconos">
              <img src={facebook} alt="facebbok" />
            </div>
            <p>
              {" "}
              <span>Lorem 185,000 </span> ipsum dolor sit amet, consectetur
            </p>
          </section>

          <section className="servicio__center container">
            <div className="iconos">
              <img src={instagram} alt="instagram" />
            </div>
            <p>
              <span>Sed ut 30,000</span> perspiciatis unde omnis
            </p>
          </section>
        </section>

        <section>
          <form className="formulario container" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Déjanos tus datos</legend>

              <div className="contenedor-campos">
                <div className="campo">
                  <label>Nombre</label>
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Tu Nombre"
                    name="Nombre_Contacto"
                    value={addcontacto.Nombre_Contacto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="campo">
                  <label>Teléfono</label>
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Tu Teléfono"
                    name="Telefono_Contacto"
                    value={addcontacto.Telefono_Contacto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="campo">
                  <label>Correo Electrónico</label>
                  <input
                    className="input-text"
                    type="email"
                    placeholder="Tu Email"
                    name="Correo_Contacto"
                    value={addcontacto.Correo_Contacto}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* <!-- este .contenedor-campos -->
               */}

              <div className="alinear-derecha flex">
                <input
                  className="boton w-sm-100"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </fieldset>
          </form>
        </section>
      </main>
    </Fragment>
  );
};

export default Main;
