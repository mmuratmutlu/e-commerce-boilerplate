import styled from 'styled-components'
// import Image from "next/image";

function Input(props: any) {
  switch (props?.type) {
    case 'radio':
      return (
        <label
          style={{
            cursor: 'pointer',
          }}
        >
          <RadioContainer>
            <StyledRadioInput {...props}></StyledRadioInput>
            {props?.label}
            {props?.logo && <Icon src={props?.logo} height={20} />}
          </RadioContainer>
        </label>
      )
    case 'select':
      return (
        <Select
          name={props?.name}
          value={props?.value}
          onChange={props?.onChange}
          onBlur={props?.onBlur}
          style={{ display: 'block' }}
        >
          <option value="" label={props?.label} />
          {props?.options?.map((item: any, key: any) => (
            <option key={key} value={item.value} label={item?.label} />
          ))}
        </Select>
      )
    default:
      return <StyledTextInput {...props}></StyledTextInput>
  }
}

const StyledTextInput = styled.input`
  border: 1px transparent solid;
  width: 100%;
  background-clip: padding-box;
  border-radius: 5px;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.9285714286em 0.7857142857em;
  word-break: normal;
  line-height: inherit;
  color: #333333;
  border-color: #d9d9d9;
`
const RadioContainer = styled.div`
  display: flex;
  border: 1px transparent solid;
  width: 100%;
  background-clip: padding-box;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.9285714286em 0.7857142857em;
  word-break: normal;
  line-height: inherit;
  color: #333333;
  border-color: #d9d9d9;
`
const Icon = styled.img`
  margin: 0 5px;
`
const StyledRadioInput = styled.input``
const Select = styled.select`
  display: flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  border: 1px transparent solid;
  width: 100%;
  height: 50px;
  background: white;
  border-color: #d9d9d9;
  border-radius: 5px;
`
export default Input
