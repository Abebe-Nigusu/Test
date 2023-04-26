import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function ViewMovie() {
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
              <Card.Text>{movie.duration}</Card.Text>
              <Button variant="dark">
                <Link to={`/home`}> Return to HomePage</Link>
              </Button>
              <Button variant="dark">
                <Link to={`/payment/${movie.id}`}>Pay Here</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <form onSubmit={(e) => onSubmit(e)}>
            <h1>{movie.title}</h1>
            <Form.Select aria-label="Default select example">
              <option>Start Time</option>
              <option value="1">2pm</option>
              <option value="2">4pm</option>
              <option value="3">8pm</option>
            </Form.Select>

            <Form.Select aria-label="Default select example">
              <option>Rooms</option>
              <option value="1">Room 1A</option>
              <option value="2">Room 2A</option>
              <option value="3">Room 3A</option>
            </Form.Select>
            <p>
              <label>
                <input type="checkbox" />
                Seat1
              </label>{" "}
              &nbsp; &nbsp;
              <label>
                <input type="checkbox" />
                Seat2
              </label>{" "}
              &nbsp; &nbsp;
              <label>
                <input type="checkbox" />
                Seat3
              </label>{" "}
              &nbsp; &nbsp;
            </p>

            <button type="submit" className="btn btn-primary">
              Add Show
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      {/* <div> */}
      {/* <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Start Time"
              name="startTime"
              value={startTime}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <Form.Select aria-label="Default select example">
            <option>Movies</option>
            <option value="{movie.title}">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select aria-label="Default select example">
            <option>Rooms</option>
            <option value="{movie.title}">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <button type="submit" className="btn btn-primary">
            Add Show
          </button>
          <Link className="btn btn-danger mx-2" to="/">
            Cancel
          </Link>
        </form> */}
      {/* <h1>{movie.title}</h1>
        <p>Duration: {movie.duration} minutes</p>
        {/* <p>Start Time: {showtimes.startTime}</p> */}
      {/* <p>startTime="7:00 PM"</p> */}
      {/* </div> */}
    </div>
  );
}
