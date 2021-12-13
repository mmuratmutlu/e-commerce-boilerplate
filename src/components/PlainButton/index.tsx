import styled from "styled-components";

function PlainButton(props: any) {
  return (
    <Button style={props.style} onClick={props.onClick}>
      {props?.children}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: rgb(17 24 39);
  color: white;
  padding: 0;
  border: none;
  cursor:pointer;
`;
export default PlainButton;
