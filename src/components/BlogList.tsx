import {
  Box,
  Link,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactRouteLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useDeletePost } from "../hooks/post";
type Props = { id: number; title: string; body: string };
function BlogList({ title, id, body }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { mutate, isLoading } = useDeletePost();
  const toast = useToast();
  const handleDelete = () => {
    mutate(1, {
      onSuccess: () => {
        onClose();
        toast({
          title: "Post Deleted",
          description: "The post has been deleted.",
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
            "An error occurred while deleted the post. Please try again later.",
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      },
    });
  };
  return (
    <>
      <Link as={ReactRouteLink} to={`post/${id}`}>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <HStack justifyContent="space-between">
            <Heading as="h2" size="xl" mb={2}>
              {title}
            </Heading>
            <Menu
              isOpen={showMenu}
              onOpen={() => setShowMenu(true)}
              onClose={() => setShowMenu(false)}
            >
              <MenuButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowMenu((prev) => !prev);
                }}
                as={IconButton}
                icon={<ChevronDownIcon />}
                variant="ghost"
                size="sm"
              />
              <MenuList>
                <MenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    navigate(`post/${id}/edit`);
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onOpen();
                  }}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Text color="gray.500" fontSize="sm" mb={4}>
            January 1, 2023
          </Text>
          <Text>{body}</Text>
        </Box>
      </Link>
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDelete}
        isLoading={isLoading}
      />
    </>
  );
}

export default BlogList;
