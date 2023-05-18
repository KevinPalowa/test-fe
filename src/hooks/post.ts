import { useMutation, useQuery } from "@tanstack/react-query";
import Axios from "../lib/axios";
import { AxiosError } from "axios";

type SafeNumber = number | `${number}`;
type Post = { userId: number; id: number; title: string; body: string };
async function getPosts(): Promise<Post[]> {
  const response = await Axios.get("posts");
  return response.data;
}

async function getPost(id: SafeNumber): Promise<Post> {
  const response = await Axios.get(`posts/${id}`);
  return response.data;
}

export function useGetPosts() {
  return useQuery({ queryFn: getPosts, queryKey: ["posts"] });
}

export function useGetPost(id: SafeNumber) {
  return useQuery({
    queryFn: () => getPost(id),
    queryKey: ["posts", id],
    enabled: Boolean(id),
  });
}

export function useCreatePost() {
  return useMutation<
    Pick<Post, "id">,
    AxiosError<null>,
    Omit<Post, "id" | "userId">
  >({
    mutationFn: async (post) => {
      const response = await Axios.post("posts", { post });
      return response.data;
    },
  });
}

export function useDeletePost() {
  return useMutation<Pick<Post, "id">, AxiosError<null>, SafeNumber>({
    mutationFn: async (id: SafeNumber) => {
      const response = await Axios.delete(`posts/${id}`);
      return response.data;
    },
  });
}
export function useEditPost() {
  return useMutation<Pick<Post, "id">, AxiosError<null>, Omit<Post, "userId">>({
    mutationFn: async (data: Omit<Post, "userId">) => {
      const response = await Axios.put(`posts/${data.id}`, { ...data });
      return response.data;
    },
  });
}
