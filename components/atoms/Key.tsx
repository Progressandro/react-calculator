import { Button, Flex, Text } from '@chakra-ui/react'
import { KeymapEntry } from 'constants/keymap'

const Key = ({ keyProps, label, operation }: KeymapEntry) => {
  return (
    <Flex justify="center" align="center">
      <Button
        borderRadius="full"
        variant="ghost"
        {...keyProps}
        w={50}
        h={50}
        colorScheme={operation === 'equals' ? 'orange' : undefined}
      >
        <Text
          fontSize="2xl"
          color={
            operation !== 'number' && operation !== 'equals'
              ? 'orange'
              : undefined
          }
          lineHeight={0}
        >
          {label}
        </Text>
      </Button>
    </Flex>
  )
}

export default Key
