import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

interface DefaultLayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}

const DefaultLayout = ({ header, footer, children }: DefaultLayoutProps) => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="60px 1fr 60px"
      templateAreas={`
      "header"
      "content"
      "footer"
      `}
    >
      {header}
      <GridItem area="content">{children}</GridItem>
      {footer}
    </Grid>
  )
}

export default DefaultLayout
