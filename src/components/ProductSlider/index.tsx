import styled from 'styled-components'
import { useState } from 'react'
function ProductSlider() {
  const images = [
    {
      id: 1,
      src: '/example/2.webp',
    },
    {
      id: 2,
      src: '/example/3.webp',
    },
    {
      id: 3,
      src: '/example/4.webp',
    },
  ]
  const [selectedItem, setSelectedItem] = useState(images[0])

  //  <Item>
  //       <SliderImage src="http://localhost:3000/example/4.webp"></SliderImage>
  //     </Item>
  //     <Item>
  //       <SliderImage src="http://localhost:3000/example/3.webp"></SliderImage>
  //     </Item>
  //     <Item>
  //       <SliderImage src="http://localhost:3000/example/4.webp"></SliderImage>
  //     </Item>
  return (
    <Container>
      <MainImage src={selectedItem?.src} />
      <MiniImageContainer>
        {images?.map((item, key) => (
          <MiniImage
            onClick={() => {
              setSelectedItem(item)
            }}
            key={key}
            src={item?.src}
          />
        ))}
      </MiniImageContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:4px;
`
const MiniImageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  top: 0;
  margin: 30px;
`
const MiniImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`
export default ProductSlider
