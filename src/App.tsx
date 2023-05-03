import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
const NotImplemented = () => {
  return <>
    <Link to="/books">Ir a libros</Link>
    <h1>Esta página no está lista</h1>
  </>
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotImplemented />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
