import React, { useEffect, useState } from 'react'
import Spinner from "../Components/Spinner"
import { Link, useParams } from 'react-router-dom';

const ViewBlog = () => {

  const params = useParams();

  console.log(params.blogid);
 
  const API_URL = ` https://mycollegeapi.onrender.com/api/v1/viewblog/${params.blogid}`;
  const [blog, setblog] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchBlog() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setblog(data.array[0]);
      console.log(data.array[0]);
    }
    catch (error) {
      console.log(error);
      console.log("Error aagya ji");
      setblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  }, [])


  return (
    <div>

      {
        loading ? <Spinner />
          :
          <div className="relative">

            
                
              <div className='flex flex-col items-end justify-center mr-14 px-5'>
                <Link to="/editblog" className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Edit Blog</Link>
              </div>
          

            <div className="max-w-3xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
              <a href="#" className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inlineblock hover:text-indigo-600 transition duration-500 ease-in-out inlineblock mb-2">{blog.title}</a>

             
                <img className="w-full my-4 px-5" src={blog.imageurl} alt="Sunset in the mountains" />

              <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto px-5">
                {blog.description}.
              </p>
              <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
                <span className="mr-3 flex flex-row items-center">

                  <span className="ml-1">{blog.createdAt}</span></span>
                <a href="#" className="flex flex-row items-center hover:text-indigo-600  mr-3">

                  <span className="ml-1">{blog.user}</span></a>
              </div>
              <hr />

            </div>

            <div className="max-w-3xl mx-auto px-5">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
      }

    </div>

  )

}

export default ViewBlog