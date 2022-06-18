import { Stack } from '@chakra-ui/react'
import Result from 'components/atoms/Text/Result'

interface ScreenProps {
  lines: string[]
}
const Screen = ({ lines }: ScreenProps) => {
  return (
    <Stack
      w="full"
      h="full"
      direction="column-reverse"
      p="2em"
      overflowY="scroll"
    >
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
