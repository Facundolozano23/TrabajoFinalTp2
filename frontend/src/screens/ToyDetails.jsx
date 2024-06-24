import React, { useEffect, useState } from "react";
import { useParams,useNavigate, Link} from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToyDetails = async () => {
      try {
        const response = await axios.get(`/app/toy/byid/${id}`);
        setToy(response.data.message);
      } catch (error) {
        console.error('Error fetching toy details:', error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data.message : error.message);
      }
    };

    fetchToyDetails();
  }, [id]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!toy) {
    return <p>No hay juguetes</p>;
  }

  const deleteToy = async (id) => {
    await axios.delete(`/app/toy/${id}`)
    navigate('/toy');
}

  return (
    <Container>
      <h1>{toy.toyName}</h1>
      <Row>
        <Col md={6}>
          <Image src={toy.photo} alt={toy.toyName} fluid />
        </Col>
        <Col md={6}>
          <p><strong>Marca:</strong> {toy.brand}</p>
          <p><strong>Precio:</strong> ${toy.price}</p>
          <p><strong>Edad Mínima:</strong> {toy.minAge} años</p>
          <p><strong>Tamaño:</strong> {toy.size} cm</p>
          <p><strong>Año de Fabricación:</strong> {toy.yearCreation}</p>
          <p><strong>Categoría:</strong>  { toy.Category.description}</p>
          <Link to={`/toy/edit/${id}`}>
                                <Button>Editar</Button>
                            </Link>
          <Button className="btn btn-danger m-2" onClick={() => deleteToy(id)}>Borrar</Button> 
        </Col>
      </Row>
    </Container>
  );
};

export default ToyDetails;