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
      templateRows="40px 1fr 40px"
      templateAreas={`
      "header"
      "content"
      "footer"
    `}
    >
      {header}
      <GridItem
        gridAutoFlow="row dense"
        w="full"
        h="full"
        justifyContent="center"
        alignContent="center"
        area="content"
      >
        {children}
      </GridItem>
      {footer}
    </Grid>
  )
}

export default DefaultLayout
