import React, { useEffect, useState } from 'react'
import Spinner from "../Components/Spinner";

const Account = () => {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    const id = localStorage.getItem('id');

    const API_URL = ` https://mycollegeapi.onrender.com/api/v1/userinfo/${id}`;
  
  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setdata(data.array[0]);
      console.log(data.array[0]);
    }
    catch (error) {
      console.log(error);
      console.log("Error aagya ji");
      setdata([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
    

    return (
        
        <div className='flex justify-center'>
            {
                loading ?  <Spinner/> 
                :
                <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details and informations about user.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                             {data.name}
                            </dd>
                        </div>
                        
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {data.email}
                            </dd>
                        </div>
                       
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                About
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                onClick={logout}>
                                Logout
                            </button>
                        </div>
                    </dl>
                </div>
            </div>
            }
            
        </div>
    )
}

export default Account