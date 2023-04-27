import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function ProcessPayment() {
  const [movie, setMovie] = useState({
    title: "",
    duration: "",
    posterImage: "",
  });

  let navigate = useNavigate();

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

  const [showTime, setshowTime] = useState({
    startTime: "",
    movie: "",
    room: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const { startTime, movie1, room } = showTime;

  const onInputChange = (e) => {
    setshowTime({ ...showTime, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { startTime, movie, room } = showTime;
    axios
      .post("http://localhost:8080/showtime/data/all", showTime)
      .then((response) => {
        console.log(response);
        navigate("/viewmovie/1");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <br /> <br /> <br />
      <div className="row">
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.posterImage} height={250} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Show Time: 2 PM</Card.Text>
              <Card.Text>Room: Room 1</Card.Text>
              <Card.Text>Seat: Seat 1D</Card.Text>
              <Card.Text>Price: 30 US</Card.Text>
              <Button variant="info" type="submit">
                Confirm Purchase
              </Button>
              <Button variant="dark">
                <Link to={`/home`}> Return to HomePage</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
