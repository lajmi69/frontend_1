import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Listarticle from './components/article/Listarticle'
import Insertarticle from './components/article/Insertarticle'
import Editarticle from './components/article/Editarticle'

import Viewarticle from './components/article/Viewarticle'
import Listcategorie from './components/categories/Listcategorie'
import Insertcategorie from './components/categories/Insertcategorie'
import Editcategorie from './components/categories/Editcategorie'
import Viewcategorie from './components/categories/Viewcategorie'
import Listscategorie from './components/scategories/Listscategorie'
import Insertscategorie from './components/scategories/Insertscategorie'
import Viewscategorie from './components/scategories/Viewscategorie'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
     <Menu/>
      <Routes>
      
        <Route path="/articles" element={<Listarticle />} />
        <Route path="/articles/add" element={<Insertarticle />} />
        <Route path="/articles/edit/:id" element={<Editarticle/>} />
        <Route path="/articles/show/:id" element={<Viewarticle/>} />

        <Route path="/categories" element={<Listcategorie />} />
        <Route path="/categories/add" element={<Insertcategorie />} />
        <Route path="/categories/edit/:id" element={<Editcategorie/>} />
        <Route path="/categories/show/:id" element={<Viewcategorie/>} />
        
        <Route path="/scategories" element={<Listscategorie />} />
        <Route path="/scategories/add" element={<Insertscategorie />} />
        <Route path="/scategories/edit/:id" element={<Editcategorie/>} />
        <Route path="/scategories/show/:id" element={<Viewscategorie/>} />

      </Routes>
     </Router>
     
    </>
  )
}

export default App
