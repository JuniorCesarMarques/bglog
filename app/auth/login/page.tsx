import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";



export default async function Login() {

  const session = await getServerSession();

  console.log(session)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">BGLOG</h1>
        <p className="text-center text-gray-600 mb-8">Faça login na sua conta</p>

          <LoginForm />

        <p className="text-center text-gray-500 mt-6">
          Não tem conta? <span className="text-gray-800 font-semibold cursor-pointer">Registre-se</span>
        </p>
      </div>
    </div>
  );
}
