import React from "react";
import { useRouter } from "next/router";
import { Box, Modal, Typography } from "@mui/material";
import Portal from "./Portal";
import Button from "../button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 4,
};

const SessionModal = ({ open}) => {
    const router = useRouter()
  return (
    <Portal>
      <Modal
        aria-labelledby="modal-modal-session-timeout"
        aria-describedby="modal-modal-session-expired"
        open={open}
        className=""
      >
        <Box className="absolute top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] flex flex-col items-center justify-center space-y-6">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Session timeout, please log in to continue.
          </Typography>
          <Box className="space-x-3 w-full flex justify-center">
            <Button onClick={() => router.push("/login?redirect=profile")} title="Login to continue" classes="" />
            <Button onClick={() => router.push("/shop")} title="Go Shopping" classes="" />
          </Box>
        </Box>
      </Modal>
    </Portal>
  );
};

export default SessionModal;
