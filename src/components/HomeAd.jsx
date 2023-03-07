import React from "react";
import {Button, Container} from "react-bootstrap";
import {monthStringShort} from "../podo/utils";


const HomeAd = ({advert}) => {

    let date = new Date(advert.date);

    return (<div style={{
        backgroundImage: `url("${advert.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        <div className={'landingGradient'}>
            <Container fluid
                       style={{
                           width: "100vw", height: '100vh',
                           backdropFilter: 'blur(0px)',
                           WebkitBackdropFilter: 'blur(0px)',
                       }}
                       className=' px-3 customCenter'>
                <div className={'w-50 justify-content-center'}>
                    <div className={'d-flex flex-row flex-fill justify-content-center'}>
                        <div className={'border-5 border-secondary px-1 pt-1 mb-2 text-center'}>
                            <h1 className={'text-primary'}>{date.getDate()}</h1>
                            <h3 className={'text-primary'}>{monthStringShort(date.getMonth())}</h3>
                        </div>
                    </div>

                    <h1 className={'text-primary'}>{advert.title}</h1>
                    <p className={'limitLines'}>{advert.description}</p>
                    <div className={'d-flex flex-row flex-fill justify-content-center'}>
                        <Button variant={'secondary me-1'}>
                            Reserve
                        </Button>
                        <Button variant={'outline-primary ms-1'}>
                            Event Details
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    </div>)
}

export default HomeAd;