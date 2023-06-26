import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { userPrefs } from "~/cookies";
import { ApiCall } from "~/services/api";
import styles from "react-toastify/dist/ReactToastify.css";


import { ToastContainer, toast } from "react-toastify";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

const OldCopy: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Old Copy</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}
export default OldCopy;