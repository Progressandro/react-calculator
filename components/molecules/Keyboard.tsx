import { SimpleGrid } from '@chakra-ui/react'
import Key from 'components/atoms/Key'
import keymap, { KeymapEntry } from 'constants/keymap'

interface KeyboardProps {
  onKeyPress: (key: KeymapEntry) => void
}
const Keyboard = ({ onKeyPress }: KeyboardProps) => {
  return (
    <SimpleGrid columns={4} alignItems="stretch">
      {keymap.map((keymapEntry) => (
        <Key key={keymapEntry.label} onKeypress={onKeyPress} {...keymapEntry} />
      ))}
    </SimpleGrid>
  )
}

export default Keyboard
