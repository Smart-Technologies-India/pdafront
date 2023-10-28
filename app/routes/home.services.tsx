import { Link } from "@remix-run/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { CibLinuxFoundation, FluentBuildingPeople20Filled, FluentCloudArchive24Filled, FluentEmojiHighContrastBuildingConstruction, MdiFolderInformation, MdiMapMarkerPath } from "~/components/icons/icons";


const Services: React.FC = (): JSX.Element => {

    const title = useRef<HTMLHeadingElement | null>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".services >  div", {
                opacity: 0,
                duration: 1,
                y: 100,
                stagger: {
                    from: "start",
                    amount: 0.5
                }
            });
            gsap.from(title.current, {
                opacity: 0,
                duration: 1,
                y: 50,
            });
        });
    }, []);

    return (
        <>
            <div className=" p-4 my-4 w-full">
                <h1 ref={title} className="text-gray-800 text-3xl font-semibold text-center">Services</h1>
                <div className="services flex gap-6 flex-wrap justify-center mt-6">
                    <ServiceCard title="Right To Information Applicaton" description="File your RTI application online fro the departments. Users have to fill this online applicaton form for availing this service" apply="/home/rti/" icons={1} />
                    <ServiceCard title="Zone Information" description="Land maps are used by planning authorities to advice the zone and usage pattern. You may apply here for getting online zone information." apply="/home/zoneinfo/" icons={2} />
                    <ServiceCard title="Old Copy Of CP / Maps / OC" description="Obtain online a copy of any document with the Planning and Development Authority of the daman goverment through this platform." apply="/home/oldcopy" icons={3} />

                    <ServiceCard title="Occupancy certificate" description="Obtain your occupancy certificate online. Ensure your property is compliant with regulations for safe and legal occupation." apply="/home/oc/" icons={4} />
                    <ServiceCard title="Construction permission" description="Secure legal authorization swiftly for your projects through our portal. Hassle-free" apply="/home/cp/" icons={5} />
                    <ServiceCard title="Plinth Inspection" description="Apply for plinth inspections online. Ensure your project's foundation is stable and secure." apply="/home/plinth" icons={6} />
                </div>
            </div>
        </>
    );
}

export default Services;

interface ServiceCardProps {
    apply: string;
    title: string;
    description: string;
    icons: number;
}

const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps): JSX.Element => {
    return (
        <>
            <div className="p-4 bg-white w-96 shadow-lg hover:shadow-2xl grid place-items-center h-80 rounded-xl">
                <div className="grid place-items-center gap-2 p-6">
                    {(props.icons == 1) ? <MdiFolderInformation className="text-5xl text-[#0984e3]"></MdiFolderInformation> : null}
                    {(props.icons == 2) ? <MdiMapMarkerPath className="text-5xl text-[#0984e3]"></MdiMapMarkerPath> : null}
                    {(props.icons == 3) ? <FluentCloudArchive24Filled className="text-5xl text-[#0984e3]"></FluentCloudArchive24Filled> : null}
                    {(props.icons == 4) ? <FluentBuildingPeople20Filled className="text-5xl text-[#0984e3]"></FluentBuildingPeople20Filled> : null}
                    {(props.icons == 5) ? <FluentEmojiHighContrastBuildingConstruction className="text-5xl text-[#0984e3]"></FluentEmojiHighContrastBuildingConstruction> : null}
                    {(props.icons == 6) ? <CibLinuxFoundation className="text-5xl text-[#0984e3]"></CibLinuxFoundation> : null}
                    <h1 className="text-lg font-medium lato">{props.title}</h1>
                    <p className="text-center text-sm mallanna">{props.description}</p>
                    <Link to={props.apply}
                        className="py-1 text-white text-sm bg-[#0984e3] text-center rounded-full font-medium w-28 inline-block mt-2"
                    >
                        Apply
                    </Link>
                </div>
            </div>
        </>
    );
} 