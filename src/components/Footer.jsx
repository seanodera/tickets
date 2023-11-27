import React from 'react'
import {Container} from 'react-bootstrap'

const Footer = () => {
    return (<footer className={'bg-body '}>
            <Container>

                <span className={'text-center d-flex flex-row justify-content-center pt-3'}><p
                    className={'text-white'}>Made With &nbsp; </p><p className={'text-secondary'}> &#9829; </p></span>
                <span className={'d-flex flex-row pb-3 justify-content-center'}> Copyright &copy; TicketsCY</span>
            </Container>
        </footer>)
}

export default Footer