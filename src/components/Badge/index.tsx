import styled from 'styled-components'
interface Badge {
  children: any
  count: number
  onClick: any
}
function Badge(props: any) {
  return (
    <Container>
      {props?.children}
      {props?.count > 0 && (
        <Circle>
          <Count>{props.count}</Count>
        </Circle>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  cursor: pointer;
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: rgba(29, 78, 216, 1);
`

const Count = styled.span`
  color: white;
  font-size: 13px;
`

export default Badge
