import {
  Box,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEditPost, useGetPost } from "../../hooks/post";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";

export default function Edit() {
  const { id } = useParams<{ id: string }>();
  const toast = useToast();
  const { data } = useGetPost(Number(id));
  useDocumentTitle("Edit Post");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{
    title: string;
    body: string;
  }>();
  useEffect(() => {
    if (data) {
      reset({ body: data.body, title: data.title });
    }
  }, [data, reset]);
  const { mutate, isLoading } = useEditPost();
  const onSubmit = (title: string, body: string) => {
    mutate(
      { title, body, id: Number(id) },
      {
        onSuccess: () => {
          reset();
          toast({
            title: "Post Updated",
            description: "The post has been successfully updated.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        },
        onError: () => {
          toast({
            title: "Error",
            description:
              "An error occurred while updating the post. Please try again later.",
            status: "error",
            duration: 9000,
            position: "top-right",
            isClosable: true,
          });
        },
      }
    );
    console.log("Creating post:", title, body);
  };
  const handleFormSubmit = (data: { title: string; body: string }) => {
    onSubmit(data.title, data.body);
  };
  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl id="title" mb={4} isInvalid={!!errors.title}>
          <FormLabel>Title</FormLabel>
          <Input
            {...register("title", {
              required: "Title is required!",
              maxLength: { value: 50, message: "Maximal character is 50" },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="content" mb={4} isInvalid={!!errors.body}>
          <FormLabel>Content</FormLabel>
          <Textarea
            {...register("body", {
              required: "Body is required!",
            })}
          />
          <FormErrorMessage>
            {errors.body && errors.body.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="blue" type="submit" isLoading={isLoading}>
          Edit Post
        </Button>
      </form>
    </Box>
  );
}
