import { Box, HStack, Heading, Link, Stack } from "@chakra-ui/react";
import { useGetPosts } from "../hooks/post";
import BlogListSkeleton from "../components/BlogListSkeleton";
import { Link as ReactRouteLink } from "react-router-dom";
import BlogList from "../components/BlogList";

export default function Home() {
  const { data, isLoading } = useGetPosts();
  return (
    <Box maxW="600px" mx="auto" py={8} px={4}>
      <Stack spacing={4}>
        <HStack justifyContent="space-between">
          <Heading as="h1" size="2xl">
            My Blog
          </Heading>
          <Link as={ReactRouteLink} to="post/create">
            + Add Post
          </Link>
        </HStack>
        {isLoading && <BlogListSkeleton />}
        {data &&
          data.map((post) => (
            <BlogList body={post.body} title={post.title} id={post.id} />
          ))}
      </Stack>
    </Box>
  );
}
