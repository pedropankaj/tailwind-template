import type { NextPage } from "next";
import { SparklesIcon, InboxIcon } from "@heroicons/react/outline";

const Features: NextPage = () => {
    return (
        <div className="relative pt-16 lg:pb-32 pb-12 overflow-hidden" id="features">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            <div>
                                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                    <InboxIcon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Stay on top of customer support
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc
                                    sed. Ornare iaculis bibendum malesuada
                                    faucibus lacinia porttitor. Pulvinar laoreet
                                    sagittis viverra duis. In venenatis sem arcu
                                    pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">
                                        &ldquo;Cras velit quis eros eget rhoncus
                                        lacus ultrices sed diam. Sit orci risus
                                        aenean curabitur donec aliquet. Mi
                                        venenatis in euismod ut.&rdquo;
                                    </p>
                                </div>
                                <footer className="mt-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-base font-medium text-gray-700">
                                            Marcia Hill, Digital Marketing
                                            Manager
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="flex justify-center">
                            <img
                                className="rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                src="first_ss.png"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                            <div>
                                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                    <SparklesIcon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Better understand your customers
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc
                                    sed. Ornare iaculis bibendum malesuada
                                    faucibus lacinia porttitor. Pulvinar laoreet
                                    sagittis viverra duis. In venenatis sem arcu
                                    pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div className="flex justify-center">
                            <img
                                className="rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                src="sec_ss.png"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
