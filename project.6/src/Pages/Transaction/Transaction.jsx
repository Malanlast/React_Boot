import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { FaDownload } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { IoSearch } from "react-icons/io5";
import TransactionTable from "../Dashboard/components/TransactionTable";
const TransactionPage=()=> {

	const tabs=[
		{
			name:"All",
			count:349,
		},
		{
			name:"Deposit",
			count:114,
		},
		{
			name:"Withdraw",
			count:55,
		},
		{
			name:"Trade",
			count:349,
		},
	];
	return ( 
		<DashboardLayout  >
		<Flex justify="end"   mb="3"    >
			<Button leftIcon={<Icon as={FaDownload}/>}>Export CVS</Button>
		</Flex>
			<Card  borderRadius="1rem"><Tabs>
  <TabList pt="4" display="flex" w="full" justifyContent="space-between">
<HStack> 
  {
	tabs.map((tab)=>(
	<Tab key={tab.name} display="flex" gap="2">{tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
	</Tab>
	))
  }
  </HStack>
         <InputGroup maxW="200px" pr="5" pb="4">
    <InputLeftElement pointerEvents='none'>
      <Icon as={IoSearch}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' />
  </InputGroup>
  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs></Card>
		</DashboardLayout>
	)
}

export default TransactionPage
