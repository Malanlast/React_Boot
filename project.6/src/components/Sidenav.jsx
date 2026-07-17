import { Box, Flex, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { FcSupport } from "react-icons/fc";
import { Link } from "react-router-dom";
const Sidenav=()=> {
   const navLinks=[
	{
	icon:BiSolidDashboard,
	text:"Dashboard",
	link:"/",
	},
	{
	icon :GrTransaction,
	text:"GrTransaction",
	link:"/transaction",
	},


   ];

	return (
		 
		<Stack bg="white"
		 justify="space-between"
		  boxShadow={{
			base:"none",
			lg:"lg",
		  }}
		  
		   w={{
			base:"full",
			lg:"16rem",
			 
		   }}
		   h="100vh" >
		<Box>
			<Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">@Once Upon a Time</Heading>
		<Box mt="6" mx="3">
			{
				navLinks.map((nav)=>(
					<Link to={nav.link} key={nav.text} >
				 <HStack borderRadius="10px" py="3" px="4" _hover={{
					bg:"#f3f3f7",
					color:"#171717",
				}}
				color="#797e82"
				>
					<Icon as={nav.icon}/>
					<Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
				</HStack>
				</Link>
			))
			}
			</Box>
		</Box>
			<Box mt="6" mx="3" mb="3">
			<Link to={"/support"} > 
			 <HStack borderRadius="10px" 
			 py="3" 
			 px="4"
			  _hover={{
					bg:"#f3f3f7",
					color:"#171717",
				}}
				color="#797e82"
				>
					<Icon as={FcSupport}/>
					<Text fontSize="14px" fontWeight="medium">
					Supports
					</Text>
				</HStack>
				</Link></Box>
		</Stack>
		 
	);
};

export default Sidenav;