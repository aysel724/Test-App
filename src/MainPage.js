import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DataFetcher = () => {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf647e4a99msha8138dcc8cc2a78p1c5356jsn037d99130b76",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="doctorsPage">
          <Container fluid="md">
            <Row>
              {data.map((item, index) => (
                <Col style={{ display: "flex", justifyContent: "center" }}>
                  <Card style={{ width: "18rem", marginBottom: "20px" }}>
                    <Card.Img variant="top" src={item.big_image} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button href={`/${index + 1}`} variant="primary">
                        Info
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
