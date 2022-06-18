import { Text } from '@chakra-ui/react'

interface ResultProps {
  text: string
  variant?: 'past' | 'current'
}
const Result = ({ text, variant }: ResultProps): JSX.Element => {
  return (
    <Text as="pre" colorScheme={variant === 'past' ? 'gray' : undefined}>
      {text}
    </Text>
  )
}

export default Result
