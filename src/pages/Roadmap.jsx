import React, { useEffect ,useState } from 'react'
import Spinner from "../Components/Spinner";


const Roadmap = () => {

  const API_URL = " https://mycollegeapi.onrender.com/api/v1/getroadmap";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data.array);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }


  useEffect( () => {
    fetchProductData();
  },[])

  return (

    <div>
      {
          loading ? <Spinner />  :
          <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 mx-20">
            {posts.map((post,index) => (
              <a key={index} href={post.url} target='_blank'>
                <div key={post.title} className="border  hover:shadow-lg dark:hover:shadow-black/30 transition duration-300 ease-in-out  hover:scale-105 mx-1">
                  <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #{post.category}
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-4 w-full text-sm leading-normal text-gray-600 text-justify">
                      {post.description.split(" ").slice(0,22).join(" ") + "..."}
                    </p>
                    <div className="mt-4 flex space-x-3 ">
                      <div>
                        <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        }
    </div>
  )
}

export default Roadmap