
import styled from 'styled-components'
import { Header, Footer } from 'components'
import { ModalProvider } from 'context/modal-context'
function Layout(props: any) {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <PageContainer>
          {props.children}
        </PageContainer>
      </Container>
      <Footer />
    </ModalProvider>
  )
}

const Container = styled.div`

`
const PageContainer = styled.div`
  padding:0 28%;
`

export default Layout
