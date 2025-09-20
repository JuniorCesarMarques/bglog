"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/types/form";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    console.log(res)


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="user">
          Usuário
        </label>
        <input
          {...register("username")}
          type="text"
          id="user"
          placeholder="Digite seu usuário"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Senha
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          placeholder="Digite sua senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}
