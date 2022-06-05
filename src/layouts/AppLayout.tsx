import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Sidebar } from "../components/ui/Sidebar";
import TeamSidebar from "../components/ui/TeamSidebar";
import TopNavigation from "../components/ui/TopNavigation";

interface AppLayoutProps {
  page: React.ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const { page } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={"gray.100"}>
      <TeamSidebar />
      <Sidebar
        onClose={() => onClose}
        left={16}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <TopNavigation onOpen={onOpen} />
      <Box ml={{ base: 0, md: 72 }} p="4">
        {page}
      </Box>
    </Box>
  );
};

export default AppLayout;
