import { Link } from "@remix-run/react";
import { SVGProps, useLayoutEffect, useRef, useState } from "react";
import { FluentEmojiHighContrastBuildingConstruction, PhBuildingsBold, StreamlineNatureEcologyLeafProtectEnvironmentLeafEcologyPlantPlantsEco } from "~/components/icons/icons";
import gsap from "gsap";


const Home: React.FC = (): JSX.Element => {
  const links = [
    {
      name: "Notification for Town and Planning Board Constitution",
      link: "#",
    },
    {
      name: "Development Control Rules (Amendment) 2016",
      link: "#",
    },
    {
      name: "Order regarding Storage of Construction Material",
      link: "#",
    },
    {
      name: "Order regarding Inspection Based on Risk Assessment",
      link: "#",
    },
    {
      name: "Notification Rates for Landuse development charge",
      link: "#",
    },
    {
      name: "Joint Inspection Order in EODB",
      link: "#",
    },
    {
      name: "Order regarding Construction Permission Validity expiring on or after 25/03/2020 are hereby extended upto 31/03/2021",
      link: "#",
    },
    {
      name: "Regional Plan of Daman 2001",
      link: "#",
    },
    {
      name: "Fee for Various Permissions and Recommendations",
      link: "#",
    },
    {
      name: "Daman Extension of Ribbon Development to National Highways, Rules 2020",
      link: "#",
    },
    {
      name: "Draft Notification for ROWs and road categories for Daman",
      link: "#",
    },
    {
      name: "Checklist For Grant Of Part Occupancy Certificate And Full Occupancy Certificate",
      link: "#",
    },
    {
      name: "Checklist For Grant Of Part Occupancy Certificate And Full Occupancy Certificate",
      link: "#",
    },
    {
      name: "Outline Development Plan - ODP - P1",
      link: "#",
    },
    {
      name: "Outline Development Plan - ODP - P2",
      link: "#",
    },
    {
      name: "Daman Development Control Rules, 2014",
      link: "#",
    },
    {
      name: "Daman Ribbon Development Rules, 2019",
      link: "#",
    },
    {
      name: "Publish Draft Ribbon Development Rules fixing Road Boundary",
      link: "#",
    },
    {
      name: "Report of Construction Permission granted",
      link: "#",
    },
    {
      name: "Qualification required for Registration of Architect and Engineers",
      link: "#",
    },
    {
      name: "Responsibility of Architects & Engineers",
      link: "#",
    },
    {
      name: "Authorization of Architect for Completion Certificate",
      link: "#",
    },
    {
      name: "Inspection Reports to be submitted online within 24 Hrs",
      link: "#",
    },
    {
      name: "Computerized Inspector Allocation",
      link: "#",
    },
    {
      name: "Computerized System for identifying building/ area that needs to be inspected based on risk factor",
      link: "#",
    },
    {
      name: "Risk based classification of all kind of buildings",
      link: "#",
    },
    {
      name: "Conflict resolution mechanism for land and construction permission",
      link: "#",
    },
    {
      name: "Time line for Construction Permission/ during construction/ Occupancy Certificate",
      link: "#",
    },
    {
      name: "Undertaking To Be Submitted By Applicant For Height Relaxation",
      link: "#",
    },
    {
      name: "Site Inspection Report of Construction Permission granted",
      link: "#",
    },
    {
      name: "Site Inspection Report of Occupancy Certificate.",
      link: "#",
    },
    {
      name: "Order regarding Construction Permission under the EoDB.",
      link: "#",
    },
    {
      name: "Checklist for Building Plan Approval (Construction Permission).",
      link: "#",
    },
    {
      name: "Checklist of Layout Approval for Residential and Industrial Purpose.",
      link: "#",
    },
    {
      name: "Performa for Full/Part Occupancy Certificate.",
      link: "#",
    },
    {
      name: "Real Estate Regulation Act.",
      link: "#",
    },
    {
      name: "Planning and Development Authority - Circular regarding EoDB 2017.",
      link: "#",
    },
    {
      name: "PWD Civil Division - Circular regarding EoDB 2017.",
      link: "#",
    },
  ];




  const downloads = [
    {
      name: "DCR for Daman",
      link: "./assets/doc1.pdf",
    },
    {
      name: "DNH & DD TCP ACT 1974 (amm. 2022)",
      link: "./assets/doc2.pdf",
    },
    {
      name: "PDA Daman Rules 2011",
      link: "./assets/doc3.pdf",
    },
    {
      name: "Regional Plan 2005-2021",
      link: "./assets/doc4.pdf",
    },
    {
      name: "Ribbon Development rules for SH, MDR, ODR & VR for DD",
      link: "./assets/doc5.pdf",
    },
  ]

  const header = useRef<HTMLElement | null>(null);


  const [menu, setMenu] = useState<boolean>(false);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".home >  .ele", {
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: {
          from: "start",
          amount: 0.5
        }
      });

      gsap.from(header.current, {
        opacity: 0,
        duration: 1,
        y: -50,
      });
    });
  }, []);

  return (
    <>
      <main className="min-h-screen w-full relative">
        <img src="/images/banner.jpg" alt="error" className="inline-block w-full h-screen absolute top-0 left-0 object-cover object-top" />

        <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-20 p-20 grid items-center justify-start">
          <div className="home">
            <h1 className="ele text-white lato font-medium text-6xl mt-20 leading-tight">Shaping Tomorrow,<br />Building Today</h1>
            <p className="ele text-white text-2xl mt-4">Partner with the leading goverment authority for planning and<br /> development in Daman and Diu.</p>
            <Link to={"/mobilelogin/"} className="ele bg-[#62d6be]  font-medium text-center text-lg py-1 px-4 text-black rounded-md mallanna tracking-wide mt-4 inline-block">Join Us</Link>
          </div>
        </div>


        <header ref={header} className="w-full py-4 gap-4 bg-[#1f1f1f] flex flex-col md:flex-row px-8 items-center relative">
          <p className="font-medium text-xl text-white font-sans">PLANNING & DEVELOPMENT AUTHORITY</p>
          <div className="hidden md:block grow"></div>
          <div className="shrink-0 flex gap-4">
            <Link to={"/mobilelogin/"} className="bg-[#99908d]  font-medium text-center text-lg py-1 px-4 text-white rounded-md mallanna tracking-wide">Citizen Login</Link>
            <a href={"http://77.75.120.70:8073"} className="bg-cyan-500  font-medium text-center text-lg py-1 px-4 text-white rounded-md mallanna tracking-wide">Architect Login</a>
          </div>
        </header>

      </main>

      <section className="py-32 grid place-items-center bg-[#1f1f1f]">
        <div className="w-4/6">
          <p className="text-white text-center text-2xl font-sans"> The Planning and Development Authority Daman (PDA Daman) is a statutory body constituted under Section
            20
            Daman & Diu Town and Country Planning (Amendment) Regulation, 1999 (Principal Act- Goa, Daman and Diu
            Town and
            Country Planning Act, 1974) in the year 2012.
          </p>
          <p className="text-white text-center text-2xl mt-10 font-sans"> The whole area of Daman district (except area of designated reserved forests and area under the
            Jurisdiction of Coast Guard Authority) has been declared as planning area under section 18 of the Act in
            the
            year 2011.
          </p>
        </div>
      </section>

      <section className="bg-[#252525] sm:p-20 p-6">
        <div className="flex justify-between gap-6 flex-col lg:flex-row">

          <div className=" flex-1 mt-8 lg:mt-0">
            <h3 className="text-3xl text-gray-300 font-medium lato mb-4">Downloads</h3>
            <div className="h-[450px] overflow-y-scroll no-scrollbar">
              {downloads.map((val: any, index: number) => {
                return (
                  <div key={index} className="flex items-center gap-x-2 bg-[#191919] rounded-lg my-2 py-1 px-4">
                    <Link target="_blank" to={val.link} className="flex hover:underline text-gray-300 text-xl font-medium mallanna">	&#x25C7; {val.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1  mt-8 lg:mt-0">
            <h3 className="text-3xl text-gray-300 font-medium lato mb-4">Latest News & Updates
            </h3>
            <div className="h-[450px] overflow-y-scroll">
              {links.map((val: any, index: number) => {
                return (
                  <div key={index} className="flex items-center gap-x-2 bg-[#191919] rounded-lg my-2 py-1 px-4">
                    <Link target="_blank" to={val.link} className="flex hover:underline text-gray-300 text-xl font-medium mallanna">	&#x25C7; {val.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#252525] p-10 flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-80 md:w-96 p-8">
          <div className="grid place-items-center">
            <FluentEmojiHighContrastBuildingConstruction className="text-5xl text-gray-300 text-center"></FluentEmojiHighContrastBuildingConstruction>
          </div>
          <p className="text-gray-300 text-center text-3xl font-semibold mt-10 font-sans">Streamlined Development Process</p>
        </div>
        <div className="w-80 md:w-96 p-8">
          <div className="grid place-items-center">
            <PhBuildingsBold className="text-5xl text-gray-300 text-center"></PhBuildingsBold>
          </div>
          <p className="text-gray-300 text-center text-3xl font-semibold mt-10 font-sans">Enhanced Quality Living</p>
        </div>
        <div className="w-80 md:w-96 p-8">
          <div className="grid place-items-center">
            <StreamlineNatureEcologyLeafProtectEnvironmentLeafEcologyPlantPlantsEco className="text-5xl text-gray-300 text-center"></StreamlineNatureEcologyLeafProtectEnvironmentLeafEcologyPlantPlantsEco>
          </div>
          <p className="text-gray-300 text-center text-3xl font-semibold mt-10 font-sans">Sustainable Future Planning</p>
        </div>
      </section>
      <section className="bg-[#2e2e2e] p-20">
        <h1 className="text-gray-300 text-4xl font-semibold mt-10 font-sans text-center lg:text-left">Services</h1>
        <div className="flex gap-6 mt-6 flex-col lg:flex-row relative items-center justify-between">
          <div className="w-80 md:w-96 h-[32rem] rounded-xl relative overflow-hidden group">
            <img src="/images/service1.jfif" alt="service one" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-32 translate-y-32 group-hover:translate-y-0 transition-all">
              <h1 className="text-gray-300 text-left text-2xl font-semibold font-sans">RTI Service</h1>
              <p className="text-gray-300 text-left text-lg font-semibold font-sans">Access info through Right to Information. </p>
            </div>
          </div>
          <div className="w-80 md:w-96 h-[32rem] rounded-lg relative overflow-hidden group">
            <img src="/images/service2.jpg" alt="service two" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-32 translate-y-32 group-hover:translate-y-0 transition-all">
              <h1 className="text-gray-300 text-left text-2xl font-semibold font-sans">Zone Information</h1>
              <p className="text-gray-300 text-left text-lg font-semibold font-sans">Get detailed zoning data for informed decisions.  </p>
            </div>
          </div>
          <div className="w-80 md:w-96 h-[32rem] rounded-lg relative overflow-hidden group">
            <img src="/images/service3.jpg" alt="service three" className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-xl" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 rounded-b-xl h-32 translate-y-32 group-hover:translate-y-0 transition-all">
              <h1 className="text-gray-300 text-left text-2xl font-semibold font-sans">Old Documents Service</h1>
              <p className="text-gray-300 text-left text-lg font-semibold font-sans">Obtain Old OC, CP and Maps efficiently.  </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#191919] px-20 py-32">
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="md:order-1 order-2">
            <p className="text-white text-left text-2xl mt-10 font-sans"> The whole area of Daman district (except area of designated reserved forests and area I consider this a matter of great pride and priviledge that I have been bestowed with the opportunity to serve as the Administrator of the glorious, abundantly resourceful and strikingly beautiful region of Union Territories of Daman, Diu and Dadra and Nagar Haveli
            </p>
            <p className="text-white font-medium text-left text-3xl font-sans mt-4">Praful K. Patel</p>
          </div>
          <img src="./images/avatar.png" alt="avatar" className="shrink-0 w-60 h-80 object-cover bg-white rounded-xl md:order-2 order-1" />
        </div>
      </section>
      <section className="bg-[#1f1f1f] p-10 sm:p-20">
        <div className="flex xl:items-center items-start justify-between gap-6 flex-col xl:flex-row">
          <div className="shrink-0">
            <h1 className="text-white font-medium text-left text-2xl font-sans mt-4">Location</h1>
            <p className="text-white font-medium text-left text-lg font-sans mt-2">Office of the Collector & District Magistrate <br />Bhitwadi Road, Municipal Market, Dholar,<br /> Moti Daman, Daman,<br />Daman and Diu and Dadra and Nagar Haveli  396210</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14958.90673931113!2d72.8328819!3d20.394156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d094bbefa247%3A0x147da831799ce416!2sOffice%20of%20the%20Collector%20%26%20District%20Magistrate%2C%20Daman!5e0!3m2!1sen!2sin!4v1696066672958!5m2!1sen!2sin" width="600" height="450" className="shrink-0 border-none rounded-xl scale-50 origin-top-left sm:scale-100" loading="lazy"></iframe>
        </div>
      </section>
      <footer className="bg-[#141414] p-10 sm:p-20">
        <p className="text-center text-white text-xl font-sans">
          This Website is Designed & Developed by
        </p>
        <p className="text-center text-white text-xl mb-6 font-sans">
          <span className="font-medium lato">Contents Coordinator</span> - Planning and
          Development Authority, Daman
        </p>
        <p className="text-center text-white text-xl ">
          <span className="font-medium font-sans">DISCLAIMER</span> - The content is
          provided by Planning and Development Authority. PDA is responsible for
          correctness, completeness and regularly updating the contents. Daman
          e-Governance Society is not responsible for any consequences
          arising out of this.
        </p>
      </footer>
    </>
  );
}


export default Home;



function Fa6SolidBars(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512" {...props}><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"></path></svg>
  )
}

function Fa6SolidXmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 384 512" {...props}><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"></path></svg>
  )
}