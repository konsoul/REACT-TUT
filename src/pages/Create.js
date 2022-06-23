import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
      console.log(title, details);
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
            color="secondary"
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
