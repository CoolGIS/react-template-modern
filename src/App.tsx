import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DevTools } from 'jotai-devtools'
import { Counter } from '@/components/Counter.tsx'
import { Link, Outlet } from 'react-router-dom'
import { Center, Divider } from '@styled/jsx'
import { styled } from '@styled/jsx'
import { queryClient } from '@/plugins/tanstack-query.ts'

function App() {
  return (
    <>
      <DevTools />
      <QueryClientProvider client={queryClient}>
        <Counter />
        <styled.ul p="10px" m="10px" border="1px solid #ccc" rounded="md" bg="white">
          <Center gap="10px">
            <li>
              <Link to="/home">主页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
          </Center>
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
