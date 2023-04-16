import { useEffect, useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import PizzaOptions from '../components/PizzaOptions'
import Layout from '../components/Layout'
import Pizza from '../components/Pizza'
import OrderDetails from '../components/OrderDetails'

const Builder = () => {
  const { orderConfirmed, setOrderConfirmed } = useContext(PizzaContext)

  useEffect(() => {
    if (orderConfirmed) {
      setOrderConfirmed(false)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [])

  return (
    <Layout page='build'>
      <PizzaOptions />
      <Pizza />
      <OrderDetails />
    </Layout >
  )
}

export default Builder