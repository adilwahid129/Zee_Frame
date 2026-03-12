import { useState } from 'react'
import Layout from './layout'
import CustomRoutes from './routes/customRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <CustomRoutes/>
   </>
  )
}

export default App
