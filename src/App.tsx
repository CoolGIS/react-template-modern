import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DevTools } from 'jotai-devtools'
import { Counter } from '@/components/Counter.tsx'
import { Link, Outlet } from 'react-router-dom'
import { Divider } from '@styled/jsx'
import { styled } from '@styled/jsx'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <DevTools />
      <QueryClientProvider client={queryClient}>
        <Counter />
        <styled.ul
          display="flex"
          gap="10px"
          justifyContent="center"
          alignItems="center"
          p="10px"
          m="10px"
          border="1px solid #ccc"
          rounded="md"
          bg="white"
        >
          <li>
            <Link to={'/home'}>主页</Link>
          </li>
          <li>
            <Link to={'/about'}>关于</Link>
          </li>
        </styled.ul>
        <Divider />
        <div>
          <Outlet />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
