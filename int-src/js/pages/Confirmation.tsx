import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import OrderConfirmation from '../components/OrderConfirmation'
import OrderDetails from '../components/OrderDetails'
import Pizza from '../components/Pizza'
import PizzaContext from '../context/PizzaContext'

const Confirmation = () => {
  const { orderConfirmed } = useContext(PizzaContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!orderConfirmed) {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <Layout page='confirmation'>
      <OrderConfirmation />
      <OrderDetails />
      <Pizza />
    </Layout>
  )
}

export default Confirmation
