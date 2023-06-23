import type { V2_MetaFunction } from "@remix-run/node";
import { Fa6SolidEye, Fa6SolidEyeSlash, Fa6SolidUser } from "~/components/icons/icons";
import { z } from "zod";

import styles from 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "@remix-run/react";
import { useRef, useState } from "react";
import { ApiCall } from "~/services/api";


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}


export default function Index() {

  const navitgator = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const nextButton = useRef<HTMLButtonElement>(null);

  const iref = useRef<HTMLInputElement>(null);
  const eref = useRef<HTMLInputElement>(null);
  const rref = useRef<HTMLInputElement>(null);
  const tref = useRef<HTMLInputElement>(null);


  const numberRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const submit = async () => {
    const LoginScheme = z
      .object({
        number: z
          .string()
          .nonempty("Email is required.")
          .email("Enter a valid email."),
        password: z
          .string()
          .nonempty("Password is required")
          .min(8, "Password should be have atlest 8 character."),
      })
      .strict();

    type LoginScheme = z.infer<typeof LoginScheme>;

    const login: LoginScheme = {
      number: numberRef!.current!.value,
      password: passRef!.current!.value,
    };

    const parsed = LoginScheme.safeParse(login);
    if (parsed.success) {
      const data = await ApiCall({
        query: `
        query signin($loginUserInput:LoginUserInput!){
          signin(loginUserInput:$loginUserInput){
            token,
            id,
            email,
            role
          }
        }
      `,
        veriables: { loginUserInput: login },
      });
      if (!data.status) {
        toast.error(data.message, { theme: "light" });
      } else {
        iref!.current!.value = data.data.signin!.id;
        eref!.current!.value = data.data.signin!.email;
        rref!.current!.value = data.data.signin!.role;
        tref!.current!.value = data.data.signin!.token;
        nextButton.current!.click();
      }
    } else {
      toast.error(parsed.error.errors[0].message, { theme: "light" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#eeeeee] grid place-items-center">
      <div className="p-6 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all bg-white border-t-4 border-purple-500">
        <h1 className="text-gray-800 text-xl font-bold">PLANNING & DEVELOPMENT AUTHORITY</h1>
        <p className="text-lg my-4 text-gray-700 text-center">Sign in to start you session</p>

        <div className="border-b-2 border-gray-200 py-1 flex items-center">
          <div className="text-slate-800 font-bold text-xl mr-4">
            <Fa6SolidUser></Fa6SolidUser>
          </div>
          <input
            type="text"
            ref={numberRef}
            placeholder="Mobile Number"
            className="bg-transparent outline-none border-none fill-none text-slate-800 py-2 grow"
          />
        </div>
        <div className="border-b-2 border-gray-200 py-1 mt-4 flex items-center">
          <div className="text-slate-800 font-bold text-xl mr-4" onClick={() => setShowPassword(val => !showPassword)}>
            {showPassword ? <Fa6SolidEye></Fa6SolidEye> : <Fa6SolidEyeSlash></Fa6SolidEyeSlash>}
          </div>
          <input
            ref={passRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent outline-none border-none fill-none text-slate-800 py-2 grow"
          />
        </div>
        <Link to="/home"
          className="inline-block text-center text-white bg-purple-500 py-2 px-6 text-xl font-medium rounded-md w-full mt-6"
        >
          Login
        </Link>
        <p className="text-md font-semibold text-gray-800 mt-6 text-center">Don't have an account? <Link to="register" className="text-blue-500 cursor-pointer">Click here</Link></p>
      </div>
    </div>
  );
}
