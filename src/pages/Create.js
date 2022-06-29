import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";


const formStyle = {
  marginTop: 5,
  marginBottom: 2,
  display: "block",
};

export default function Create() {
  const navigate = useNavigate();
  // If there is no information present, send error
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // Save user-input text as title
  const [title, setTitle] = useState("");
  // Save user-input text as details
  const [details, setDetails] = useState("");

  // Radio Buttons state
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container>
     
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            color="primary"
            fullWidth
            required
            error={titleError}
          />
        </Box>

        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />
        </Box>

        <FormControl sx={{ ...formStyle }}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
