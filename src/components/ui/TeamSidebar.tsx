import { Avatar, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const TeamSidebar = () => {
  return (
    <Flex
      as="aside"
      display={{ base: "none", md: "flex" }}
      direction="column"
      alignItems={"center"}
      gap={3}
      bg={"gray.900"}
      w={16}
      pos={"fixed"}
      h={"full"}
      p={3}
    >
      <Tooltip
        hasArrow
        ml={3}
        bg={"black"}
        p={3}
        rounded={"md"}
        label={"Ingo's Team"}
        placement={"right"}
      >
        <Avatar
          rounded={"2xl"}
          w={"40px"}
          h={"40px"}
          name="Ingo's Team"
          userSelect={"none"}
        />
      </Tooltip>
      <Tooltip
        hasArrow
        ml={3}
        bg={"black"}
        p={3}
        rounded={"md"}
        label={"Add a new Team"}
        placement={"right"}
      >
        <IconButton
          bg="gray.700"
          _hover={{
            bg: "pink.700",
          }}
          color="white"
          aria-label="Add new Team"
          icon={<FiPlus />}
          rounded="2xl"
          w={"40px"}
          h={"40px"}
        />
      </Tooltip>
    </Flex>
  );
};

export default TeamSidebar;
