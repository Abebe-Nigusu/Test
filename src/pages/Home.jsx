import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:8080/movie/data");
    console.log(result);
    setMovies(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-3 border rounded p-4 mt-2 shadow">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.posterImage} height={250} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.duration}</Card.Text>
                <Button variant="primary">
                  <Link to={`/viewmovie/${movie.id}`}>Back to Home</Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
