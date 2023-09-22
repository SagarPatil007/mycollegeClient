import React, { useEffect, useState } from 'react'
import Spinner from "../Components/Spinner";
import { Link } from 'react-router-dom'

const Blog = () => {

  const API_URL = ` https://mycollegeapi.onrender.com/api/v1/viewblog`;
  const [blogs, setblog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search,setSearch] = useState('');

  async function fetchAllBlog() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setblog(data.array);
      console.log(data.array);
    }
    catch (error) {
      console.log(error);
      console.log("Error aagya ji");
      setblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAllBlog();
  }, [])


  return (
    <div className="mx-auto max-w-7xl px-2">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">

        <div className="flex justify-end -mt-14">

          <Link to="addblog"
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add Blog
          </Link>

        </div>
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Resources and insights
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
          neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
        </p>
        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            name='search'
            placeholder="Search Topics"
            onChange={(e)=> setSearch(e.target.value)}
          ></input>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
        <div className="flex w-full items-end border-b border-gray-300">
          {['Design', 'Product', 'Software Engineering', 'Customer Success'].map(
            (filter, index) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                key={filter}
              >
                {filter}
              </div>
            )
          )}
        </div>
      </div>


      {/* posts */}
      {
        loading ? <div className='my-32'><Spinner /> </div> :
         <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
         {blogs.filter((post) => {
           return search.toLowerCase() === ""
           ? post :
           post.title.toLowerCase().includes(search)
         }
            ).map((post) => (
           <div key={post.title} className="border">
               <Link to={`/viewblog/${post._id}`}>
               <img src={post.imageurl} className="aspect-video w-full rounded-md" alt="" />
               <div className="min-h-min p-3">
                 <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                   #Technology
                 </p>
                 <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                 <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                   {post.description.split(" ").slice(0,40).join(" ") + "..."}
                 </p>
                 <div className="mt-4 flex space-x-3 ">
                   <img className="h-full w-10 rounded-lg" src={post.avatar} />
                   <div>
                     <p className="text-sm font-semibold leading-tight text-gray-900">
                       {post.user}
                     </p>
                     <p className="text-sm leading-tight text-gray-600">{ post.createdAt}</p>
                   </div>
                 </div>
               </div>
           </Link>  
             </div>
 
         ))}
       </div>
      }
     
      <div className="w-full border-t border-gray-300">
        <div className="mt-2 flex items-center justify-between">
          <div className="hidden md:block">
            <p>
              showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
            </p>
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
