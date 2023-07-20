import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { userPrefs } from "~/cookies";
import { ApiCall } from "~/services/api";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);

    const departmentdata = await ApiCall({
        query: `
        query filterCommon($filterCommonInput:FilterCommonInput!){
            filterCommon(filterCommonInput:$filterCommonInput){
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
            filterCommonInput: {
                user_type: "DEPARTMENT",
                user_id: parseInt(cookie.id!),
                form_type: "ZONE"
            }
        },
    });

    return json({
        user: cookie,
        department: departmentdata.data.filterCommon
    });
};
const ZoneInfo: React.FC = (): JSX.Element => {

    const loader = useLoaderData();
    const department = loader.department;

    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Zone Information</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>


                {(department == undefined || department.length == 0 || department == null) ?
                    <h3 className="text-2xl font-semibold text-center bg-rose-500 bg-opacity-25 rounded-md border-l-4 border-rose-500 py-2  text-rose-500">You do not have any pending forms.</h3>
                    :
                    <>
                        {/* deparment section */}
                        <div className="overflow-x-scroll overflow-y-visible sm:mx-0.5 my-2">
                            <table className="min-w-full rounded-md">
                                <thead>
                                    <tr className="rounded-md bg-indigo-500 border-b border-t transition duration-300 ease-in-out hover:bg-indigo-600">
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">Form Id</th>
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">Purpose</th>
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">Applicant</th>
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">Village</th>
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">Status</th>
                                        <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {department.map((val: any, index: number) => {
                                        return (
                                            <tr key={index} className="bg-white border-b border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                    {val.form_id}
                                                </td>
                                                <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                    {val.form_type}
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
                                                    <Link to={`/home/zoneinfoview/${val.form_id}`}
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
                        {/* deparment section */}
                    </>}
            </div>
        </>
    );
}
export default ZoneInfo;