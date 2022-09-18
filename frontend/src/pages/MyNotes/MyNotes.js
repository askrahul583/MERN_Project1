import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
// import notes from "../../data/notes";
// import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure To Delete")) {
    }
  };

  const fetchNotes = async () => {
    // const data = await axios.get("api/notes");
    const response = await fetch("api/notes");
    const data = await response.json();
    setNotes(data);
  };

  // console.log(notes);
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Rahul Kumar...">
      <Link to="createnote">
        <Button
          styles={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
          variant="warning"
        >
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <Button href={`/notes/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge style={{ backgroundColor: "green" }}>
                    Category - {note.category}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
