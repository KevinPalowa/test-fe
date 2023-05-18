import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { useGetPost } from "../../hooks/post";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";
import Loading from "../../components/Loading";
import { Link as ReactRouteLink } from "react-router-dom";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetPost(Number(id));
  useDocumentTitle(data ? data.title : "Post");
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} maxW="900px" mx="auto">
      <Heading as="h2" size="xl" mb={2}>
        {data.title}
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={4}>
        January 1, 2023
      </Text>
      <Text>{data.body}</Text>
      <Link as={ReactRouteLink} mt={4} color="blue.500" to="/">
        &larr; Back to blog
      </Link>
    </Box>
  );
}
