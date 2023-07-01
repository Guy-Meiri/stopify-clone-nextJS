import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      //todo: reset the form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload a mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};

export default UploadModal;
