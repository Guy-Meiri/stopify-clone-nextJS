import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //todo: upload to supabase
    // data;
  };

  return (
    <Modal
      title="Add a song"
      description="Upload a mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song author"
        />
        <div>
          <div>Select a song file</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
          ></Input>
        </div>
        <div>
          <div>Select an image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          ></Input>
        </div>
        <Button disabled={isLoading}>Create</Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
