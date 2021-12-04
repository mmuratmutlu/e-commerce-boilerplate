import React, { useCallback, useEffect, useState, createContext, useContext } from 'react'
import { Modal } from 'components'
const ModalContext = createContext({} as any)

const ModalProvider = (props: any) => {
    const [modal, setModal] = useState(undefined)
    const unSetModal = useCallback(() => {
        setModal(undefined)
    }, [setModal])

    return (
        <ModalContext.Provider value={{ unSetModal, setModal }} {...props} >
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
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