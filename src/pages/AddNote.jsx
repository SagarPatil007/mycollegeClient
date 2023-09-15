import React from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import { ArrowRight } from 'lucide-react'

const AddNote = () => {

  const navigate = useNavigate(); 

  const createNote = async(data) => {
    await fetch(' https://mycollegeapi.onrender.com/api/v1/addnote', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        console.log("Note created Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const  {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    createNote(data);
    console.log(data);
  };

  return (
    <section>
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      
      <h2 className='font-medium text-red-500 text-xl text-center'>Add Note</h2>
       
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {' '}
                Title{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="title"
                  name='title'
                  {...register("title", {
                    required: "title is required.",
                    minLength: {
                      value: 5,
                      message: "title should be at-least 5 characters."
                    }
                  })}
                />
                {errors.title && <p className="text-red-500 errorMsg">{errors.title.message}</p>}

              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Description{' '}
                </label>
                
              </div>
              <div className="mt-2">
                <textarea
                  className="flex h-28 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type=""
                  placeholder="add to description"
                  name='description'
                  {...register("description", {
                    required: "description is required.",
                    minLength: {
                      value: 25,
                      message: "description should be at-least 25 characters."
                    }
                  })}
                />
                {errors.description && (
                  <p className="text-red-500 errorMsg">{errors.description.message}</p>
                )}
              </div>

              <div className="mt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Image Url{' '}
                </label>
                
              </div>
              <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Thumbnail"
                  name='imageurl'
                  {...register("imageurl", {
                    required: "imageurl is required.",
                    minLength: {
                      value: 6,
                      message: "imageurl not attached"
                    }
                  })}
                />
                {errors.imageurl && (
                  <p className="text-red-500 errorMsg">{errors.imageurl.message}</p>
                )}
              
              </div>

              <div className="mt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  File Url{' '}
                </label>
                
              </div>
              <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Add Note"
                  name='url'
                  {...register("url", {
                    required: "file url is required.",
                    minLength: {
                      value: 6,
                      message: "file url not attached"
                    }
                  })}
                />
                {errors.url && (
                  <p className="text-red-500 errorMsg">{errors.url.message}</p>
                )}
              
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Get started <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  </section>
  )
}

export default AddNote


