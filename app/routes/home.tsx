import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { Fa6RegularStarHalfStroke, Fa6SolidBars, Fa6SolidBook, Fa6SolidBookTanakh, Fa6SolidBuilding, Fa6SolidChartArea, Fa6SolidCircleQuestion, Fa6SolidCodeBranch, Fa6SolidHouse, Fa6SolidObjectUngroup, Fa6SolidPaintbrush, Fa6SolidStar, Fa6SolidUser, Fa6SolidXmark, MaterialSymbolsLogoutRounded } from "~/components/icons/icons";
import sideBarStore, { SideBarTabs } from "~/state/sidebar";

const Home: React.FC = (): JSX.Element => {
    const isMobile = sideBarStore((state) => state.isOpen);
    const changeMobile = sideBarStore((state) => state.change);
    const asideindex = sideBarStore((state) => state.currentIndex);
    const achangeindex = sideBarStore((state) => state.changeTab);
    // const user = useLoaderData().user;
    // const isAdmin = useLoaderData().isAdmin;
    const isAdmin = false;
    // const username = useLoaderData().username;
    const username = "Rajesh";

    const navigator = useNavigate();
    const init = () => {
        // if (isAdmin) {
        //   achangeindex(SideBarTabs.User);
        //   navigator("/home/user");
        // } else {
        //   if (asideindex === SideBarTabs.None) {
        //     navigator("/home");
        //   }
        // }
    };
    useEffect(() => {
        init();
    }, []);

    const logoutHandle = () => {
        navigator("/");
    };
    return (
        <>
            <section className="h-screen w-full relative">
                <div className="flex min-h-screen relative flex-nowrap w-full">
                    <div
                        className={`z-50 w-full md:w-60 shrink-0 bg-white p-2 md:flex flex-col md:relative fixed top-0 left-0 min-h-screen md:min-h-full md:h-auto shadow-xl ${isMobile ? "grid place-items-center" : "hidden"
                            }`}
                    >
                        <div className="md:flex flex-col md:h-full">
                            <div className="text-white text-center mb-4">
                                <img
                                    src="/images/logo.jpg"
                                    alt="logo"
                                    className="w-80 md:w-40 inline-block"
                                />
                            </div>
                            <div className="flex flex-col grow">

                                <Link
                                    to={"/home/"}
                                    onClick={() => {
                                        achangeindex(SideBarTabs.Dashborad);
                                        changeMobile(false);
                                    }}
                                >
                                    <SidebarTab
                                        icon={Fa6SolidObjectUngroup}
                                        title="Dashboard"
                                        active={asideindex === SideBarTabs.Dashborad}
                                    ></SidebarTab>
                                </Link>
                                {isAdmin ? (
                                    <>
                                        <Link
                                            to={"/home/user/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.User);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidUser}
                                                title="User"
                                                active={asideindex === SideBarTabs.User}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/company/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.Company);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidBuilding}
                                                title="Company"
                                                active={asideindex === SideBarTabs.Company}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/project/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.Project);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidBook}
                                                title="Project"
                                                active={asideindex === SideBarTabs.Project}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/principle/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.Principle);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidStar}
                                                title="Principle"
                                                active={asideindex === SideBarTabs.Principle}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/license/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.License);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidPaintbrush}
                                                title="License"
                                                active={asideindex === SideBarTabs.License}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/licenseslave/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.LicenseSlave);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6RegularStarHalfStroke}
                                                title="License Purchased"
                                                active={asideindex === SideBarTabs.LicenseSlave}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/compliance/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.Compliance);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidObjectUngroup}
                                                title="Compliance"
                                                active={asideindex === SideBarTabs.Compliance}
                                            ></SidebarTab>
                                        </Link>
                                        <Link
                                            to={"/home/questions/"}
                                            onClick={() => {
                                                achangeindex(SideBarTabs.Questions);
                                                changeMobile(false);
                                            }}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidCircleQuestion}
                                                title="Questions"
                                                active={asideindex === SideBarTabs.Questions}
                                            ></SidebarTab>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to={"/home/services"}
                                            onClick={() => achangeindex(SideBarTabs.Services)}
                                        >
                                            <SidebarTab
                                                icon={Fa6SolidCodeBranch}
                                                title="Services"
                                                active={asideindex === SideBarTabs.Services}
                                            ></SidebarTab>
                                        </Link>
                                    </>
                                )}

                                {/* <div className="grow"></div> */}
                                <button onClick={logoutHandle}>
                                    <SidebarTab
                                        icon={MaterialSymbolsLogoutRounded}
                                        title="LOGOUT"
                                        active={false}
                                    ></SidebarTab>
                                </button>
                                <div
                                    onClick={() => changeMobile(false)}
                                    className={`md:hidden flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-900 cursor-pointer`}
                                >
                                    <Fa6SolidXmark></Fa6SolidXmark>
                                    <p className="text-xl">CLOSE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col grow min-h-screen relative bg-[#eeeeee] ">
                        <div className="pb-14 px-4 mt-4">
                            <TopNavBar
                                name={username}
                                pic={"/images/logo.jpg"}
                            ></TopNavBar>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;


type SideBarTabProps = {
    title: string;
    icon: React.FC;
    active: boolean;
};
const SidebarTab = (props: SideBarTabProps) => {
    return (
        <div
            className={`w-60 md:w-auto font-semibold flex gap-2 items-center my-1 b  py-1 px-2 rounded-md text-xl cursor-pointer ${props.active
                ? "bg-green-500 text-white"
                : "text-gray-800 hover:text-white hover:bg-indigo-500"
                }`}
        >
            <props.icon></props.icon>
            <p>{props.title}</p>
        </div>
    );
};

type TopNavBarProps = {
    name: string;
    pic: string;
};

const TopNavBar = (props: TopNavBarProps) => {
    const isMobile = sideBarStore((state) => state.isOpen);
    const changeMobile = sideBarStore((state) => state.change);
    return (
        <div className="bg-white rounded-md  text-xl w-full text-center text-white py-2 font-medium flex px-4 gap-4 items-center">
            <div className="px md:hidden text-gray-900 text-2xl cursor-pointer" onClick={() => changeMobile(!isMobile)}>
                {/* on change will be here */}
                <Fa6SolidBars></Fa6SolidBars>
            </div>
            <div className="px hidden md:block text-gray-900 text-2xl cursor-pointer">
                <Fa6SolidHouse></Fa6SolidHouse>
            </div>
            <div className="text-center text-gray-900 text-2xl hidden md:block">Home</div>
            <div className="grow"></div>
            <p className="text-gray-800">{new Date().toDateString()}</p>
            <div className="w-[2px] bg-gray-800 h-10"></div>

            <div className="flex gap-2 relative group items-center">
                <div className="cursor-pointer">
                    <img
                        src={props.pic}
                        alt="avatar"
                        className="w-10 h-10 rounded-md object-cover object-center"
                    />
                </div>
                <div className="text-gray-900 font-medium text-2xl text-center cursor-pointer">
                    {props.name}
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="absolute bottom-0 w-full h-14 bg-white font-semibold text-center grid place-items-center text-gray-800 text-xl shadow-xl">
            &copy; {year} PLANNING & DEVELOPMENT AUTHORITY - All rights reserved.
        </div>
    );
};
