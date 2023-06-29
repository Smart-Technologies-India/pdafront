import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { userPrefs } from "~/cookies";
import { ApiCall } from "~/services/api";
import styles from "react-toastify/dist/ReactToastify.css";


import { ToastContainer, toast } from "react-toastify";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie: any = await userPrefs.parse(cookieHeader);

    const userdata = await ApiCall({
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
              form_id
            }
          }
      `,
        veriables: {
            searchCommonInput: {
                user_id: parseInt(cookie.id!)
            }
        },
    });

    const departmentdata = await ApiCall({
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
              form_id
            }
          }
      `,
        veriables: {
            searchCommonInput: {}
        },
    });

    return json({ user: cookie, userdata: userdata.data.searchCommon, departmentdata: departmentdata.data.searchCommon });
};

const Dashboard: React.FC = (): JSX.Element => {
    const loader = useLoaderData();

    const user = loader.user;
    const id = user.id;
    const userdata = loader.userdata;
    const departmentdata = loader.departmentdata;

    const navigator = useNavigate();
    const [department, setDepartment] = useState<any[]>([]);



    useEffect(() => {
        if (!(departmentdata == undefined || departmentdata == null || departmentdata.length == 0)) {
            const departmentload = departmentdata.filter((val: any) => {
                if (val.auth_user_id.toString().split(",").includes(id.toString())) return true;
                if (val.focal_user_id.toString().split(",").includes(id.toString())) return true;
                if (val.intra_user_id.toString().split(",").includes(id.toString())) return true;
                if (val.inter_user_id.toString().split(",").includes(id.toString())) return true;
                return false;
            });
            setDepartment(departmentload);
        }
    }, []);

    const view = async (id: number) => {
        navigator(`/home/rtiview/${id}`);
    }
    const accept = async (id: number) => {
        const data = await ApiCall({
            query: `
            mutation updateCommonById($updateCommonInput:UpdateCommonInput!){
                updateCommonById(updateCommonInput:$updateCommonInput){
                  id,
                }
              }
          `,
            veriables: {
                updateCommonInput: {
                    id: id,
                    query_status: "APPROVED"
                }
            },
        });

        if (!data.status) {
            toast.error(data.message, { theme: "light" });
        } else {
            window.location.reload();
        }
    }
    const reject = async (id: number) => {
        const data = await ApiCall({
            query: `
            mutation updateCommonById($updateCommonInput:UpdateCommonInput!){
                updateCommonById(updateCommonInput:$updateCommonInput){
                  id,
                }
              }
          `,
            veriables: {
                updateCommonInput: {
                    id: id,
                    query_status: "REJCTED"
                }
            },
        });

        if (!data.status) {
            toast.error(data.message, { theme: "light" });
        } else {
            window.location.reload();
        }
    }
    const query = async (id: number) => {
        const data = await ApiCall({
            query: `
            mutation updateCommonById($updateCommonInput:UpdateCommonInput!){
                updateCommonById(updateCommonInput:$updateCommonInput){
                  id,
                }
              }
          `,
            veriables: {
                updateCommonInput: {
                    id: id,
                    query_status: "QUERYRAISED"
                }
            },
        });

        if (!data.status) {
            toast.error(data.message, { theme: "light" });
        } else {
            window.location.reload();
        }
    }



    const getViewLink = (value: string, id: number): string => {

        if (value == "PETROLEUM") {
            return "/home";
        } else if (value == "RTI") {
            return `/home/rtiview/${id}`;
        } else if (value == "ZONE") {
            return "/home";
        } else if (value == "DEMOLITION") {
            return "/home";
        } else if (value == "OLDCOPY") {
            return "/home";
        } else if (value == "LANDRECORDS") {
            return `/home/landsection/${id}`;
        } else if (value == "MAMLATDAR") {
            return "/home";
        } else {
            return "/home";
        }
    }


    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 mb-10">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Dashboard</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>

                {user.role == "USER" ?
                    (userdata == undefined || userdata.length == 0 || userdata == null) ?
                        <h3 className="text-2xl font-semibold text-center bg-rose-500 bg-opacity-25 rounded-md border-l-4 border-rose-500 py-2  text-rose-500">You have not submitted any form.</h3>
                        :
                        <>
                            {/* user section */}
                            <div className="overflow-x-auto sm:mx-0.5 my-2 p-4">
                                <table className="min-w-full rounded-md">
                                    <thead>
                                        <tr className="rounded-md bg-indigo-500 border-b border-t transition duration-300 ease-in-out hover:bg-indigo-600">
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">ID</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Purpose</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Form Id</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Applicant</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Village</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Status</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userdata.map((val: any, index: number) => {
                                            return (
                                                <tr key={index} className="bg-white border-b border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">1</td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.form_type}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.form_id}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.name}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.village}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">

                                                        {val.query_status == "REJCTED" ?
                                                            <div
                                                                className="py-1 text-white text-lg px-4 bg-rose-500 text-center rounded-md font-medium"
                                                            >
                                                                {val.query_status}
                                                            </div>
                                                            :
                                                            val.query_status == "INPROCESS" ?
                                                                <div
                                                                    className="py-1 text-white text-lg px-4 bg-yellow-500 text-center rounded-md font-medium"
                                                                >
                                                                    {val.query_status}
                                                                </div>
                                                                :
                                                                val.query_status == "APPROVED" ?
                                                                    <div
                                                                        className="py-1 text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                                                                    >
                                                                        {val.query_status}
                                                                    </div>
                                                                    :
                                                                    <div
                                                                        className="py-1 text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium"
                                                                    >
                                                                        {val.query_status}
                                                                    </div>
                                                        }
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        <Link to={getViewLink(val.form_type, val.form_id)}
                                                            className="py-1 w-full sm:w-auto block text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium"
                                                        >
                                                            VIEW
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            {/* user section */}
                        </>
                    :
                    (department == undefined || department.length == 0 || department == null) ?
                        <h3 className="text-2xl font-semibold text-center bg-rose-500 bg-opacity-25 rounded-md border-l-4 border-rose-500 py-2  text-rose-500">You have not submitted any form.</h3>
                        :
                        <>
                            {/* deparment section */}
                            <div className="overflow-x-scroll overflow-y-visible sm:mx-0.5 my-2">
                                <table className="min-w-full rounded-md">
                                    <thead>
                                        <tr className="rounded-md bg-indigo-500 border-b border-t transition duration-300 ease-in-out hover:bg-indigo-600">
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">ID</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Purpose</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Form Id</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Applicant</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Village</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Status</th>
                                            <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {department.map((val: any, index: number) => {
                                            return (
                                                <tr key={index} className="bg-white border-b border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">1</td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.form_type}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.form_id}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.name}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {val.village}
                                                    </td>
                                                    <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">

                                                        {val.query_status == "REJCTED" ?
                                                            <div
                                                                className="py-1 text-white text-lg px-4 bg-rose-500 text-center rounded-md font-medium"
                                                            >
                                                                {val.query_status}
                                                            </div>
                                                            :
                                                            val.query_status == "INPROCESS" ?
                                                                <div
                                                                    className="py-1 text-white text-lg px-4 bg-yellow-500 text-center rounded-md font-medium"
                                                                >
                                                                    {val.query_status}
                                                                </div>
                                                                :
                                                                val.query_status == "APPROVED" ?
                                                                    <div
                                                                        className="py-1 text-white text-lg px-4 bg-green-500 text-center rounded-md font-medium"
                                                                    >
                                                                        {val.query_status}
                                                                    </div>
                                                                    :
                                                                    <div
                                                                        className="py-1 text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium"
                                                                    >
                                                                        {val.query_status}
                                                                    </div>
                                                        }
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">

                                                        <Link to={getViewLink(val.form_type, val.form_id)}
                                                            className="py-1 w-full sm:w-auto block text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium"
                                                        >
                                                            VIEW
                                                        </Link>

                                                        {/* {val.form_type == "LANDRECORDS" ?
                                                            <Link to={`/home/landsection/${val.form_id}`} className="py-1 text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium inline-block">VIEW</Link>
                                                            :
                                                            <div>
                                                                <button className="peer py-1 text-white text-lg px-4 bg-indigo-500 text-center rounded-md font-medium">ACTION</button>
                                                                <div className=" hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                                                                    <button
                                                                        onClick={() => view(val.form_id)}
                                                                        className="py-2 px-2 inline-block hover:bg-gray-200 text-center">VIEW</button>
                                                                    <button
                                                                        onClick={() => accept(val.id)}
                                                                        className="py-2 px-2 inline-block hover:bg-gray-200 text-center">ACCEPT</button>
                                                                    <button
                                                                        onClick={() => query(val.id)}
                                                                        className="py-2 px-2 inline-block hover:bg-gray-200 text-center">RAISE QUERY</button>
                                                                    <button
                                                                        onClick={() => reject(val.id)}
                                                                        className="py-2 px-2 inline-block hover:bg-gray-200 text-center">REJECT</button>
                                                                </div>
                                                            </div>
                                                        } */}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            {/* deparment section */}
                        </>}
            </div>
        </>
    );
}
export default Dashboard;