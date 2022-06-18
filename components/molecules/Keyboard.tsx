import { SimpleGrid } from '@chakra-ui/react'
import Key from 'components/atoms/Key'
import keymap from 'constants/keymap'

const Keyboard = () => {
  return (
    <SimpleGrid columns={4} alignItems="stretch">
      {keymap.map((keymapEntry) => (
        <Key key={keymapEntry.label} {...keymapEntry} />
      ))}
    </SimpleGrid>
  )
}

export default Keyboard
