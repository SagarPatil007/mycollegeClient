import { Link } from "react-router-dom"
import img1 from "../assets/img1.png"

const CTA = () => {
    return (
        <>
            {/* cta section */}
            < div className="relative isolate z-8 bg-[#f2e2cd] h-screen px-6 lg:px-8 -mt-5 border-none py-16" >
                <div className="relative max-w-md mx-64 py-24">
                    <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">

                    </div>
                    <div className="flex ">
                        <div className="text-center">
                            <h1 className="sm:text-6xl text-4xl font-bold tracking-tight text-gray-900 ">
                                Get started on your technical journey
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Simple and intuitive design for easy learning.
                            </p>
                            <div className="mt-10 ">
                                <Link to="/signin"
                                
                                    type="button"
                                    className="rounded-xl border border-[#d78317] px-3 py-2 text-sm  justify-centerfont-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d78317] bg-[#d78317] w-64"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className=" relative">
                            <div className=" absolute w-[470px] h-[266px] bg-[#f0f0f0] left-9  rounded-md">
                                <img src={img1} alt="" className="aspect-4/3  object-fill  left-12 -bottom-8 absolute"/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA