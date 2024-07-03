import { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import OrderDetails from '../components/OrderDetails'
import Pizza from '../components/Pizza'
import PizzaOptions from '../components/PizzaOptions'
import PizzaContext from '../context/PizzaContext'

const Builder = () => {
  const { orderConfirmed, setOrderConfirmed } = useContext(PizzaContext)

  useEffect(() => {
    if (orderConfirmed) {
      setOrderConfirmed(false)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <Layout page='build'>
      <PizzaOptions />
      <Pizza />
      <OrderDetails />
    </Layout>
  )
}

export default Builder
