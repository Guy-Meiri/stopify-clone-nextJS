"use client";

import Modal from "@/app/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // this is to prevent returning the Mocal if by mistake running on server
  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      title="Modal title"
      description="modal description"
      onChange={(isOpen) => {}}
    >
      <div>Modal content</div>
    </Modal>
  );
};

export default ModalProvider;
