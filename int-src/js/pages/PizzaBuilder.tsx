import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import { PizzaProvider } from '../context/PizzaContext'
import Builder from './Builder'
import Confirmation from './Confirmation'

const PizzaBuilder = () => {
  return (
    <>
      <Header />
      <main>
        <PizzaProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Builder />} />
              <Route path='*' element={<Builder />} />
              <Route path='/confirmation' element={<Confirmation />} />
            </Routes>
          </BrowserRouter>
        </PizzaProvider>
      </main>
    </>
  )
}

export default PizzaBuilder
