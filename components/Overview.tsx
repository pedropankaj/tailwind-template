import type { NextPage } from "next";

const Overview: NextPage = () => {
    return (
        <div
            className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 pb-44 lg:overflow-hidden"
            id="overview"
        >
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">A better way to</span>
                                <span className="block text-indigo-400">
                                    ship web apps
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui Lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-10">
                                <div className="flex justify-start">
                                    <img
                                        className="w-10/12 rounded-xl"
                                        src="/android_bg_white.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex justify-left">
                                    <img
                                        className="w-10/12 rounded-xl"
                                        src="/apple_bg_white.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-12"></div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <img
                                    className="w-full lg:absolute lg:-bottom-1/4 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-3xl"
                                    src="/third_ss.png"
                                    alt=""
                                />
                            </div>
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <img
                                    className=" lg:absolute lg:h-full lg:right-0 rounded-3xl"
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