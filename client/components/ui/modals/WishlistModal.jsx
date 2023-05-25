import React from "react";
import { useRouter } from "next/router";
import { Box, Modal, Typography } from "@mui/material";
import Portal from "./Portal";
import Button from "../button/Button";

const WishlistModal = ({ open, setOpenModal }) => {
  const router = useRouter();

  const handleCloseModal = () => {
    setOpenModal(false)
  }
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
            You must login first to add items to wishlist
          </Typography>
          <Box className="space-x-3 w-full flex justify-center">
            <Button
              onClick={() => router.push("/login?redirect=shop")}
              title="Login to continue"
              classes=""
            />
            <Button
              onClick={handleCloseModal}
              title="Close"
              classes=""
            />
          </Box>
        </Box>
      </Modal>
    </Portal>
  );
};

export default WishlistModal;
