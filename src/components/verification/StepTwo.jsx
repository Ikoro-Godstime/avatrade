import { Paper, Typography, Box, Button, Container } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { bucket } from "../../firebase";
import { toast } from "react-toastify";

const StepTwo = ({ action, state }) => {
  toast.configure();
  // use Navigate
  const navigate = useNavigate();
  // submit function
  const handleSubmit = async (file) => {
    try {
      // upload Image
      const imgRef = ref(bucket, `proofImg/${file.name}`);
      await uploadBytes(imgRef, file);

      const imgSrc = await getDownloadURL(imgRef);

      return imgSrc;
    } catch (error) {
      console.error(error);
    }
  };

  // handleVerification
  const handleVerification = () => {
    toast.info(`Verification Pending`, {
      theme: "colored",
      position: "top-center",
    });

    navigate("/dashboard");
  };

  const onDrop = useCallback((acceptedFiles) => {
    // set update the state of the photo back
    handleSubmit(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <Container maxWidth="sm">
      <Paper sx={{ backgroundColor: "#fff", p: 2 }} elevation={1}>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "500", color: "#364A63" }}
          >
            Upload Document
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#9097C0" }}>
            To verify, please upload a copy of your {state.docType}.
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{ border: "2px gray dashed", borderRadius: "10px", my: 2 }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography
                color="GrayText"
                textAlign="center"
                variant="subtitle2"
                sx={{ cursor: "pointer" }}
              >
                Drop the file here ...
              </Typography>
            ) : (
              <Typography
                color="GrayText"
                textAlign="center"
                variant="subtitle2"
                sx={{ cursor: "pointer", p: 3 }}
              >
                Drop photo of {state.docType}
              </Typography>
            )}
          </Box>
        </Box>

        <Box>
          <Button fullWidth onClick={handleVerification}>
            Click Here to Finish Verification
          </Button>
          <Button
            fullWidth
            onClick={() => action((prev) => ({ ...prev, step: 1 }))}
            variant="outlined"
            sx={{ my: 2 }}
          >
            Go Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StepTwo;
