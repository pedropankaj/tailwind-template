import type { NextPage } from "next";
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
    SparklesIcon,
    InboxIcon,
    ChevronDownIcon
} from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";


const Overview: NextPage = () => {
    return (
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 pb-44 lg:overflow-hidden" id="overview"> 
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            {/* <a
              href="#"
              className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            >
              <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                We're hiring
              </span>
              <span className="ml-4 text-sm">
                Visit our careers page
              </span>
              <ChevronRightIcon
                className="ml-2 w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </a> */}
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">
                                    A better way to
                                </span>
                                <span className="block text-indigo-400">
                                    ship web apps
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non
                                deserunt sunt. Qui irure qui Lorem
                                cupidatat commodo. Elit sunt amet fugiat
                                veniam occaecat fugiat.
                            </p>
                            <div class="grid grid-cols-2 gap-4 mt-10">
                                <div class="flex justify-start">
                                    <img
                                        className="w-10/12"
                                        src="/google-store.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flex justify-left">
                                    <img
                                        className="w-10/12"
                                        src="/apple-final.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-12">
                                {/* <img
              className="lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-none"
              src="./png-clipart-app-store-iphone-apple-mobile-app-iphone-electronics-text.png"
              alt=""
            />
            <img
              className="lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-none"
              src="./en_badge_web_generic.png"
              alt=""
            /> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div class="grid grid-cols-2 gap-4 mt-10">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                <img
                                    className="w-full lg:absolute lg:-bottom-1/4 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="/sc_dummy2.png"
                                    alt=""
                                />
                            </div>
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <img
                                    className=" lg:absolute lg:h-full lg:right-0"
                                    src="/sc_dummy.png"
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