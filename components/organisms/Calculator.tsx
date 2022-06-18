import { Flex, Grid } from '@chakra-ui/react'
import Keyboard from 'components/molecules/Keyboard'
import Screen from 'components/molecules/Screen'
import { KeymapEntry, ValidOperations } from 'constants/keymap'
import { useCallback, useState } from 'react'

const Calculator = () => {
  const [results, setResults] = useState<string[]>([])
  const [current, setCurrent] = useState<string>('')

  const handleEqual = useCallback(() => {
    setResults([current, ...results])
  }, [results, current])

  const handleKeyPress = useCallback(
    ({ operation, value }: KeymapEntry) => {
      if (operation === ValidOperations.NUMBER && current.length >= 8) return

      const nonZeroCurrent = current === '0' ? '' : current
      switch (operation) {
        case ValidOperations.NUMBER:
          setCurrent(nonZeroCurrent + value)
          break
        case ValidOperations.ERASE:
          setCurrent(current.slice(0, -1) || '0')
          break
        case ValidOperations.EQUAL:
          handleEqual()
          break
        default:
          console.error('Undefined operation', operation)
      }
    },
    [current, handleEqual]
  )

  return (
    <Flex w="full" h="full" justify="center">
      <Grid
        w={400}
        h={600}
        backgroundColor="black"
        templateColumns="1fr"
        templateRows="1fr 6fr"
        p={4}
        borderRadius={8}
        boxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
      >
        <Screen text={current} />
        <Keyboard onKeyPress={handleKeyPress} />
      </Grid>
    </Flex>
  )
}

export default Calculator
