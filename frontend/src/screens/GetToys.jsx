import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container,Row, Col} from "react-bootstrap"
import ToyCard from "../components/ToyCard";
const GetToys = () => {
    const [toys, setToys] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchToys = async () => {
        try {
          const response = await axios.get('/app/toy/alltoys');
          console.log(response.data); 
          if (response.data.success) {
            setToys(response.data.message); 
          } else {
            setError('Failed to fetch toys');
          }
        } catch (error) {
          console.error('Error cargando juguetes:', error);
          setError('Error cargando juguetes');
        }
      };
      fetchToys();
    }, []);
  
    return (
      <><Container>  <h1 className="text-center">Lista de Juguetes</h1>
      <hr /></Container>
      
        {error && <p>{error}</p>}
        <Row>     
             <ul> 
          {toys.map((toy, index) => (
            <Col md={6} lg={4} sm={12} key={index}>
              <h2>{toy.toyName}</h2>
              <ToyCard toy={toy} />
              {toy.Category && <p>Categoría: {toy.Category.description}</p>}
            </Col>
          ))}
        </ul></Row>
  
      </>
    );
};

export default GetToys;