import styled from 'styled-components'
import Image from 'next/image'
import { Badge, PlainButton } from 'components'
import { useModal } from 'context/modal-context'

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
            <Icon src="/svg/backIcon.svg" height={20} width={20} />
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
        {false ? (
          <>
            <ModalBody></ModalBody>
            <ModalFooter></ModalFooter>
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

      <Wrapper></Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;
  height: 180px;
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
  width: 400px;
  background: white;
  top: 0px;
  right: 0px;
  margin: 25px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 7px;
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
`
const ModalBody = styled.div`
  width: 100%;
  background-color: rgb(249 250 251);
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
export default Header
