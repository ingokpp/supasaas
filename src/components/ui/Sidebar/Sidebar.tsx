import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { onClose, ...rest } = props;
  return (
    <Box
      as="aside"
      transition="5s ease-in-out"
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 56 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
    </Box>
  );
};

export default Sidebar;
