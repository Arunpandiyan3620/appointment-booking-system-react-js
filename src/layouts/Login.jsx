import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Create the refs purpose of autofocus
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Auto focus the first input
  useEffect(() => {
    if (state === "Sign Up") {
      nameRef.current?.focus(); // The optional chain is check current focus element is true or false
    } else {
      emailRef.current?.focus();
    }
  }, [state]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onClick={onSubmitHandler}
      className="min-h-[80vh] flex items-center mb-10"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-sm">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <label htmlFor="" className="block">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
            />
          </div>
        )}
        <div className="w-full">
          <label htmlFor="" className="block">
            Email
          </label>
          <input
            type="email"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="block">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-zinc-300 rounded p-2 mt-1 focus-visible:outline-none focus-within:border-zinc-400"
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer pl-1"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer pl-1"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
