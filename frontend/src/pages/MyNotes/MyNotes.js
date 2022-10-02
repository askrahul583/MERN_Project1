import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/noteActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
// import notes from "../../data/notes";
// import axios from "axios";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);

  const { loading, notes, error } = noteList;
  // const [notes, setNotes] = useState([]);
  //console.log(notes);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure To Delete ?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  // const fetchNotes = async () => {
  //   // const data = await axios.get("api/notes");
  //   const response = await fetch("api/notes");
  //   const data = await response.json();
  //   setNotes(data);
  // };

  // console.log(notes);

  const history = useHistory();
  useEffect(() => {
    // fetchNotes();
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    successCreate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <MainScreen title={`Welcome Back ${userInfo.name}...`}>
      <Link to="createnote">
        <Button
          styles={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
          variant="warning"
        >
          Create New Note
        </Button>
      </Link>
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes
        ?.reverse()
        // .filter((filteredNote) => {
        //   console.log(
        //     filteredNote.title.toLowerCase().includes(search.toLowerCase())
        //   );
        // })
        .map((note) => (
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
                      Created On - {""}
                      <cite title="Source Title">
                        {note.createdAt.substring(0, 10)}
                      </cite>
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
