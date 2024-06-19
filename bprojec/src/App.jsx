import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'

export default function App() {
  return (
   <BrowserRouter > 
   <ScrollToTop />
   <Header/>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/post/:postSlug" element={<PostPage />} />
    <Route element={<PrivateRoute/>} >
    <Route path="/dashboard" element={<Dashboard />} />      
      </Route>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/search" element={<Search />} />
    <Route path="/create-post" element={<CreatePost />} /> 
    <Route path="/update-post/:postId" element={<UpdatePost />} />      
    <Route element={<OnlyAdminPrivateRoute/>} >
    
      </Route>
  </Routes>
  <Footer />
  </BrowserRouter>
  // <div>APPp</div>
  )
}
