import styled from 'styled-components'
interface Product {
  storeName: string
  productName: string
}
function Product(props: Product) {
  return (
    <Container>
      <Content>
        <div style={{ padding: '15px' }}>
          <Text>{props.productName}</Text>
        </div>
        <div style={{ padding: '15px' }}>
          <Photo src="http://localhost:3000/images/test.webp" />
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 245px;
  @media (max-width: 480px) {
    width:100%;
  }
`
const Photo = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

const Text = styled.text`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: rgb(72, 72, 72);
  display: -webkit-box;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 28px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 13px;
  margin-top: 4px;
  overflow: hidden;
  padding: 0px 4px;
  text-align: center;
  text-overflow: ellipsis;
`

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 373px;
  cursor: pointer;
  border: 1px solid rgb(229, 229, 229);
`

export default Product
