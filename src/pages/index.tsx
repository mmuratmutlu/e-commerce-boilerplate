import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components";
import { Product, MainSlider } from 'components'
import { useModal } from 'context/modal-context'
const Home: NextPage = () => {
  const { setModal } = useModal()

  return (
    <Container>
      <MainSlider />
      <GridContainer >
        <div onClick={() => {
          setModal(<div style={{ width: '500px', height: '500px' }}></div>)
        }}>
          <Product storeName="Hello Store" productName="Dell S2422HG 23.6 165Hz 1ms (Hdmı+Display) Curved Gaming Monitör"></Product>
        </div>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>
        <Product storeName="Hello Store" productName="Iphone 13"></Product>

      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`
const GridContainer = styled.div`
width:100%;
display: grid;
grid-template-columns: auto auto auto auto;
padding: 10px;
height:1200px;
margin-top:200px;
`
export default Home
