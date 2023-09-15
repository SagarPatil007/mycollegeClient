import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"

import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Roadmap from "./pages/Roadmap"
import Signin from "./Components/SignIn"
import Signup from "./Components/SignUp"
import Footer from "./Components/Footer"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import AddNote from "./pages/AddNote"
import Addblog from "./pages/Addblog"
import Account from "./pages/Account"
import ViewBlog from "./pages/ViewBlog"
import EditBlog from "./pages/EditBlog"
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="notes" element={<Notes/>}></Route>
      <Route path="roadmap" element={<Roadmap/>}></Route>
      <Route path="signin" element={<Signin/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="blog" element={<Blog/>}></Route>
      <Route path="blog/addblog" element={<Addblog/>}></Route>
      <Route path="notes/addnote" element={<AddNote/>}></Route>
      <Route path="account" element={<Account/>}></Route>
      <Route path="/viewblog" element={<ViewBlog/>} />
      <Route path="/viewblog/:blogid" element={<ViewBlog/>} />
      <Route path="/editblog" element={<EditBlog/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
