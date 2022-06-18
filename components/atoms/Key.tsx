import { Button, Flex, Text } from '@chakra-ui/react'
import { KeymapEntry, ValidOperations } from 'constants/keymap'

type KeyProps = KeymapEntry & {
  onKeypress: (key: KeymapEntry) => void
}
const Key = ({ onKeypress, ...props }: KeyProps): JSX.Element => {
  const { keyProps, label, operation } = props
  return (
    <Flex justify="center" align="center">
      <Button
        borderRadius="full"
        variant="ghost"
        {...keyProps}
        w={50}
        h={50}
        background={
          operation === ValidOperations.EQUAL ? 'orange.500' : undefined
        }
        _hover={{
          background:
            operation === ValidOperations.EQUAL ? 'orange.300' : undefined,
        }}
        onClick={() => onKeypress(props)}
      >
        <Text
          fontSize="2xl"
          color={
            operation !== ValidOperations.EQUAL &&
            operation !== ValidOperations.NUMBER
              ? 'orange.400'
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
