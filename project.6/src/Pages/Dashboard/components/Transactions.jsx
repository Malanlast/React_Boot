import { Box, Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import { PiCurrencyBtcFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { CustomCard } from "../../../Chakra/CustomCard"
import { Fragment } from "react";

const Transactions=()=> {
	const transactions=[{
		id:"1",
		icon:RiMoneyRupeeCircleFill,
		text:"INR Deposite",
		amount:"+ ₹81,123.18",
		timestamp:"2022-06-09 7:06 PM",
	},{
		id:"2",
		icon:PiCurrencyBtcFill,
		text:"BTC Sell",
		amount:"- 12.48513391 BTC",
		timestamp:"2022-05-27 12:32 PM",
	},{
		id:"3",
		icon:RiMoneyRupeeCircleFill,
		text:"INR Deposite",
		amount:"+ ₹81,123.18",
		timestamp:"2022-06-09 7:06 PM",
	},
];
	return (
		<CustomCard h="full">
			<Text nb="6" fontSize="sm" color="black.80">
				Recent Transactions
			</Text>
			<Stack spacing={4} mt="6">
				{transactions.map((transaction,i)=>(
					 <Fragment key={transaction.id}>
					 {i===!0 && <Divder />}
						<Flex gap="6" >
						<Grid placeItems= "center" bg="black.5" boxSize={10} borderRadius="full">
							<Icon as={transaction.icon}/>
						</Grid>
						<Flex marginBottom="32px" justify="space-between" w="full">
							<Stack spacing={0}>
								<Text textStyle="h6">
									{transaction.text}
								</Text>
								<Text fontSize="sm" color="black.80">
									{transaction.timestamp}
								</Text>
							</Stack>
							<Text textStyle="h6">
									{transaction.amount}
								</Text>
						</Flex>
					</Flex>
					 </Fragment>
				))}
			</Stack>
			<Button w="full" colorScheme="gray" mt="6">View All</Button>
		</CustomCard>
	)
}

export default Transactions
