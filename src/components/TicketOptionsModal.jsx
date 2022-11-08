import React from 'react'
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const TicketOptionsModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "display-block" : "display-none";

  return (
    <Modal className={showHideClassName}>
        <ModalDialog>
            <ModalHeader>
                <ModalTitle>Choose Your ticket option</ModalTitle>
                <Button variant='close' data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></Button>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button variant='primary' data-bas-dismiss="modal" onClick={handleClose}>Checkout</Button>
            </ModalFooter>
        </ModalDialog>
    </Modal>
  )
}

export default TicketOptionsModal