import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ModalProvider } from './context/modalContext'
const NotImplemented = () => {
  return <>
    <Link to="/books">Ir a libros</Link>
    <h1>Esta página no está lista</h1>
  </>
}
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<NotImplemented />}></Route>
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <Router>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Router>
  )
}