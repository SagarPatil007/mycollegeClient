import CTA from '../Components/CTA'
import Feature from '../Components/Features'
import FAQ from '../Components/Faq'
import img3 from "../assets/img3.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <CTA />
      <div className='mt-36'>
        <div className="text-center font-mono text-gray-500">
          <p>FEATURES</p>
        </div>
        <div className="">
          <h2 className='text-4xl text-center font-serif mt-6'>Explore different subjects</h2>
        </div>
        <div className="mx-2">
          <p className='mx-8  text-md mt-3 font-mono text-center mb-44'>As you embark on your technical career, it{`'`}s crucial to have a solid foundation in various subjects. Our platform provides comprehensive notes and roadmaps to guide you through each subject.</p>
        </div>
        <div className="w-52 h-20 lg:w-[820px] lg:h-[440px]  bg-[#f2e2cd] mx-auto mt-6 lg:mt-12 rounded-md relative ">
          <div className="">
            <img src={img3} alt="" className='absolute bottom-16 left-8' />
          </div>
        </div>
      </div>

      <div className=''>
        <h2 className='text-4xl text-center font-mono mt-24 font-bold'> Take the first step towards success</h2>
        <p className='text-md text-center font-mono mt-4'>Sign up for a free account today! No strings attached.</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="signup"

          className=" text-center rounded-xl border border-[#d78317] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d78317] bg-[#d78317] w-64"
        >
          Signup For Free
        </Link>
      </div>

    

      <Feature />
      <FAQ />
    </>
  )
}

export default Home
