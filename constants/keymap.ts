import { ButtonProps } from '@chakra-ui/react'

export interface KeymapEntry {
  label: string
  operation: string
  value?: number
  keyProps?: ButtonProps
}

const keymap: KeymapEntry[] = [
  {
    label: 'C',
    operation: 'cancel',
  },
  {
    label: 'AC',
    operation: 'reset',
  },
  {
    label: '␡',
    operation: 'erase',
  },
  {
    label: '/',
    operation: 'divide',
  },
  {
    label: '7',
    operation: 'number',
    value: 7,
  },
  {
    label: '8',
    operation: 'number',
    value: 8,
  },
  {
    label: '9',
    operation: 'number',
    value: 9,
  },
  {
    label: '⨉',
    operation: 'multiply',
  },
  {
    label: '4',
    operation: 'number',
    value: 4,
  },
  {
    label: '5',
    operation: 'number',
    value: 5,
  },
  {
    label: '6',
    operation: 'number',
    value: 6,
  },
  {
    label: '-',
    operation: 'subtract',
  },
  {
    label: '1',
    operation: 'number',
    value: 1,
  },
  {
    label: '2',
    operation: 'number',
    value: 2,
  },
  {
    label: '3',
    operation: 'number',
    value: 3,
  },
  {
    label: '+',
    operation: 'add',
  },
  {
    label: '+/-',
    operation: 'negate',
  },
  {
    label: '0',
    operation: 'number',
    value: 0,
  },
  {
    label: '.',
    operation: 'decimal',
  },
  {
    label: '=',
    operation: 'equals',
    keyProps: {
      borderRadius: '100%',
      variant: 'solid',
    },
  },
]

export default keymap
