import { Center, styled } from '@styled/jsx'
import { useAtom } from 'jotai'
import { countAtom } from '@/stores/counter.ts'

export function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <Center h="30vh">
      <styled.button
        w="120px"
        h="40px"
        bgColor="blue.500"
        rounded="full"
        cursor="pointer"
        color="#fff"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </styled.button>
    </Center>
  )
}
