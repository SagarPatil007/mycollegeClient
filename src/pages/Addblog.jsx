import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from "../Components/Spinner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from "react-hot-toast";

const Addblog = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const createBlog = async (data) => {

        const res = await fetch('https://mycollegeapi.onrender.com/api/v1/addblog', {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        
        .then(() => {
            setLoading(false);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        })

        if(res.success == false){
            
        }
    }

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ]

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '–1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    }

    const handleChange = (value) => {
        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        data.append("file", file);
        data.append("content", content);
        data.append("user", localStorage.getItem("name"));
        data.append("userid", localStorage.getItem("id"))

        setLoading(true);
        createBlog(data);
    };

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(token == null){
        toast.error("Please Sign In First...");
        navigate('/signin');
        }
    },[])

    return (
        <div>
            {loading ? <Spinner /> : <div></div>}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit} >
                                <div className='flex justify-center'>
                                    <h1 className='font-bold text-2xl mb-3 italic text-red-500'>Add Your Blog</h1>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                    <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" required onChange={(e) => setTitle(e.target.value)} />
                                </div>

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Description<span className="text-red-500">*</span></label><br />
                                    <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Image<span className="text-red-500">*</span></label><br />
                                    <input type="file" className="border-2 border-gray-300 p-2 w-full" name="file" id="description" placeholder="Image Thumbnail" onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Content<span className="text-red-500">*</span></label><br />


                                    <ReactQuill
                                        value={content}
                                        onChange={handleChange}
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Write something..."
                                    />
                                </div>

                                <div className="flex p-1">
                                    <button role="      " className="p-3 bg-blue-500 mt-7 text-white hover:bg-blue-400" required>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addblog