import { Box, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuList } from "@chakra-ui/react"
 import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
 const TopNav=({title,onOpen})=> {
	return (
		<Box px="4" bg="white">
			<HStack
			maxW="70rem" 
			h="16" 
			mx="auto"
			justify="space-between"
			 >
			 <Icon as={FaBars} onClick={onOpen}
				display={{
					base:"block",
                    lg:"none",
				}}
			 /> 
				<Heading 
				 
				 fontWeight="medium" fontSize="28px" >
                  {title}
				</Heading>
				<Menu>
					<MenuButton>
						<Icon as={IoMdContact} fontSize="45px"/>
					</MenuButton>
					<MenuList>
						<MenuList>Log Out</MenuList>
						<MenuList>Support</MenuList>
					</MenuList>
				</Menu>
				 
			</HStack>
			</Box>
	)
}

export default TopNav

