import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowUp,FaArrowDown } from "react-icons/fa";

const PortfolioSection=()=> {
	return (
		<HStack justify="space-between"
		 bg="white" 
		 borderRadius="xl" 
		 p="6" 
		 spacing={16}
		 align={{
			base:"flex-start",
			xl:"center",
		 }}
		 flexDir={{
			base:"column",
			xl:"row",
		 }}
		 > 
		<HStack 
	     spacing={{
			base:0,
			xl:16,
		 }}
		 align={{
			base:"flex-start",
			xl:"center",
		 }}
		 flexDir={{
			base:"column",
			xl:"row",
		 }}>
			<Stack> 
		<HStack color="black.80" marginRight="48px">
			<Text fontSize="sm"> Total Portfolio Value</Text>
			<Icon as={FaInfoCircle} />
		</HStack>
		<Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
		</Stack>
		<Stack > 
		<HStack color="black.80" 
		 >
			<Text fontSize="sm">Wallet Balance</Text>
		</HStack> 
		<HStack gap="28px" 
		 align={{
			base:"flex-start",
			sm:"center",
		 }}
		 flexDir={{
			base:"column",
		    sm:"row",
		 }}
		 >
		<HStack>
		<Text textStyle="h2" fontWeight="medium" >22.39401000</Text><Tag colorScheme="gray">BTC</Tag>
		</HStack>
        <HStack>
		<Text textStyle="h2" fontWeight="medium" >₹ 1,300.00</Text><Tag colorScheme="gray">INR</Tag>
		</HStack>
        </HStack>
		</Stack>
		</HStack>
		<HStack  
		
		align={{
			base:"flex-start",
			sm:"center",
		 }}
		 flexDir={{
			base:"column",
		    sm:"row",
		 }}>
			<Button 
			leftIcon={<Icon as={FaArrowDown}/>}
			>Deposite</Button>
			<Button leftIcon={<Icon as={FaArrowUp}/>}>Withdraw</Button>
		</HStack>
		</HStack>
		
	)
}

export default PortfolioSection
