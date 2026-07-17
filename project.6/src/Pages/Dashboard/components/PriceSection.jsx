import {Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6"
 const PriceSection=()=> {
	const timestamps=["7:15 PM","7:55 PM","8:15 PM","8:55 PM","9:55 PM","10:55 PM"]
	return <CustomCard>
	<Flex justify="space-between" align="start" >
	<Stack> 	 
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
				 
				<Text textStyle="h2" fontWeight="medium" >22.39401000</Text>{""} 
				 </HStack>
				 <Icon as={BsArrowUpRight}/>
				<Text fontWeight="medium" color="green"  fontSize="sm" textStyle="h2"   >22%</Text>{""}  
				 </HStack>
	    </Stack>
		<Button leftIcon={<Icon as={FaPlusCircle}/>}>Buy</Button>
		<Button leftIcon={<Icon as={FaCircleMinus}/>}>Sell</Button>
				</Flex>
				<Tabs variant='soft-rounded' >
				<Flex justify="end"  > 
				<TabList bg="black.5" p="3px" >
				{["1H", "1D", "1W", "1M"].map((tab)=>
				<Tab _selected={{bg:"white"}} key={tab}fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
				)}
				</TabList>
				</Flex>
				<TabPanels>
					<TabPanel>
					<p>one!</p>
					</TabPanel>
					<TabPanel>
					<p>two!</p>
					</TabPanel>
				</TabPanels>
				</Tabs>
		 <Image width="100%" src="/Graph.png" mt="3rem"/>
	     <HStack justify="space-between">
			{
				timestamps.map((timestamp)=>
				<Text key ={timestamp} fontSize="sm" color="black.88">
					{timestamp}
				</Text>)
			}
		 </HStack>
	</CustomCard>
}

export default PriceSection
