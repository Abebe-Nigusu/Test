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

  // const [showTime, setshowTime] = useState; ({
  //    startTime: ""
  //  })

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
            <Button variant="dark">
              <Link to={`/home`}> Return to HomePage</Link>
            </Button>
            <Button variant="dark">
              <Link to={`/payment`}>Pay Here</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h1>{movie.title}</h1>
        <p>Duration: {movie.duration} minutes</p>
        {/* <p>Start Time: {showtimes.startTime}</p> */}
        <p>startTime="7:00 PM"</p>
      </div>
    </div>
  );
}
