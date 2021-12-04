
import styled from "styled-components";

function Header(props: any) {
  return (
    <Container>
      <BannerSection></BannerSection>
      <Wrapper></Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width:100%;

`
const Wrapper = styled.div`
width:100%;
height:180px;
`
const BannerSection = styled.div`
  width:100%;
  height:90px;
  background:#f0efed;

`
export default Header
