import type { NextPage } from 'next'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Input, PlainButton, ProductSlider } from 'components'
const Products: NextPage = function () {
  const router = useRouter()
  const { id } = router.query

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Elektronik
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Telefonlar
        </Link>
        <Typography color="text.primary">Apple</Typography>
      </Breadcrumbs>
      <ProductContainer>
        <SliderContainer>
          <ProductSlider />
        </SliderContainer>
        <InfoContainer>
          <BigText>Apple iPhone 12</BigText>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="read-only" value={3} readOnly />
            <text style={{ color: 'gray', marginLeft: '5px' }}>(15)</text>
          </div>
          <DescText>
            Discover Nintendo Switch , the video game system you can play at
            home or on the go
          </DescText>

          <BigText>$990.00</BigText>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Input
              style={{ width: '20%' }}
              type="number"
              label="Yurtiçi Kargo"
              value={0}
            />
            <PlainButton type="addToCart" style={{ width: '38%' }}>
              Sepete Ekle
            </PlainButton>
            <PlainButton
              type="buyNow"
              // onClick={(e: any) => {
              //   e.preventDefault()
              //   handleSubmit()
              // }}
              style={{ width: '38%' }}
            >
              Şİmdi Satın Al
            </PlainButton>
          </div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <text style={{ fontWeight: 'bold', color: '#20354d' }}>
                Description
              </text>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '0' }}>
              <DescText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DescText>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <text style={{ fontWeight: 'bold', color: '#20354d' }}>
                Characteristics
              </text>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '0' }}>
              <DescText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DescText>
            </AccordionDetails>
          </Accordion>
        </InfoContainer>
      </ProductContainer>
    </Container>
  )
}
const Accordion = styled(MuiAccordion)`
  border: none;
  -moz-box-shadow: none;
  -goog-ms-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
`
const AccordionSummary = styled(MuiAccordionSummary)`
  border: none;
  -moz-box-shadow: none;
  -goog-ms-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`
const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6px;
  @media (max-width: 480px) {
    flex-direction:column;

  }
`
const SliderContainer = styled.div`
  width: 55%;
  height: 500px;
  @media (max-width: 480px) {
    width:100%;
    height: 600px;

  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  padding: 5px 30px;
  gap: 30px;
  @media (max-width: 480px) {
    width:100%;
    padding:0;
    margin-top:20px;
  }
`
const BigText = styled.text`
  font-size: 28px;
  color: #20354d;
`
const DescText = styled.text`
  color: gray;
  font-size: 14px;
`

export default Products
