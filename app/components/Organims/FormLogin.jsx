"use client";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
export default function FormLogin() {
    
  //permite hacer el redireccionamiento de las paginas
  const router = useRouter();

  const username = localStorage.getItem("123");

  // Si el usuario ya está logeado, redireccionarlo a la página de inicio
  if (username) {
    router.push("/home");
    return;
  }

  const { formState, inputChange } = useForm({
    email: "",
    contrasena: "",
  });

  const enviarDatos = () => {
    //evaluamos que tenga algo los datos
      if(formState.email == "" || formState.contrasena == ""){
        alert("favor de llenar lo campos restantes por favor")
        return
      }
      //cremamos un objeto antes de enviarlo
      const usuario = {nombre:formState.username,
        correo:formState.email,
        password:formState.contrasena
      };
      //aca haremos el inicio de seccion
     
    //localStorage.setItem("123", JSON.stringify(formState));
    //router.push("/home");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen color-gradient">
      <div className="p-4 bg-white rounded-md w-[20rem] h-96">
        <h1 className="mb-2 text-2xl font-semibold text-center text-sky-400">
          Iniciar Sesión
        </h1>
        <div className="flex flex-col items-center gap-y-4 mt-14">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-sky-500 outline-none bg-transparent"
            onChange={inputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="contrasena"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-sky-500 outline-none bg-transparent"
            onChange={inputChange}
          />
          <button
            onClick={enviarDatos}
            className="p-1 mt-10 text-white rounded-sm bg-sky-500 w-36"
          >
            Iniciar Sesión
          </button>
          <Link href={"/registro"}>Registrarse</Link>
        </div>
      </div>
    </div>
  );
}
