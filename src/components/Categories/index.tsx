import styled from 'styled-components'
import { useRouter } from 'next/router'
function Categories(props: any) {
  const router = useRouter()
  function categoryClickHandler(slug: string) {
    router.push(slug)
  }
  return (
    <Container>
      {props?.categoryArray?.map((item: any, key: any) => (
        <Item
          onClick={() => {
            categoryClickHandler(item?.slug)
          }}
          key={key}
        >
          {item?.name}
        </Item>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
const Item = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 20px 20px 20px 0;
  cursor: pointer;
`
export default Categories
