import styled from 'styled-components'

function PlainButton(props: any) {
  switch (props?.type) {
    case 'addToCart':
      return (
        <AddToCart style={props.style} onClick={props.onClick}>
          {props?.children}
        </AddToCart>
      )
    case 'buyNow':
      return (
        <BuyNow style={props.style} onClick={props.onClick}>
          {props?.children}
        </BuyNow>
      )

    default:
      return (
        <Button style={props.style} onClick={props.onClick}>
          {props?.children}
        </Button>
      )
  }
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: rgb(17 24 39);
  color: white;
  padding: 0;
  border: none;
  cursor: pointer;
`
const AddToCart = styled.button`
  width: 100%;
  height: 40px;
  background: #2ab5fd;
  color: white;
  padding: 0;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`
const BuyNow = styled.button`
  width: 100%;
  height: 40px;
  background: white;
  color: #475a6d;
  padding: 0;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`
export default PlainButton
