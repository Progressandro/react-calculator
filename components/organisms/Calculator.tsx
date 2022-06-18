import { Flex, Grid } from '@chakra-ui/react'
import Keyboard from 'components/molecules/Keyboard'
import Screen from 'components/molecules/Screen'
import { KeymapEntry } from 'constants/keymap'
import { useCallback, useState } from 'react'

const Calculator = () => {
  const [results, setResults] = useState([])
  const [current, setCurrent] = useState('')

  const handleKeyPress = useCallback(
    ({ operation, value }: KeymapEntry) => {
      switch (operation) {
        case 'number':
          setCurrent(current + value)
          break
        default:
          console.error('Undefined operation', operation)
      }
    },
    [current]
  )
  return (
    <Flex w="full" h="full" justify="center">
      <Grid
        w={400}
        h={600}
        backgroundColor="black"
        templateColumns="1fr"
        templateRows="1fr 2fr"
        p={4}
        borderRadius={8}
        boxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
      >
        <Screen lines={[...results, current]} />
        <Keyboard onKeyPress={handleKeyPress} />
      </Grid>
    </Flex>
  )
}

export default Calculator
