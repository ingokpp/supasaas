import {
  Box,
  Flex,
  Icon,
  IconProps,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../components/ui/Logo";

interface AppLayoutProps {
  page: React.ReactNode;
}

const AuthLayout = (props: AppLayoutProps) => {
  const { page } = props;
  return (
    <Box position={"relative"}>
      <Flex
        direction={"column"}
        pt={{ base: 10, sm: 16, lg: "60px" }}
        px={2}
        alignItems={"center"}
      >
        <Logo />
        <Stack
          mt={12}
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 6, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          w={"full"}
          maxW={{ lg: "lg" }}
        >
          {page}
        </Stack>
      </Flex>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        filter={{ base: "blur(45px)", md: "blur(70px)" }}
      />
    </Box>
  );
};

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={-1}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default AuthLayout;
