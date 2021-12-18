import styled from 'styled-components'

function SearchBar() {
  return (
    <Container>
    <SearchInput placeholder="Ürün, kategori veya marka arayabiliriz.."></SearchInput>
    <SubmitButton>Ara</SubmitButton>
  </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`
const SearchInput = styled.input`
  border: 1px transparent solid;
  width: 100%;
  background-clip: padding-box;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.9285714286em 0.7857142857em;
  word-break: normal;
  line-height: inherit;
  color: #333333;
  border-color: #d9d9d9;
  
`
const SubmitButton = styled.button`
  cursor: pointer !important;
  height: 43px;
  width: 60px;
  padding: 0;
  border: none;
  background: #5c61e7;
  color: white;
  font-weight: bold;
`
export default SearchBar
