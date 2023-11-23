"use client";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import axios from "axios";
import ErrorAlert from "../Molecules/ErrorAlert";
import { useState } from "react";
import Link from "next/link";

export default function FormRegister() {
  const [msg, setMsg] = useState("");
  const [verError, setVerError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const username = localStorage.getItem("token");

  if (username) {
    router.push("/home");
    return null;
  }

  const { formState, inputChange } = useForm({
    username: "",
    email: "",
    contrasena: "",
  });

  const enviarDatos = () => {
    if (
      formState.username === "" ||
      formState.email === "" ||
      formState.contrasena === ""
    ) {
      alert("Favor de llenar los campos restantes por favor");
      return;
    }

    const usuario = {
      nombre: formState.username,
      correo: formState.email,
      password: formState.contrasena,
    };

    axios
      .post("http://localhost:3000/API/usuarios", usuario)
      .then((response) => {
        if (response.status === 201) {
          console.log("El registro se realizó correctamente");
          alert("El registro se realizó correctamente")
        }
      })
      .catch((error) => {
        console.error("Ocurrió un error al realizar la solicitud:", error);
        setMsg(error.response.data.errors[0].msg);
        setVerError(true);
      });


  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen gradient1`}>
      <div className="p-4 bg-white rounded-md w-[20rem] h-[28rem]">
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="contrasena"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-purple-600  outline-none bg-transparent"
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
            Registrarse
          </button>
          <Link href={"/"}>Ir a iniciar seccion</Link>
        </div>
      </div>
      {verError && <ErrorAlert msg={msg} setError={setVerError} />}
    </div>
  );
}
