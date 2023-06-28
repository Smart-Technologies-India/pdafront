import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useRef } from "react";
import { userPrefs } from "~/cookies";
import { ApiCall } from "~/services/api";
import { ToastContainer, toast } from "react-toastify";



import styles from "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}




export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie: any = await userPrefs.parse(cookieHeader);
    const data = await ApiCall({
        query: `
        query getAllLandById($id:Int!){
            getAllLandById(id:$id){
              id,
              name,
              userId,
              address,
              mobile,
              email,
              survey_no,
              village_id,
              area,
              na_type,
              zone,
              road_access,
              no_road_access,
              width_adequate,
              is_dimension_plot_adequate,
              is_crz,
              is_monument,
              other_remark,
              atp_recommendation,
              comments_dept,
              condition_to_follow,
              status
            }
          }
      `,
        veriables: {
            id: parseInt(id!)
        },
    });

    const village = await ApiCall({
        query: `
        query getAllVillageById($id:Int!){
            getAllVillageById(id:$id){
              id,
              name,
            }
          }
      `,
        veriables: {
            id: parseInt(data.data.getAllLandById.village_id!)
        },
    });
    return json({ id: id, user: cookie, form: data.data.getAllLandById, village: village.data.getAllVillageById.name });
}

const LandSection: React.FC = (): JSX.Element => {
    const loader = useLoaderData();
    const form = loader.form;
    const village = loader.village;
    const id = loader.id;


    const zoneRef = useRef<HTMLInputElement>(null);
    const roadaccessRef = useRef<HTMLTextAreaElement>(null);
    const noroadaccessRef = useRef<HTMLTextAreaElement>(null);
    const widthRef = useRef<HTMLTextAreaElement>(null);
    const dimensionRef = useRef<HTMLTextAreaElement>(null);
    const crzRef = useRef<HTMLTextAreaElement>(null);
    const mounmentRef = useRef<HTMLTextAreaElement>(null);
    const otherremakRef = useRef<HTMLTextAreaElement>(null);
    const atpRef = useRef<HTMLTextAreaElement>(null);
    const conditionRef = useRef<HTMLTextAreaElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const navigator = useNavigate();


    const submit = async () => {
        const LandScheme = z
            .object({
                id: z
                    .number({ required_error: "Zone is required." }),
                zone: z
                    .string()
                    .nonempty("Zone is required."),
                road_access: z
                    .string()
                    .nonempty("Road access is required."),
                no_road_access: z
                    .string()
                    .nonempty("width  is required."),
                width_adequate: z
                    .string()
                    .nonempty("No Road access is required."),
                is_dimension_plot_adequate: z
                    .string()
                    .nonempty("Dimension plot is required."),
                is_crz: z
                    .string()
                    .nonempty("Crz is required."),
                is_monument: z
                    .string()
                    .nonempty("monument is required."),
                other_remark: z
                    .string()
                    .nonempty("Other remark is required."),
                atp_recommendation: z
                    .string()
                    .nonempty("Atp recommendation is required."),
                condition_to_follow: z
                    .string()
                    .nonempty("Condition to follow is required."),
                comments_dept: z
                    .string()
                    .nonempty("Rejection reason is required."),
            })
            .strict();

        type LandScheme = z.infer<typeof LandScheme>;

        const landScheme: LandScheme = {
            id: parseInt(id),
            zone: zoneRef!.current!.value,
            road_access: roadaccessRef!.current!.value,
            no_road_access: noroadaccessRef!.current!.value,
            width_adequate: widthRef!.current!.value,
            is_dimension_plot_adequate: dimensionRef!.current!.value,
            is_crz: crzRef!.current!.value,
            is_monument: mounmentRef!.current!.value,
            other_remark: otherremakRef!.current!.value,
            atp_recommendation: atpRef!.current!.value,
            condition_to_follow: conditionRef!.current!.value,
            comments_dept: commentRef!.current!.value,
        };

        const parsed = LandScheme.safeParse(landScheme);


        if (parsed.success) {
            const data = await ApiCall({
                query: `
                mutation updateLandById($updateLandsectionInput:UpdateLandsectionInput!){
                    updateLandById(updateLandsectionInput:$updateLandsectionInput){
                        id
                    }
                }`,
                veriables: {
                    updateLandsectionInput: landScheme
                },
            });
            if (!data.status) {
                toast.error(data.message, { theme: "light" });
            } else {
                navigator(`/home`);
            }
        }
        else { toast.error(parsed.error.errors[0].message, { theme: "light" }); }
    }



    return (
        <>
            <div className="bg-white rounded-md shadow-lg p-4 my-4 w-full">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">Land Section</h1>
                <div className="w-full flex gap-4 my-4">
                    <div className="grow bg-gray-700 h-[2px]"></div>
                    <div className="w-10 bg-gray-500 h-[3px]"></div>
                    <div className="grow bg-gray-700 h-[2px]"></div>
                </div>
                <p className="text-center font-semibold text-xl text-gray-800"> SUBJECT  :  Comments of pda on land related documents.</p>

                {/*--------------------- section 1 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 1. Applicant Details(s) </p>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.1</span> Applicant Name
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {form.name}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.2</span> Applicant Contact Number
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {form.mobile}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.3</span> Applicant Survey Number
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {form.survey_no}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.4</span> Applicant Village
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {village}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.5</span> Applicant Area
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {form.area}
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">1.6</span> Purpose
                    </div>
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                        {form.na_type}
                    </div>
                </div>
                {/*--------------------- section 1 end here ------------------------- */}

                {/*--------------------- section 2 start here ------------------------- */}
                <div className="w-full bg-indigo-500 py-2 rounded-md px-4 mt-4">
                    <p className="text-left font-semibold text-xl text-white"> 2. Site Details </p>
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.1</span> Zone in which the land falls as per the Regional
                        plan of Daman
                    </div>
                    {form.zone == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <input
                                ref={zoneRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2"
                            />
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.zone}
                        </div>
                    }
                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.2</span> Is there a road from where the land is easily
                        accessible?
                    </div>
                    {form.road_access == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={roadaccessRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.road_access}
                        </div>
                    }
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.3</span> If there is no road adjoining the land, how is it
                        proposed to provide access to the Site by the
                        applicant?
                    </div>
                    {
                        form.no_road_access == undefined ?
                            <div className="flex-none lg:flex-1 w-full lg:w-auto">
                                <textarea
                                    ref={noroadaccessRef}
                                    placeholder="Your Comment here"
                                    className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                                ></textarea>
                            </div>
                            :
                            <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                                {form.no_road_access}
                            </div>
                    }
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.4</span> Is the width of the road /Proposed road
                        adequate from the planning point of view?
                    </div>
                    {form.width_adequate == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={widthRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.width_adequate}
                        </div>
                    }
                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.5</span> Whether dimensions & arrangement of the plot
                        adequate?
                    </div>
                    {form.is_dimension_plot_adequate == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={dimensionRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.is_dimension_plot_adequate}
                        </div>
                    }

                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.6</span> Whether the land /plot falls within C.R.Z give
                        C.R.Z Category and Comments if any Distance
                        from H.T.L of the sea River, creek
                    </div>
                    {
                        form.is_crz == undefined ?
                            <div className="flex-none lg:flex-1 w-full lg:w-auto">
                                <textarea
                                    ref={crzRef}
                                    placeholder="Your Comment here"
                                    className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                                ></textarea>
                            </div>
                            :
                            <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                                {form.is_crz}
                            </div>
                    }
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.7</span> Whether the land is Situated near any protected
                        monument of A.S.I? if yes, the distance from
                        the monument? Comments ,If any.
                    </div>
                    {form.is_monument == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={mounmentRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.is_crz}
                        </div>
                    }
                </div>
                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.8</span> Any other remarks /comments?
                    </div>
                    {form.other_remark == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={otherremakRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.other_remark}
                        </div>
                    }
                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.9</span> Whether the Town & Country Planning
                        Department recommended the case from the
                        planning point of view?
                    </div>
                    {
                        form.atp_recommendation == undefined ?
                            <div className="flex-none lg:flex-1 w-full lg:w-auto">
                                <textarea
                                    ref={atpRef}
                                    placeholder="Your Comment here"
                                    className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                                ></textarea>
                            </div>
                            :
                            <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                                {form.atp_recommendation}
                            </div>
                    }
                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.10</span> Condition(s) is to be mentioned in N.A. Sanad/
                        order if N.A is granted.
                    </div>
                    {form.condition_to_follow == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={conditionRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.condition_to_follow}
                        </div>
                    }
                </div>

                <div className="flex  flex-wrap gap-4 gap-y-2 px-4 py-2 my-2">
                    <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal text-left text-gray-700 ">
                        <span className="mr-2">2.11</span> If no, the reason thereof
                    </div>
                    {form.comments_dept == undefined ?
                        <div className="flex-none lg:flex-1 w-full lg:w-auto">
                            <textarea
                                ref={commentRef}
                                placeholder="Your Comment here"
                                className=" w-full border-2 border-gray-600 bg-transparent outline-none fill-none text-slate-800 p-2 resize-none h-32"
                            ></textarea>
                        </div>
                        :
                        <div className="flex-none lg:flex-1 w-full lg:w-auto text-xl font-normal">
                            {form.comments_dept}
                        </div>
                    }
                </div>

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
                        Preview & Proceed
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}


export default LandSection;