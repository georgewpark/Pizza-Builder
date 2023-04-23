import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PizzaContext from '../context/PizzaContext'
import Layout from '../components/Layout'
import Pizza from '../components/Pizza'
import OrderDetails from '../components/OrderDetails'
import OrderConfirmation from '../components/OrderConfirmation'

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
