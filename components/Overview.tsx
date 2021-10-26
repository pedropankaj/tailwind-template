import type { NextPage } from "next";

const Overview: NextPage = () => {
    return (
        <div
            className="lg:pt-5 bg-white-900 sm:pt-16 lg:pt-4 pb-44 lg:overflow-hidden"
            id="overview"
        >
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:pt-32 lg:pr-10">
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">A better way to</span>
                                <span className="block text-indigo-400">
                                    ship web apps
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-700 sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui Lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                            <div className="sm:grid grid-cols-2 gap-4 mt-14">
                                <div className="flex justify-center lg:justify-start ">
                                    <a href="https://play.google.com/store/apps/details?id=com.facebook.katana" target="_blank" className="rounded-lg bg-black flex h-14 lg:h-16 py-1 px-2 hover:opacity-90 lg:px-8 justify-center w-full sm:w-auto">
                                    <img
                                        className="rounded-xl shadow-xl py-2"
                                        src="/android-logo.png"
                                        alt=""
                                    />
                                    <div className="pl-1.5 py-1">
                                    <p  className="text-sm text-white h-3.5">
                                            GET IT ON
                                        </p>
                                        <p className="font-bold lg:text-2xl text-white">
                                            Google Play
                                        </p>
                                    </div>
                                    </a>
                                </div>
                                <div className="flex justify-center lg:justify-end mt-4 sm:mt-0">
                               
                                    <a href="https://apps.apple.com/us/app/facebook/id284882215" target="_blank" className="rounded-lg bg-black flex h-14 lg:h-16 py-1 px-2 hover:opacity-90 lg:px-8 justify-center w-full sm:w-auto">
                                    <img
                                        className="rounded-xl shadow-xl py-2"
                                        src="/apple-logo.png"
                                        alt=""
                                    />
                                    <div className="pl-2 py-1">
                                    <p  className="text-sm text-white h-3.5">
                                            Available on the
                                        </p>
                                        <p className="font-bold lg:text-2xl text-white">
                                            App Store
                                        </p>
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-12"></div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <img
                                    className="w-full lg:absolute lg:-bottom-32 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-3xl shadow-xl"
                                    src="/third_ss.png"
                                    alt=""
                                />
                            </div>
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <img
                                    className=" lg:absolute lg:-top-1 lg:h-full lg:right-0 rounded-3xl shadow-xl"
                                    src="/fourth_ss.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
