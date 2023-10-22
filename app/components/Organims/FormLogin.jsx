"use client";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";

export default function FormLogin() {
    
  //permite hacer el redireccionamiento de las paginas
  const router = useRouter();

  const username = localStorage.getItem("123");

  // Si el usuario ya está logeado, redireccionarlo a la página de inicio
  if (username) {
    router.push("/inicio");
    return;
  }

  const { formState, inputChange } = useForm({
    username: "",
    email: "",
    contrasena: "",
  });

  const enviarDatos = () => {
    // Guarda el objeto formState en el localstorage
    localStorage.setItem("123", JSON.stringify(formState));
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen color-gradient">
      <div className="p-4 bg-white rounded-md w-[20rem] h-96">
        <h1 className="mb-2 text-2xl font-semibold text-center text-sky-400">
          Iniciar seccion
        </h1>
        <div className="flex flex-col items-center gap-y-4 mt-14">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="p-1  text-[0.9rem] w-64 px-2  border-b border-sky-500 outline-none"
            onChange={inputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-sky-500 outline-none"
            onChange={inputChange}
          />
          <input
            type="password"
            placeholder="contrasena"
            name="contrasena"
            className="p-1  text-[0.9rem] w-64 px-2 border-b border-sky-500 outline-none"
            onChange={inputChange}
          />
          <button
            onClick={enviarDatos}
            className="p-1 mt-10 text-white rounded-sm bg-sky-500 w-36"
          >
            Iniciar seccion
          </button>
        </div>
      </div>
    </div>
  );
}