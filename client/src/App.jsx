import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Layout from "./pages/admin/Layout"
import Dashboard from "./pages/admin/Dashboard"
import Addblog from "./pages/admin/Addblog"
import Listblog from "./pages/admin/Listblog"
import Comment from "./pages/admin/Comment"

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/admin" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<Addblog/>}/>
         <Route path='listBlog' element={<Listblog/>}/>
          <Route path='comments' element={<Comment/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
