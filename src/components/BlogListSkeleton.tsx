import { Box, Skeleton, VStack } from "@chakra-ui/react";

function BlogListSkeleton() {
  return (
    <VStack spacing={4} align="stretch">
      {[1, 2, 3, 4].map((index) => (
        <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Skeleton height="20px" mb={2} />
          <Skeleton height="16px" mb={2} />
          <Skeleton height="16px" w="80%" />
        </Box>
      ))}
    </VStack>
  );
}

export default BlogListSkeleton;
