import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../../../utils/supabaseClient";

interface LogInFormData {
  email: string;
  password: string;
}

const LogInForm = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>();

  const onSubmit = async (data: LogInFormData) => {
    setLoading(true);
    const { error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast({
        title: "Log in failed.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      router.replace("/");
    }

    setLoading(false);
  };

  const handleSocialLogIn = async (
    e: React.MouseEvent<HTMLButtonElement>,
    provider: "google" | "github"
  ) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({
      provider: provider,
    });
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={errors.email ? true : false}>
          <Input
            variant={"filled"}
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password ? true : false}>
          <Input
            variant={"filled"}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </FormControl>
      </Stack>
      <Button
        type="submit"
        variant={"primary"}
        mt={8}
        w={"full"}
        isLoading={loading}
        loadingText="Submitting"
      >
        Log in
      </Button>
      <Box pos={"relative"}>
        <Divider mt={12} />
        <Flex
          pos={"absolute"}
          top={-3}
          left={0}
          right={0}
          justifyContent={"center"}
        >
          <Text
            px={4}
            bg={"gray.50"}
            userSelect={"none"}
            color={"gray.500"}
            fontWeight="medium"
          >
            or
          </Text>
        </Flex>
      </Box>
      <Stack mt={12} spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<FaGithub />}
          onClick={(e) => handleSocialLogIn(e, "github")}
        >
          Continue with GitHub
        </Button>
        <Button
          variant={"outline"}
          leftIcon={<FcGoogle />}
          onClick={(e) => handleSocialLogIn(e, "google")}
        >
          Continue with Google
        </Button>
        <Button
          variant={"outline"}
          leftIcon={<FaApple />}
          disabled
          title="coming soon"
        >
          Continue with Apple
        </Button>
      </Stack>
    </Box>
  );
};

export default LogInForm;
