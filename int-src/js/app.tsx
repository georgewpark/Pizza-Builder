import { createRoot } from 'react-dom/client'
import PizzaBuilder from './pages/PizzaBuilder'

const container = document.querySelector('#pizza-builder')
const root = container && createRoot(container)

root && root.render(<PizzaBuilder />)
