import { Stack } from '@chakra-ui/react'
import Result from 'components/atoms/Result'

interface ScreenProps {
  lines: string[]
}
const Screen = ({ lines }: ScreenProps) => {
  return (
    <Stack w="full" h="full" direction="column-reverse">
      {lines.map((line, index) => (
        <Result
          key={index}
          variant={index === lines.length ? 'current' : 'past'}
          text={line}
        />
      ))}
    </Stack>
  )
}

export default Screen
