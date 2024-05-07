import { Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'
import Home from './components/Home.jsx'
import FormSuccess from './components/FormSuccess.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/form' element={<Form />}></Route>
      <Route path='/form-success' element={<FormSuccess />}></Route>
    </Routes>
  )
}

export default App
