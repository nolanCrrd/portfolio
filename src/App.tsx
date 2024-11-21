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
                <Route path=`${import.meta.env.BASE_URL} element={<Home/>}/>
                <Route path=`${import.meta.env.BASE_URL}projects` element={<Projects/>}/>
                <Route path=`${import.meta.env.BASE_URL}contact` element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;