import { LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SVGProps, useState } from "react";


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

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <main className={`bg-[#eeeeee]  transition-all duration-500 ${menu ? "pl-96" : ""}`}>
      <div
        className={`fixed flex flex-col top-0 left-0 w-96 h-screen bg-[#2f3863] z-10 p-4  transition-all duration-500 ${menu ? "" : "-translate-x-[100%]"} `}>
        <div className="flex w-full">
          <div className="grow"></div>
          <p className="text-white font-semibold text-xl cursor-pointer" onClick={() => setMenu(val => false)}>
            <Fa6SolidXmark></Fa6SolidXmark>
          </p>
        </div>
        <p className="text-white text-center text-2xl border-b-2 border-white pb-2">&#x2756; Home &#x2756;</p>
        <a href="#"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; About us
        </a>
        <a href="#"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; Contact Us
        </a>

        <div className="h-6"></div>
        <p className="text-white text-center text-2xl border-b-2 border-white pb-2">&#x2756; Services &#x2756;</p>
        <a href="./assets/doc1.pdf"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; DCR for Daman
        </a>
        <a href="./assets/doc2.pdf"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; DNH & DD TCP ACT 1974 (amm. 2022)
        </a>
        <a href="./assets/doc3.pdf"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; PDA Daman Rules 2011
        </a>
        <a href="./assets/doc4.pdf"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; Regional Plan 2005-2021
        </a>
        <a href="./assets/doc5.pdf"
          className="px-2 inline-block my-1 cursor-pointer w-full rounded-md text-xl py-2 text-white font-semibold hover:text-black hover:bg-yellow-500 transition-all duration-500">
          &#x27E1; Ribbon Development rules for SH, MDR, ODR & VR for DD
        </a>
        <div className="grow"></div>
        <Link to={"/mobilelogin/"} className="bg-green-500  font-semibold text-center text-xl py-2 px-4 text-white rounded-md w-full ">Citizen Login</Link>
        <div className="h-6"></div>
        <a href={"http://77.75.120.70:8073"} className="bg-blue-500  font-semibold text-center text-xl py-2 px-4 text-white rounded-md w-full">Department Login</a>
      </div>

      <div className="mx-auto border border-black relative pt-24">
        <header className={`bg-white flex py-2 px-4 flex-wrap gap-y-2 gap-x-4 items-center shadow-lg fixed top-0 w-full transition-all duration-500 ${menu ? "left-96" : "left-0"}`}>
          <p className="text-black font-semibold text-3xl cursor-pointer" onClick={() => setMenu(val => !val)}><Fa6SolidBars></Fa6SolidBars></p>
          {menu ? null :
            <div className="grow"></div>
          }
          <img src="/logo.jpg" alt="logo" className="shrink-0 object-fill object-center w-20 h-20" />
          <div className="ml-4">
            <p className="text-black font-semibold text-3xl">PLANNING & DEVELOPMENT AUTHORITY</p>
          </div>
          {menu ? null :
            <>
              <div className="grow"></div>
              <Link to={"/mobilelogin/"} className="bg-green-500  font-semibold text-center text-xl py-2 px-4 text-white rounded-md">Citizen Login</Link>
              <div className="h-10 w-[2px] bg-gray-600"></div>
              <a href={"http://77.75.120.70:8073"} className="bg-blue-500  font-semibold text-center text-xl py-2 px-4 text-white rounded-md">Department Login</a>
            </>

          }
        </header>

        <main className="mx-auto md:w-4/5">

          <section className="rounded p-1">

            <div className="p-4 mx-4 bg-white rounded-md my-6 border-l-4 border-[#2f3863] hover:shadow-lg">

              <h3 className="text-3xl text-[#2f3863] px-2 mx-4 border-b-4 border-[#2f3863] font-semibold">About Us</h3>
              <div className="p-4 mx-4 bg-white">
                <p className="text-black text-xl p-2 text-justify font-medium">
                  The Planning and Development Authority Daman (PDA Daman) is a statutory body constituted under Section
                  20
                  Daman & Diu Town and Country Planning (Amendment) Regulation, 1999 (Principal Act- Goa, Daman and Diu
                  Town and
                  Country Planning Act, 1974) in the year 2012.
                </p>
                <p className="text-black text-xl p-2 text-justify font-medium">
                  The whole area of Daman district (except area of designated reserved forests and area under the
                  Jurisdiction of Coast Guard Authority) has been declared as planning area under section 18 of the Act in
                  the
                  year 2011.
                </p>
              </div>
              <div className="w-full grid place-items-end">
                <Link to={`/about`} className="text-lg text-white bg-[#2f3863] rounded-md py-1 px-4 cursor-pointer">Read
                  More</Link>
              </div>
            </div>


            <div className="h-10"></div>
            <div className="p-4 mx-4 bg-white rounded-md my-6 border-l-4 border-[#2f3863] hover:shadow-lg">
              <h3 className="text-3xl text-[#2f3863] px-2 mx-4 border-b-4 border-[#2f3863] font-semibold">Latest News & Updates
              </h3>
              <div className=" p-4 mx-2 my-4 h-[450px] overflow-y-scroll bg-white" id="mylinks">
                {links.map((val: any, index: number) => {
                  return (
                    <div key={index} className="flex items-center gap-x-2">
                      <Link target="_blank" to={val.link} className="flex hover:underline text-blue-500 text-xl font-semibold">	&#x25C7; {val.name}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </main>


        <div className="bg-[#2f3863] px-10 py-6">
          <p className="text-center text-white text-xl">
            This Website is Designed & Developed by
          </p>
          <p className="text-center text-white text-xl mb-6">
            <span className="font-semibold">Contents Coordinator</span> - Planning and
            Development Authority, Daman
          </p>
          <p className="text-center text-white text-xl">
            <span className="font-semibold">DISCLAIMER</span> - The content is
            provided by Planning and Development Authority. PDA is responsible for
            correctness, completeness and regularly updating the contents. Daman
            e-Governance Society is not responsible for any consequences
            arising out of this.
          </p>
          <div className="w-full grid place-items-end p-4">
            <Link to={"/login/"} className="bg-green-500  font-semibold text-center text-xl py-2 px-4 text-white rounded-md">smart</Link>
          </div>
        </div>
      </div>
    </main >
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