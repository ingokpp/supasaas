import { Box } from "@chakra-ui/react";
import { Sidebar } from "../components/ui/Sidebar";

interface AppLayoutProps {
  page: React.ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const { page } = props;
  return (
    <Box minH="100vh" bg={"gray.100"}>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {page}
      </Box>
    </Box>
  );
};

export default AppLayout;
