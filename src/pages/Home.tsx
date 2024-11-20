import { Center } from '@styled/jsx'
import { useLifecycles } from 'react-use'

export function Home() {
  // react-use示例
  useLifecycles(
    () => {
      console.log('Home mounted')
    },
    () => {
      console.log('Home unmounted')
    }
  )

  return (
    <Center h="50vh" fontSize="32px" fontWeight="bold" color="blue.500">
      主页
    </Center>
  )
}
