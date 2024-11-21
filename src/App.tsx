import NavBar from "./components/navBar/navBar.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import './style/style.scss';
import Contact from "./pages/Contact.tsx";
import Cursor from "./components/cursor/cursor.tsx";

function App() {
    return (
        <Router>
            <NavBar/>
            <Cursor/>
            <Routes>
                <Route path="/portfolio/" element={<Home/>}/>
                <Route path="/portfolio/projects" element={<Projects/>}/>
                <Route path="/portfolio/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;