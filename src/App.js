import {Routes, Route} from 'react-router-dom' //this file path is from node_modules
import './App.css';
import Home from "./Components/Home"
import Layout from "./Components/Layout"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Portfolio from "./Components/Portfolio"
import Dashboard from './Components/Dashboard'
import NotFound404 from './Components/NotFound404'


function App() {
  return (
    <div className="App bg-slate-800 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
