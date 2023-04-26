import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function AddUser() {
  let navigate = useNavigate();

  const [showTime, setshowTime] = useState({
    startTime: "",
    movie: "",
    room: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const { startTime, movie, room } = showTime;

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
      <div className="row">
        <div className="col-md-5 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Show</h2>

          <form onSubmit={(e) => onSubmit(e)}>
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
            {/* <div className="mb-3">
              <label htmlFor="movie" className="form-label">
                Movie
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Movie"
                name="movie"
                value={movie}
                onChange={(e) => onInputChange(e)}
              />


            {/* <div className="mb-3">
              <label htmlFor="room" className="form-label">
                Room
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Room"
                name="room"
                value={room}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Add Show
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
