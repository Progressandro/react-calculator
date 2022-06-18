import { Box, Flex, Text } from '@chakra-ui/react'

interface ScreenProps {
  text: string
}
const Screen = ({ text }: ScreenProps) => {
  return (
    <Flex
      w="full"
      h="full"
      bg="black"
      color="white"
      p={4}
      justify="end"
      align="end"
    >
      <Text as="pre" fontSize="3xl">
        {text}
      </Text>
    </Flex>
  )
}

export default Screen
