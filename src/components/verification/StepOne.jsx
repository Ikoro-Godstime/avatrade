import {
  Paper,
  Typography,
  Box,
  FormControl,
  FormControlLabel,
  Button,
  TextField,
  Grid,
  Container,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useCountry } from "../../hooks/useCountry";

const StepOne = ({ action, state }) => {
  const { country, disable } = useCountry();
  return (
    <Container maxWidth="sm">
      <Paper sx={{ backgroundColor: "#fff", p: 2 }} elevation={1}>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "500", color: "#364A63" }}
          >
            Identity Document
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#9097C0" }}>
            Verify your identity using any of your following document.
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FormControl>
            <RadioGroup
              row
              value={state.docType}
              onChange={(e) =>
                action((prev) => ({ ...prev, docType: e.target.value }))
              }
            >
              <FormControlLabel
                value="Driving License"
                control={<Radio />}
                label="Driving License"
              />
              <FormControlLabel
                value="NationalID"
                control={<Radio />}
                label="National ID"
              />
              <FormControlLabel
                value="Passport"
                control={<Radio />}
                label="Passport"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <FormControl fullWidth sx={{ mt: 2, mb: 4 }} disable={disable}>
          <InputLabel>Issued By Country</InputLabel>
          <Select
            label="Select Country"
            size="small"
            value={state.issuedCountry}
            onChange={(e) =>
              action((prev) => ({ ...prev, issuedCountry: e.target.value }))
            }
          >
            {country.map((count, index) => (
              <MenuItem
                value={count.main}
                key={index}
                sx={{ bgcolor: "#fff", "&:hover": { bgColor: "#fff" } }}
              >
                {count.main}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Document Number"
          value={state.documentNumber}
          onChange={(e) =>
            action((prev) => ({ ...prev, documentNumber: e.target.value }))
          }
          fullWidth
          size="small"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Issued Date"
              fullWidth
              margin="dense"
              type="date"
              size="small"
              value={state.issuedDate}
              onChange={(e) =>
                action((prev) => ({ ...prev, issuedDate: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Expiry Date"
              fullWidth
              margin="dense"
              type="date"
              size="small"
              value={state.expiryDate}
              onChange={(e) =>
                action((prev) => ({ ...prev, expiryDate: e.target.value }))
              }
            />
          </Grid>
        </Grid>
        <Box>
          <Button
            fullWidth
            onClick={() => action((prev) => ({ ...prev, step: 2 }))}
          >
            Click to Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StepOne;
