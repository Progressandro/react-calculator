import { Flex, Grid } from '@chakra-ui/react'
import Keyboard from 'components/molecules/Keyboard'
import Screen from 'components/molecules/Screen'

const Calculator = () => {
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
        <Screen />
        <Keyboard />
      </Grid>
    </Flex>
  )
}

export default Calculator
