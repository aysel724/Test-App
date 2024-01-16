import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DataFetcher = () => {
  let { index } = useParams();
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
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                <img
                  src={data[index - 1].big_image}
                  alt="images"
                  style={{
                    maxWidth: "100%",

                    alignItems: "center",
                    padding: "5%",
                    borderRadius: "15%",
                  }}
                />
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                {" "}
                <h2 className="docName">{data[index - 1].title}</h2>
                <p className="titles"> </p>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                <h5>Genre: {data[index - 1].genre[0]}</h5>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                <h5>Year: {data[index - 1].year}</h5>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                <Button variant="primary">
                  Rating: {data[index - 1].rating}
                </Button>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                sm={12}
              >
                <div
                  className="work-box"
                  style={{ alignItems: "center", padding: "5%" }}
                >
                  <h3 className="titles">
                    <b>Description:</b> {data[index - 1].description}
                  </h3>
                  {/* <ul className="work">Work</ul> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
