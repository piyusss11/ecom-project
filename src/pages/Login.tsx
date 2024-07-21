import { useState } from "react";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const loginMutation = api.user.login.useMutation({
    onSuccess: (data) => {
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      // Optionally, you can handle the token, e.g., save it in local storage
      document.cookie = `token=${data.token}; path=/`; // Set token in cookies
      localStorage.setItem("token", data.token);
      router.push("/categories");
    },
    onError: (error) => {
      setSuccessMessage("");
      setErrorMessage(`Login error: ${error.message}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
      //  router.push("/categories");
    } catch (error) {
      // Error handling will be managed by onError in loginMutation
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="font-inter flex justify-center">
      <div className="my-10 w-1/3 rounded-lg border-2 border-gray-200 px-16 py-10">
        <div className="mb-4 text-center text-[32px] font-semibold leading-[38px]">
          Login
        </div>
        <div className="text-center text-[24px] font-[500] leading-7">
          Welcome back to ECOMMERCE
        </div>
        <div className="my-2 text-center text-sm">
          The next gen business marketplace
        </div>
        <div className="my-6">
          <h1>Email</h1>
          <input
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="email"
            placeholder="Enter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-6">
          <h1>Password</h1>
          <div className="relative">
            <input
              value={password}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-black underline"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button onClick={handleSubmit}
          type="submit"
          className="my-6 w-full rounded-lg bg-black p-2 text-sm font-[500] text-white"
        >
          LOGIN
        </button>
        <div className="flex items-center justify-center gap-4 text-center text-base">
          Don&apos;t have an Account?{" "}
          <Link href={"/Register"}>
            <span className="font-[500]">SIGN UP</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
