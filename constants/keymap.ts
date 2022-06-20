import { ButtonProps } from '@chakra-ui/react'

export enum ValidOperations {
  CANCEL = 'cancel',
  RESET = 'reset',
  ERASE = 'erase',
  DIVIDE = 'divide',
  NUMBER = 'number',
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  EQUAL = 'equal',
  DECIMAL = 'decimal',
  NEGATE = 'negate',
}
export interface KeymapEntry {
  label: string
  operation: ValidOperations
  value?: number | '.'
  keyProps?: ButtonProps
}

const keymap: KeymapEntry[] = [
  {
    label: 'C',
    operation: ValidOperations.CANCEL,
  },
  {
    label: 'AC',
    operation: ValidOperations.RESET,
  },
  {
    label: '␡',
    operation: ValidOperations.ERASE,
  },
  {
    label: '/',
    operation: ValidOperations.DIVIDE,
  },
  {
    label: '7',
    operation: ValidOperations.NUMBER,
    value: 7,
  },
  {
    label: '8',
    operation: ValidOperations.NUMBER,
    value: 8,
  },
  {
    label: '9',
    operation: ValidOperations.NUMBER,
    value: 9,
  },
  {
    label: '⨉',
    operation: ValidOperations.MULTIPLY,
  },
  {
    label: '4',
    operation: ValidOperations.NUMBER,
    value: 4,
  },
  {
    label: '5',
    operation: ValidOperations.NUMBER,
    value: 5,
  },
  {
    label: '6',
    operation: ValidOperations.NUMBER,
    value: 6,
  },
  {
    label: '-',
    operation: ValidOperations.SUBTRACT,
  },
  {
    label: '1',
    operation: ValidOperations.NUMBER,
    value: 1,
  },
  {
    label: '2',
    operation: ValidOperations.NUMBER,
    value: 2,
  },
  {
    label: '3',
    operation: ValidOperations.NUMBER,
    value: 3,
  },
  {
    label: '+',
    operation: ValidOperations.ADD,
  },
  {
    label: '+/-',
    operation: ValidOperations.NEGATE,
  },
  {
    label: '0',
    operation: ValidOperations.NUMBER,
    value: 0,
  },
  {
    label: '.',
    operation: ValidOperations.NUMBER,
    value: '.',
  },
  {
    label: '=',
    operation: ValidOperations.EQUAL,
    keyProps: {
      borderRadius: '100%',
      variant: 'solid',
    },
  },
]

export default keymap
