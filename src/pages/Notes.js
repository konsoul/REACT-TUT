import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // gets data from .json using our server endpoint
    fetch("http://localhost:8000/notes")
      // resolve the data
      .then((res) => res.json())
      // pass the data into our useState
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
