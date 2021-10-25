import type { NextPage } from "next";

const CostCenter: NextPage = () => {
    return (
        <div className="rounded-xl lg:z-10 lg:relative">
            {/* bg-gradient-to-r from-teal-500 to-cyan-600 */}
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8 bg-gray-100 rounded-xl lg:my-16 mx-4 lg:mx-auto mb-6">
                <div className="mt-6 lg:m-0 lg:col-span-2 lg:pl-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 py-8 lg:max-w-none">
                        <blockquote>
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-black">
                                    Cost Center to Profit Center
                                </h2>
                                <p className="mt-6 text-lg text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed urna nulla vitae
                                    laoreet augue. Amet feugiat est integer
                                    dolor auctor adipiscing nunc urna, sit.
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <div className="flex lg:py-12 lg:pr-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                            <img
                                className="object-cover lg:h-full lg:w-full"
                                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostCenter;
