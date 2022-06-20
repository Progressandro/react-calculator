import { Flex, Grid } from '@chakra-ui/react'
import Keyboard from 'components/molecules/Keyboard'
import Screen from 'components/molecules/Screen'
import { KeymapEntry, ValidOperations } from 'constants/keymap'
import { useCallback, useState } from 'react'

const Calculator = () => {
  const [current, setCurrent] = useState<string>('')
  const [acum, setAcum] = useState<number>(0)
  const [lastOperator, setLastOperator] = useState<ValidOperations | null>(null)

  const handleOperation = useCallback(
    (operation: ValidOperations | null, updateCurrent = false) => {
      if (acum === 0 && !lastOperator) {
        setAcum(parseFloat(current))
        setCurrent('')
        setLastOperator(operation === ValidOperations.EQUAL ? null : operation)
        return
      }
      let newResult
      switch (operation) {
        case ValidOperations.ADD:
          newResult = acum + parseFloat(current)
          break
        case ValidOperations.SUBTRACT:
          newResult = acum - parseFloat(current)
          break
        case ValidOperations.MULTIPLY:
          newResult = acum * parseFloat(current)
          break
        case ValidOperations.DIVIDE:
          newResult = acum / parseFloat(current)
          break
        default:
          console.error('Undefined operation', operation)
      }
      if (newResult && lastOperator !== ValidOperations.EQUAL) {
        setAcum(newResult)
      }
      setLastOperator(operation === ValidOperations.EQUAL ? null : operation)
      if (updateCurrent && newResult) {
        setCurrent(newResult?.toString())
        setLastOperator(null)
      } else {
        setCurrent('')
      }
    },
    [acum, current, lastOperator]
  )

  const handleEqual = useCallback(() => {
    if (lastOperator && lastOperator !== ValidOperations.EQUAL) {
      const aux = lastOperator
      handleOperation(aux, true)
      setLastOperator(ValidOperations.EQUAL)
    }
  }, [lastOperator, handleOperation])

  const handleReset = useCallback(() => {
    setCurrent('')
    setAcum(0)
    setLastOperator(null)
  }, [])

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
        case ValidOperations.ADD:
        case ValidOperations.SUBTRACT:
        case ValidOperations.MULTIPLY:
        case ValidOperations.DIVIDE:
          handleOperation(operation)
          break
        case ValidOperations.EQUAL:
          handleEqual()
          break
        case ValidOperations.RESET:
          handleReset()
          break
        default:
          console.error('Undefined operation', operation)
      }
    },
    [current, handleOperation, handleEqual, handleReset]
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
