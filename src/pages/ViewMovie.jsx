import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ViewMovie() {
  const [movie, setMovie] = useState({
    title: "",
    duration: "",
    posterImage: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const result = await axios.get(`http://localhost:8080/movie/data/${id}`);
    setMovie(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.posterImage} height={250} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.duration}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
