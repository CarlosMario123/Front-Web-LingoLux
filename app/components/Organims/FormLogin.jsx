"use client";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import ErrorAlert from "../Molecules/ErrorAlert";

export default function FormLogin() {
  const [msg, setMsg] = useState("");
  const [verError, setVerError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const username = localStorage.getItem("token");

  if (username) {
    router.push("/home");
    return null; // En caso de redireccionamiento, no se renderizará el resto del componente
  }

  const { formState, inputChange } = useForm({
    email: "",
    contrasena: "",
  });

  const enviarDatos = (e) => {
    e.preventDefault();
    if (formState.email === "" || formState.contrasena === "") {
      alert("Favor de llenar los campos restantes por favor");
      return;
    }

    const usuario = {
      correo: formState.email,
      password: formState.contrasena,
    };

    axios.post("http://localhost:10000/API/usuarios/login", usuario)
      .then((response) => {
        const extraerToken = response.data.token;
        const extraerId = response.data.usuario.id;

        localStorage.setItem("token", JSON.stringify(extraerToken));
        localStorage.setItem("id", JSON.stringify(extraerId));
        router.push("/foto");
      }).catch((error) => {
        setMsg(error.response.data.msg);
        setVerError(true);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gradientCard">
      {verError && <ErrorAlert msg={msg} setError={setVerError}/>}
      <div className="p-4 bg-white rounded-md w-[20rem] h-96 overflow-hidden">
        <h1 className="mb-2 text-2xl font-semibold text-center text-purple-900">
          Iniciar Sesión
        </h1>
        <div className="flex flex-col items-center gap-y-4 mt-14">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-purple-600 outline-none bg-transparent"
            onChange={inputChange}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="contrasena"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-purple-600 outline-none bg-transparent text-black" 
            onChange={inputChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="mt-2 text-sm text-purple-900 focus:outline-none"
          >
            {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          </button>
          <button
            onClick={enviarDatos}
            className="p-1 mt-10 text-white rounded-sm gradientCard w-36"
          >
            Iniciar Sesión
          </button>
          <Link href={"/registro"}>Registrarse</Link>
        </div>
      </div>
    </div>
  );
}
