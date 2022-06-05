import { Box, Flex, Heading } from "@chakra-ui/react";
import { TiFlash } from "react-icons/ti";

const Logo = () => {
  return (
    <Flex alignItems={"center"} gap={3}>
      <Box
        bgGradient="linear(to-r, gray.600, gray.900)"
        rounded="2xl"
        p={2}
        color="white"
      >
        <TiFlash fontSize={45} />
      </Box>
      <Heading
        bgGradient="linear(gray.600, gray.900)"
        bgClip={"text"}
        userSelect="none"
      >
        SupaRetro
      </Heading>
    </Flex>
  );
};

export default Logo;
