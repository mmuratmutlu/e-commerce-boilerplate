
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface MainSlider {

}
function MainSlider(props: MainSlider) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slick {...settings}>
        <Item>
          <SliderImage src='http://localhost:3000/example/4.webp'></SliderImage>
        </Item>
        <Item>
          <SliderImage src='http://localhost:3000/example/3.webp'></SliderImage>
        </Item>
        <Item>
          <SliderImage src='http://localhost:3000/example/4.webp'></SliderImage>
        </Item>
      </Slick>
    </Container>
  )
}

const Container = styled.div`
  width:1200px;

`
const Item = styled.div`
  display:flex !important; 
  flex-direction:row;
  align-items:center;
  justify-content:center;
  height:500px;

`
const Slick = styled(Slider)`
.slick-dots {
  top: 0px;
  margin-left:320px;
  transform: rotate(90deg);
}
.slick-dots li button:before {
  color: white !important;
}
`
const SliderImage = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;

`

export default MainSlider
