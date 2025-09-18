import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Dashboard/>}> </Route>
      {/* <Route path="/form" element = {<Form/>}> </Route>*/}
      <Route path="/order" element = {<Order/>}> </Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
