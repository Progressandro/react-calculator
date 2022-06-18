import { Stack, Text } from '@chakra-ui/react'
import Calculator from 'components/organisms/Calculator'
import DefaultLayout from './DefaultLayout'

interface CalculatorViewProps {
  title: string
  subtitle: string
}
const CalculatorView = ({ title, subtitle }: CalculatorViewProps) => {
  return (
    <DefaultLayout>
      <Stack spacing={3} align="center">
        <Text fontSize="6xl">{title}</Text>
        <Text fontSize="xs">{subtitle}</Text>
        <Calculator />
      </Stack>
    </DefaultLayout>
  )
}

export default CalculatorView
