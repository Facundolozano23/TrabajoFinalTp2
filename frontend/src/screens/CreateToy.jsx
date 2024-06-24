import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateToy = () => {
  const [toyName, setToyName] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [minAge, setMinAge] = useState(0);
  const [size, setSize] = useState(0);
  const [yearCreation, setYearCreation] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const addToyHandler = async (e) => {
    e.preventDefault();

    if (!toyName || !brand || !price || !minAge || !size || !yearCreation) {
      setError('Todos los datos son requeridos');
      return;
    }

    const toyData = {
      toyName,
      brand,
      price,
      minAge,
      size,
      yearCreation,
      categoryId,
      photo,
    };

    try {
      await axios.post('/app/toy/createtoy', toyData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/toy');
    } catch (error) {
      console.error('Error creating toy:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <Container>
      <h1>Crear Juguete</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form onSubmit={addToyHandler} method="POST">
        <Form.Group className="mb-3" controlId="formToyName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={toyName}
            onChange={(e) => setToyName(e.target.value)}
            type="text"
            placeholder="Ingrese nombre del juguete"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBrandName">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            type="text"
            placeholder="Ingrese Marca"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Ingrese Precio"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMinAge">
          <Form.Label>Edad Mínima</Form.Label>
          <Form.Control
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
            type="number"
            placeholder="Ingrese edad mínima para el uso"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSize">
          <Form.Label>Tamaño</Form.Label>
          <Form.Control
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="number"
            placeholder="Ingrese tamaño del juguete"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formYearCreation">
          <Form.Label>Año de fabricación</Form.Label>
          <Form.Control
            value={yearCreation}
            onChange={(e) => setYearCreation(e.target.value)}
            type="number"
            placeholder="Ingrese Año de Fabricación"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Ingrese categoría</Form.Label>
          <Form.Control
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            type="number"
            placeholder="Ingrese categoría"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoto">
          <Form.Label>Url de foto</Form.Label>
          <Form.Control
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            placeholder="Ingrese url de foto"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear juguete
        </Button>
      </Form>
    </Container>
  );
};

export default CreateToy;
