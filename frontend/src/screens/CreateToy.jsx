
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


  const CreateToy = ({ history }) => {


    const [toyName, setToyName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [minAge, setMinAge] = useState(0)
    const [size, setSize]= useState(0)
   const [yearCreation, setYearCreation]= useState(0)
   const [category, setCategory] = useState('')
   const [photo, setPhoto] = useState ('')
   

    const addToyHandler = async (e) => {

        e.preventDefault()


        const formData = new FormData()

        formData.append('toyName', toyName)
        formData.append('brand', brand)
        formData.append('price', price)
        formData.append('minAge', minAge)
        formData.append('size', size)
        formData.append('yearCreation', yearCreation)
        formData.append('category', category)
        formData.append('photo', photo)
        
       
        await axios.post('/app/toy/createtoy', formData)
        history.push('/toy')

    }

    return (
        <Container><h1>Crear Juguete</h1>
         <Form onSubmit={addToyHandler} method="POST" encType='multipart/form-data'>
            
            <Form.Group className="mb-3" controlId="formToyName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control  value={toyName}
                            onChange={(e) => setToyName(e.target.value)}
                            type="text" placeholder="Ingrese nombre del juguete" />
              <Form.Text className="text-muted">
              
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Marca</Form.Label>
              <Form.Control value={brand}
                            onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Ingrese Marca" />
            </Form.Group>
         
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Precio</Form.Label>
              <Form.Control value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"placeholder="Ingrese Precio" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Edad Mínima</Form.Label>
              <Form.Control  value={minAge}
                            onChange={(e) => setMinAge(e.target.value)} type="number" placeholder="Ingrese edad mínima para el uso" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control  value={size}
                            onChange={(e) => setSize(e.target.value)} type="number" placeholder="Ingrese tamaño del juguete" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Año de fabricación</Form.Label>
              <Form.Control  value={yearCreation}
                            onChange={(e) => setYearCreation(e.target.value)}type="number" placeholder="Ingrese Año de Fabricación" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Ingrese categoría</Form.Label>
              <Form.Control  value={category}
                            onChange={(e) => setCategory(e.target.value)}type="number" placeholder="Ingrese categoría" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label>Url de foto</Form.Label>
              <Form.Control  value={photo}
                            onChange={(e) => setPhoto(e.target.value)} type="text" placeholder="Ingrese url de foto" />
            </Form.Group>
            <Button variant="primary" type="submit">
             Crear juguete
            </Button>
          </Form>
        
        
        </Container>
         
      );

}

export default CreateToy;