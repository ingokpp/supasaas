import { Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      transition="3s ease"
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      ...
    </Box>
  );
};

export default Sidebar;
