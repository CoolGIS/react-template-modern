import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import { Home } from '@/pages/Home.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
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
          async lazy() {
            const { About } = await import('@/pages/About.tsx')
            return { Component: About }
          }
        }
      ]
    },
    {
      path: '*',
      async lazy() {
        const { NotFound } = await import('@/pages/NotFound.tsx')
        return { Component: NotFound }
      }
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default router
