
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PizzaProvider } from '../context/PizzaContext'
import Builder from './Builder'
import Confirmation from './Confirmation'
import Header from '../components/Header'

const PizzaBuilder = () => {
  return (
    <>
      <Header />
      <main>
        <PizzaProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Builder />}></Route>
              <Route path='*' element={<Builder />}></Route>
              <Route path='/confirmation' element={<Confirmation />}></Route>
            </Routes>
          </BrowserRouter>
        </PizzaProvider>
      </main>
    </>
  )
}

export default PizzaBuilder