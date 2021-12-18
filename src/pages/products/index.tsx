import type { NextPage } from 'next'
import styled from 'styled-components'
import { useEffect } from 'react'

const Products: NextPage = function (props:any) {
  useEffect(() => {
    console.log(props)
  }, [props])
  return (
   <Container></Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export default Products
