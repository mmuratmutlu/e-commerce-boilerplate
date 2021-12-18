import styled from 'styled-components'
import Image from 'next/image'
import { Badge, PlainButton, SearchBar, Categories } from 'components'
import { useModal } from 'context/modal-context'
import CounterInput from 'react-counter-input'
const categoryArray = [
  { name: 'Elektronik', slug: '/elektronik' },
  { name: 'Beyaz Eşya', slug: '/beyaz-esya' },
  { name: 'Giyim', slug: '/giyim' },
  { name: 'Oto, Bahçe, Yapı Market', slug: '/oto-bahce-yapi-market' },
  { name: 'Kitap', slug: '/kitap' },
  { name: 'Film', slug: '/film' },
  { name: 'Hobi', slug: '/hobi' },
  { name: 'Moda', slug: '/moda' },
  { name: 'Moda', slug: '/moda' },
]
function _renderBasketItem() {
  return (
    <BasketItem>
      <BasketImage />
      <InfoContainer>
        <ItemHeaderText>The Full Stack</ItemHeaderText>
        <ItemSubText>Size: 154cm</ItemSubText>
        <ItemSubText>Color: Syntax</ItemSubText>
        <CounterInput
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderColor: '#e1e1e1',
            borderWidth: '1px',
            width: '120px',
            borderRadius: '5px',
          }}
          min={0}
          max={10}
          onCountChange={(count: number) => console.log(count)}
        />
      </InfoContainer>
      <RightSection>
        <span>&#10005;</span>
        <PriceText>$1,499.90</PriceText>
      </RightSection>
    </BasketItem>
  )
}
function Header() {
  const { setModal, setModalConfig } = useModal()
  function onClickBasket() {
    setModalConfig({ isNude: true })
    setModal(
      <BasketModal>
        <ModalHeader>
          <div
            onClick={() => {
              setModalConfig({})
              setModal(null)
            }}
          >
            <Icon
              id="backIcon"
              src="/svg/backIcon.svg"
              height={20}
              width={20}
            />
          </div>
          <div
            onClick={() => {
              setModalConfig({})
              setModal(null)
            }}
          >
            <Badge count={3}>
              <Icon src="/svg/basket.svg" height={30} width={30} />
            </Badge>
          </div>
        </ModalHeader>
        {true ? (
          <>
            <ModalBody>{[0, 1, 2].map(() => _renderBasketItem())}</ModalBody>
            {/* <ModalFooter></ModalFooter> */}
          </>
        ) : (
          <NoneItem>
            <text>Sepetiniz boş</text>
            <PlainButton style={{ marginTop: '30px' }}>
              Alışverişe Devam Et
            </PlainButton>
          </NoneItem>
        )}
      </BasketModal>
    )
  }

  return (
    <Container>
      <BannerSection>
        <div></div>
        <div onClick={onClickBasket}>
          <Badge count={5}>
            <Icon src="/svg/basket.svg" height={30} width={30} />
          </Badge>
        </div>
      </BannerSection>
      <GradientLine />

      <Wrapper>
        <Categories categoryArray={categoryArray} />
        <SearchBar />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 50px 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 90%;
  }
`
const BannerSection = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  padding: 30px;
  justify-content: space-between;
`
const GradientLine = styled.div`
  width: 100%;
  height: 3px;
  background: #5c61e7;
`
const Icon = styled(Image)`
  cursor: pointer;
`

const BasketModal = styled.div`
  position: absolute;
  width: 450px;
  background: white;
  top: 0px;
  right: 0px;
  margin: 25px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 7px;
  @media (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  padding: 0 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 0px 6px 0px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgb(209 213 219);
  @media (max-width: 480px) {
    #backIcon {
      transform: rotate(180deg);
    }
  }
`
const ModalBody = styled.div`
  width: 100%;
  background-color: rgb(249 250 251);
  @media (max-width: 480px) {
    height: 100vh;
  }
`
const ModalFooter = styled.div`
  width: 100%;
  height: 200px;
  border-color: rgb(209 213 219);
  border-style: solid;
  border-width: 1px 0 0 0;
`
const NoneItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: rgb(107 114 128);
  font-size: 18px;
`

const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
`
const BasketImage = styled.img`
  width: 100px;
  height: 100px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 10px;
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: black;
  padding: 10px;
`
const ItemHeaderText = styled.text`
  margin-top: 10px;
  font-size: 18px;
`
const ItemSubText = styled.text`
  font-size: 12px;
  margin: 5px 0;
`
const PriceText = styled.text``
export default Header
