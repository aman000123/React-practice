

import Blog from "./blog"
import Home from "./Home"
import About from "./about"
import Contact from "./contact"

import { Route, Routes, NavLink } from 'react-router-dom';
import Error from "./error";
const RouterComp = () => {


    const navs = ({ isActive }) => isActive ? "active" : "";

    return (


        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <ul className="roters">
                <li><NavLink to="/home" className={navs}>HOME</NavLink></li>
                <li><NavLink to="/contact" end className={navs}> CONTACT</NavLink></li>
                <li><NavLink to="/about" className={navs}>ABOUT</NavLink></li>
                <li><NavLink to="/blog" className={navs}>BLOGS</NavLink></li>
            </ul>

        </>
    )
}

export default RouterComp