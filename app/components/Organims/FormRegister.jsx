"use client";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import axios from "axios";
import ErrorAlert from "../Molecules/ErrorAlert";
import { useState } from "react";
import Link from "next/link";
export default function FormRegister() {

    
  //este estado nos permite manejar mensaje de errores
  const [msg,setMsg] = useState("");
  const[verError,setVerError] = useState(false)
  //permite hacer el redireccionamiento de las paginas
  const router = useRouter();

  const username = localStorage.getItem("token");

  // Si el usuario ya está logeado, redireccionarlo a la página de inicio
  if (username) {
    router.push("/home");
    return;
  }

  const { formState, inputChange } = useForm({
    username: "",
    email: "",
    contrasena: "",
  });

  const enviarDatos = () => {
    //evaluamos que tenga algo los datos
      if(formState.username == "" || formState.email == "" || formState.contrasena == ""){
        alert("favor de llenar lo campos restantes por favor")
        return
      }
      //cremamos un objeto antes de enviarlo
      const usuario = {nombre:formState.username,
        correo:formState.email,
        password:formState.contrasena
      };
      //hacemos el post ala api
      axios.post("http://localhost:3000/API/usuarios", usuario)
  .then((response) => {
    if (response.status === 201) {
      console.log("El registro se realizó correctamente");
    }
  })
  .catch((error) => {
    console.error("Ocurrió un error al realizar la solicitud:", error);
    setMsg(error.response.data.errors[0].msg)
    setVerError(true);
  });

  
    router.push("/");
  };

  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen gradient1`}>
 
      <div className="p-4 bg-white rounded-md w-[20rem] h-96">
        <h1 className="mb-2 text-2xl font-semibold text-center text-purple-900">
           Registro
        </h1>
        <div className="flex flex-col items-center gap-y-4 mt-14">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="p-1  text-[0.9rem] w-64 px-2  border-b border-purple-600 outline-none bg-transparent"
            onChange={inputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-purple-600  outline-none bg-transparent"
            onChange={inputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="contrasena"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-purple-600  outline-none bg-transparent"
            onChange={inputChange}
          />
          <button
            onClick={enviarDatos}
            className="p-1 mt-10 text-white rounded-sm gradientCard w-36"
          >
           Registrarse
          </button>
          <Link href={"/"}>Ir a iniciar seccion</Link>
        </div>
      </div>
      {
        verError && <ErrorAlert msg={msg} setError={setVerError}/>
      }

    </div>
  );
}
