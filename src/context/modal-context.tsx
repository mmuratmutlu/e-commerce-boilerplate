import React, { useCallback,useState, createContext, useContext ,useEffect} from 'react'
import { Modal } from 'components'
const ModalContext = createContext({} as any)

const ModalProvider = (props: any) => {
    const [modal, setModal] = useState(undefined)
    const [modalConfig, setModalConfig] = useState({})

    const unSetModal = useCallback(() => {
        setModal(undefined)
    }, [setModal])

    return (
        <ModalContext.Provider value={{ unSetModal, setModal,setModalConfig }} {...props} >
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} modalConfig={modalConfig} />}
        </ModalContext.Provider>
    )
}

const useModal = () => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a UserProvider')
    }

    return context
}

export { ModalProvider, useModal }