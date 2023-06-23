import { Link, useNavigate } from "@remix-run/react";
import { z } from "zod";

import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import { ApiCall } from "~/services/api";
import { Fa6SolidEye, Fa6SolidEyeSlash, Fa6SolidUser } from "~/components/icons/icons";

export default function register() {

    const navitgator = useNavigate();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRePassword, setShowRePassword] = useState<boolean>(false);

    const nextButton = useRef<HTMLButtonElement>(null);


    const numbeRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const rePassRef = useRef<HTMLInputElement>(null);

    const iref = useRef<HTMLInputElement>(null);
    const eref = useRef<HTMLInputElement>(null);
    const rref = useRef<HTMLInputElement>(null);
    const tref = useRef<HTMLInputElement>(null);

    const handelPassword = () => {
        setShowPassword((val) => !val);
    };
    const handelRePassword = () => {
        setShowRePassword((val) => !val);
    };

    const submit = async () => {
        const RegisterScheme = z
            .object({
                email: z
                    .string()
                    .nonempty("Email is required.")
                    .email("Enter a valid email."),
                password: z
                    .string()
                    .nonempty("Password is required")
                    .min(8, "Password should be have atlest 8 character.")
                    .regex(
                        /[A-Z]/,
                        "Password should be contain atleast one Capital letter."
                    )
                    .regex(
                        /[a-z]/,
                        "Password should be contain atleast one lower letter."
                    )
                    .regex(/\d/, "Password should be contain atleast one degit letter.")
                    .regex(
                        /[@$!%*?&]/,
                        "Password should be contain atleast one specil character [@$!%*?&]."
                    ),
                repassword: z
                    .string()
                    .nonempty("Re-Password is required")
                    .min(8, "Re-Password should be have atlest 8 character.")
                    .regex(
                        /[A-Z]/,
                        "Re-Password should be contain atleast one Capital letter."
                    )
                    .regex(
                        /[a-z]/,
                        "Re-Password should be contain atleast one lower letter."
                    )
                    .regex(
                        /\d/,
                        "Re-Password should be contain atleast one degit letter."
                    )
                    .regex(
                        /[@$!%*?&]/,
                        "Re-Password should be contain atleast one specil character [@$!%*?&]."
                    ),
            })
            .strict()
            .refine(
                (val) => {
                    if (val.password == val.repassword) {
                        return true;
                    }
                },
                { message: "Password and Re-Password should be the same" }
            );

        type RegisterScheme = z.infer<typeof RegisterScheme>;

        const register: RegisterScheme = {
            email: numbeRef!.current!.value,
            password: passRef!.current!.value,
            repassword: rePassRef!.current!.value,
        };

        const parsed = RegisterScheme.safeParse(register);
        if (parsed.success) {
            const data = await ApiCall({
                query: `
          mutation signup($signUpUser:SignUpUserInput!){
            signup(signUpUserInput:$signUpUser){
              id,
              email,
              role,
              token
            }
          }
        `,
                veriables: {
                    signUpUser: { email: register.email, password: register.password },
                },
            });
            if (!data.status) {
                toast.error(data.message, { theme: "light" });
            } else {
                iref!.current!.value = data.data.signup!.id;
                eref!.current!.value = data.data.signup!.email;
                rref!.current!.value = data.data.signup!.role;
                tref!.current!.value = data.data.signup!.token;
                nextButton.current!.click();
            }
        } else {
            toast.error(parsed.error.errors[0].message, { theme: "light" });
        }
    };
    return (
        <div>
            <div className="min-h-screen w-full bg-[#eeeeee] grid place-items-center">
                <div className="p-6 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all bg-white border-t-4 border-purple-500">
                    <h1 className="text-gray-800 text-xl font-bold">PLANNING & DEVELOPMENT AUTHORITY</h1>
                    <p className="text-lg my-4 text-gray-700 text-center">Sign up to start you session</p>
                    <div className="border-b-2 border-gray-200 py-1 flex items-center">
                        <div
                            className="text-slate-800 font-bold text-xl mr-4"
                        >
                            <Fa6SolidUser></Fa6SolidUser>
                        </div>
                        <input
                            ref={numbeRef}
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline-none border-none fill-none text-slate-800 py-2"
                        />
                    </div>
                    <div className="border-b-2 border-gray-200 py-1 mt-4 flex items-center">
                        <div
                            className="text-slate-800 font-bold text-xl mr-4"
                            onClick={handelPassword}
                        >
                            {showPassword ? <Fa6SolidEye></Fa6SolidEye> : <Fa6SolidEyeSlash></Fa6SolidEyeSlash>}
                        </div>
                        <input
                            ref={passRef}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent outline-none border-none fill-none text-slate-800 py-2"
                        />
                    </div>
                    <div className="border-b-2 border-gray-200 py-1 mt-4 flex items-center">
                        <div
                            className="text-slate-800 font-bold text-xl mr-4"
                            onClick={handelRePassword}
                        >
                            {showRePassword ? <Fa6SolidEye></Fa6SolidEye> : <Fa6SolidEyeSlash></Fa6SolidEyeSlash>}
                        </div>
                        <input
                            ref={rePassRef}
                            type={showRePassword ? "text" : "password"}
                            placeholder="Re-Password"
                            className="bg-transparent outline-none border-none fill-none text-slate-800 py-2"
                        />
                    </div>
                    <Link to="/home"
                        className="inline-block text-center text-white bg-purple-500 py-2 px-6 text-xl font-medium rounded-md w-full mt-6"
                    >
                        Register
                    </Link>
                    <h5 className="text-slate-800 text-center mt-6">
                        Already have an account?{" "}
                        <Link to={"/"} className="text-blue-500">
                            Sign In
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}
