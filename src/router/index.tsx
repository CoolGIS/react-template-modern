import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import { Error } from '@/pages/Error.tsx'
import { Home } from '@/pages/Home.tsx'
import { About } from '@/pages/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

export default router
