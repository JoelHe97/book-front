import { createContext, useState } from 'react'
interface Props {
    children: React.ReactNode
}
interface IModalContext {
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const defaultState: IModalContext = {
    openModal: false,
    setOpenModal: () => console.log("Modal Context"),
}

const ModalContext = createContext<IModalContext>(defaultState);
const ModalProvider = ({ children }: Props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const data = {
        openModal,
        setOpenModal,
    }
    return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}
export { ModalProvider }
export default ModalContext
