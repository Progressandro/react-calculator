import { Text } from '@chakra-ui/react'
import React from 'react'

interface BannerTextProps {
  children: React.ReactNode
}

const BannerText = ({ children }: BannerTextProps) => {
  return <Text fontSize="6xl">{children}</Text>
}

export default BannerText
