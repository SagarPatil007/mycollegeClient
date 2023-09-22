import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import Spinner from "../Components/Spinner";

const Notes = () => {
  const API_URL = " https://mycollegeapi.onrender.com/api/v1/getallnotes";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data.array);  
    }
    catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }


  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>

      {
        loading ? <Spinner />
          :
          <div>
            <div className='grid gap-6 gap-y-10 py-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mx-20'>
              {posts.map((post,index)=>(
                <Card key={index} imageurl={post.imageurl} title={post.title} description={post.description} url={post.url}/>
              ))}
            </div>

            <div className='flex flex-col items-center justify-center'>
              <Link to="addnote" className='bg-transparent hover:bg-netural-500 text-netural-700 font-semibold hover:text-black py-2 px-4 border border-netural-500 hover:border-transparent rounded'>Add Notes</Link>
            </div>
          </div>
      }

    </div>
  )
}

export default Notes



