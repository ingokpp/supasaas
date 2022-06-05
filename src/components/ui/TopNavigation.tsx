import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { useUser } from "../../hooks/useUser";
interface TopNavigationProps extends FlexProps {
  onOpen: () => void;
}

const TopNavigation = (props: TopNavigationProps) => {
  const { onOpen, ...rest } = props;
  const { isLoading, userDetails } = useUser();

  return (
    <Flex
      ml={{ base: 0, md: 72 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"white"}
      borderBottomWidth="1px"
      borderBottomColor={"gray.200"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      {!isLoading && userDetails && (
        <HStack spacing={{ base: "0", md: "6" }}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} src={userDetails.avatar_url} />
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList bg={"white"} borderColor={"gray.200"}>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => supabaseClient.auth.signOut()}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      )}
    </Flex>
  );
};

export default TopNavigation;
