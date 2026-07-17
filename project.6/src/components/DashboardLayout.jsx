import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./Sidenav"
import TopNav from "./TopNav"
import React from 'react'
import SideDrawer from "./SideDrawer";
 const DashboardLayout=({title,children})=> {
	const{isOpen,onClose,onOpen}=useDisclosure();
	return (
		 <Flex>
		 <Box display={{
			base:"none",
			lg:"flex",
		 }}>
			<Sidenav />
		 </Box>
		 
		<SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
				<TopNav  onOpen={onOpen} title={title}/>
				<Container overflowX="hidden" overflowY="auto" h="calc(100vh-88px)" mt="7" maxW="70rem" >{children}</Container>
				 </Box>
		</Flex>
	);
};

export default DashboardLayout
