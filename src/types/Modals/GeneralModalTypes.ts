export interface GeneralModalProps { 
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
    onRequestCloseMsg: string
    mainMsg: string
    buttonMsg: string
}
