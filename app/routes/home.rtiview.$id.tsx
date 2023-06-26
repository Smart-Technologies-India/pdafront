import { useRef, useState } from "react";
import { Fa6SolidFileLines, Fa6SolidLink } from "~/components/icons/icons";
import { ToastContainer, toast } from "react-toastify";

import styles from "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { ApiCall, UploadFile } from "~/services/api";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { userPrefs } from "~/cookies";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}



export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie: any = await userPrefs.parse(cookieHeader);

    const data = await ApiCall({
        query: `
        query getAllRtiById($id:Int!){
            getAllRtiById(id:$id){
              id,
              name,
              address,
              mobile,
              email,
              user_uid,
              subject_info,
              from_date,
              to_date,
              description,
              information,
              proverty_line_url,
              iagree,
              signature_url
            }
          }
      `,
        veriables: {
            id: parseInt(id!)
        },
    });

    const submit = await ApiCall({
        query: `
        query searchCommon($searchCommonInput:SearchCommonInput!){
            searchCommon(searchCommonInput:$searchCommonInput){
              id,
              village,
              name,
              form_type,
              user_id,
              auth_user_id,
              focal_user_id,
              intra_user_id,
              inter_user_id,
              number,
              form_status,
              query_status, 
            }
          }
      `,
        veriables: {
            "searchCommonInput": {
                "form_id": parseInt(id!)
            }
        },
    });

    return json({ user: cookie, formid: id, from_data: data.data.getAllRtiById, submit: submit.status });

};


const RightToInformationView = (): JSX.Element => {

    const loader = useLoaderData();

    const user = loader.user;
    const from_data = loader.from_data;

    const navigator = useNavigate();

    const isSubmited = loader.submit;

    const submit = async () => {

        const data = await ApiCall({
            query: `
            mutation createCommon($createCommonInput:CreateCommonInput!){
                createCommon(createCommonInput:$createCommonInput){
                  id,
                }
              }
            `,
            veriables: {
                createCommonInput: {
                    "form_id": Number(from_data.id),
                    "user_id": Number(user.id),
                    "auth_user_id": "5",
                    "focal_user_id": "5",
                    "intra_user_id": "3,4",
                    "inter_user_id": "0",
                    "village": "Daman",
                    "name": from_data.name,
                    "number": from_data.mobile.toString(),
                    "form_status": 1,
                    "form_type": "RTI",
                    "query_status": "SUBMIT"
                }
            },
        });
        if (!data.status) {
            toast.error(data.message, { theme: "light" });
        } else {
            navigator("/home/");
        }
    }

    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Right to Information Application</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>
                <p className="text-center font-semibold text-xl text-gray-800"> Format of Application for obtaining Information under Right to Information Act ,2005. </p>

                {/*--------------------- section 1 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 1. Applicant Details(s) </p>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.1</span> Applicant Name
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.name}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.2</span> Applicant address
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.address}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.3</span> Applicant Contact Number
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.mobile}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.4</span> Applicant Email
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.email}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.5</span> Applicant UID
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.user_uid}
                    </div>
                </div>
                {/*--------------------- section 1 end here ------------------------- */}


                {/*--------------------- section 2 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 2. R.T.I. Details </p>
                </div>

                <div className="flex flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.1</span> Subject matter of Information
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.subject_info}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.2</span> From Date
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {new Date(from_data.from_date).toLocaleString()}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.3</span> To Date
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {new Date(from_data.to_date).toLocaleString()}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.4</span> Description Of Information Required
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.description}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.5</span> Additional Information Required
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {from_data.information}
                    </div>
                </div>
                {/*--------------------- section 2 end here ------------------------- */}

                {/*--------------------- section 3 start here ------------------------- */}

                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 3. Document Attachment </p>
                </div>

                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">3.1</span> Poverty Line Document Upload
                        <p className="text-rose-500 text-sm">
                            ( Only Applicable in case Applicant is below Poverty Line.Maximum Upload Size 2MB & Allowed Format JPG / PDF / PNG )</p>
                    </div>
                    <div className="flex-none flex gap-4 lg:flex-1 w-full lg:w-auto">
                        <a target="_blank"
                            href={from_data.proverty_line_url}
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Fa6SolidLink></Fa6SolidLink> View Doc.
                            </div>
                        </a>
                    </div>
                </div>

                {/*--------------------- section 3 end here ------------------------- */}

                {/*--------------------- section 4 start here ------------------------- */}

                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white">
                        4. Applicant / Occupant Declaration and Signature </p>
                </div>

                <div className="flex gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="text-xl font-normal text-left text-gray-700 ">
                        4.1
                    </div>
                    <div className="flex items-start">
                        <p className="text-xl font-normal text-left text-gray-700 pr-2">{from_data.iagree}</p>
                        <label htmlFor="checkbox" className="text-xl font-normal text-left text-gray-700 ">
                            I solemnly affirm & hereby give undertaking that the above information furnished by me are correct and true to the best of my knowledge and belief
                        </label>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 gap-y-2 items-center px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700">
                        <span className="mr-2">4.2</span> Applicant Signature Image
                        <p className="text-rose-500 text-sm">
                            ( Maximum Upload Size 4MB & Allowed Format JPG / PDF / PNG )</p>
                    </div>
                    <div className="flex-none flex gap-4 lg:flex-1 w-full lg:w-auto">
                        <a target="_blank"
                            href={from_data.signature_url}
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                        >
                            <div className="flex items-center gap-2">
                                <Fa6SolidLink></Fa6SolidLink> View Doc.
                            </div>
                        </a>
                    </div>
                </div>

                {/*--------------------- section 4 end here ------------------------- */}


                {isSubmited ? <></> : <>
                    <div className="flex flex-wrap gap-6 mt-4">
                        <Link to={"/home/"}
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-rose-500 text-center rounded-md font-medium"
                        >
                            Discard & Close
                        </Link>
                        <button
                            onClick={submit}
                            className="py-1 w-full sm:w-auto text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                        >
                            Proceed
                        </button>
                    </div>
                </>}
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}


export default RightToInformationView;