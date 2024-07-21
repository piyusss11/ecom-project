import { useState } from "react";
import { api } from "../utils/api";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const registerMutation = api.user.register.useMutation({
    onSuccess: () => {
      setSuccessMessage("User registered successfully!");
      router.push(`/verifyOtp?email=${email}`);
      setErrorMessage("");
      setName("");
      setEmail("");
      setPassword("");
    },
    onError: (error) => {
      setSuccessMessage("");
      setErrorMessage(`Registration error: ${error.message}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerMutation.mutateAsync({ name, email, password });
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error
    }
  };

  return (
    <div className="font-inter flex justify-center">
      <div className="my-10 w-1/3 rounded-lg border-2 border-gray-200 px-16 py-10">
        <div className="text-center text-[32px] font-semibold leading-[38px]">
          Create your account
        </div>

        <div className="my-6">
          <h1>Name</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            placeholder="Enter"
          />
        </div>
        <div className="my-6">
          <h1>Email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="email"
            placeholder="Enter"
          />
        </div>
        <div className="my-6">
          <h1>Password</h1>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="password"
            placeholder="Enter"
          />
        </div>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button
          type="submit"
          onClick={handleSubmit}
          className="my-6 w-full rounded-lg bg-black p-2 text-sm font-[500] text-white"
        >
          CREATE ACCOUNT
        </button>
        <div className="flex items-center justify-center gap-4 text-center text-base">
          Have an Account?
          <Link href={"/Login"}>
            <span className="font-[500]">LOGIN</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

