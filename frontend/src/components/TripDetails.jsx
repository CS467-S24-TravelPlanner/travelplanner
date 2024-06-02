import { Box, Button, TextField } from "@mui/material";

const TripDetails = ({ trip, handleChange, handleSubmit }) => {
  return (
    <div>
      <Box
        component="form"
        noValidate
        alignItems="stretch"
        autoComplete="off"
        display="block"
        margin={10}
        padding={10}
        border={"3px solid #364958"}
        backgroundColor="rgba(238,232,217)"
        borderRadius="7px"
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: "3rem" }}>
          <TextField
            required
            id="trip-name"
            label="Trip Name"
            inputProps={{ maxLength: 255 }}
            name="name"
            value={trip.name}
            onChange={handleChange}
            sx={{ width: "100%" }}
            backgroundColor
          />
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <TextField
            required
            id="trip-desc"
            label="Trip Description"
            multiline
            rows={5}
            inputProps={{ maxLength: 255 }}
            name="description"
            value={trip.description}
            onChange={handleChange}
            sx={{ width: "100%" }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#364958",
            color: "white",
            borderRadius: "7px",
          }}
        >
          Create Trip
        </Button>
      </Box>
    </div>
  );
};

export default TripDetails;
