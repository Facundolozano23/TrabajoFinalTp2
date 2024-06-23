import React from 'react'

import Card from 'react-bootstrap/Card';
import {Link}  from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ToyCard = ({ toy }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                <Card.Img src={toy.photo} />
                <Card.Body>
                    <Card.Title>Nombre: {toy.toyName}</Card.Title>
                    <Card.Title>Precio: ${toy.price}</Card.Title>
                    <Card.Text>
                     
                    </Card.Text>

                    <Link to={`toy/${toy.id}`}>
                       <Button>Detalle</Button>
                    </Link>
                </Card.Body>



            </Card>


        </>
    )
}

export default ToyCard;