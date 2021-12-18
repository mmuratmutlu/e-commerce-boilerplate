import type { NextPage } from 'next'
import styled from 'styled-components'
import { Product, MainSlider,ProductSlider } from 'components'
import { useModal } from 'context/modal-context'
const Home: NextPage = () => {
  const { setModal, setModalConfig } = useModal()

  return (
    <Container>
        <SliderContainer>
          <ProductSlider />
        </SliderContainer>
      <GridContainer>
        <div
          onClick={() => {
            setModalConfig({})
            setModal(<div style={{ width: '500px', height: '500px' }}></div>)
          }}
        >
          <Product
            storeName="Hello Store"
            productName="Dell S2422HG 23.6 165Hz 1ms (Hdmı+Display) Curved Gaming Monitör"
          ></Product>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto ;
  padding: 10px;
  margin-top: 200px;
  @media (max-width: 480px) {
    margin-top: 50px;
    grid-template-columns: auto;
  }

`
const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  @media (max-width: 480px) {
    width:100%;
    height: 600px;

  }
`
export default Home
