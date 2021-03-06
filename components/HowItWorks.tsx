import type { NextPage } from "next";
import {
    CloudUploadIcon,
    LockClosedIcon,
    RefreshIcon,
} from "@heroicons/react/outline";

const features = [
    {
        name: "Push to Deploy",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
        //   icon: CloudUploadIcon,
        
        Image: "/pc-info.svg",
    },
    {
        name: "SSL Certificates",
        description:
            "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
        Image: "/data-type.svg",
    },
    {
        name: "Simple Queues",
        description:
            "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
        Image: "/cards.svg",
    },
];

const HowItWorks: NextPage = () => {
    return (
        <div className="relative bg-white sm:py-24 lg:py-32" id="howitworks">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    How It Works
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean
                    nulla in. Accumsan in quis quis nunc, ullamcorper
                    malesuada. Eleifend condimentum id viverra nulla.
                </p>
                <div className="mt-12 lg:mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="mt-6">
                                <div className="flow-root rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg">
                                                {/* <feature.icon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                /> */}
                                                <img
                                                className="w-full"
                                                src={feature.Image}
                                                alt=""
                                            />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                                            {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

