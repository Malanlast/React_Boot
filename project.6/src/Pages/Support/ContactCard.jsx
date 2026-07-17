import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { CiMail } from "react-icons/ci";const ContactCard=()=> {
	return (
		<Card p="6" borderRadius="1rem" flexGrow={1}>
					<Stack spacing={6}> 
						<Text fontWeight="medium" fontSize="sm" >You will receive response within 24 hours of time of submit.</Text>
					 
					<HStack
					flexDir={{
					base:"column",
					md:"row",
				}}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input placeholder='Enter Name'/>
						</FormControl>
						<FormControl>
						<FormLabel>Surname</FormLabel>
							<Input placeholder='Enter surname'/>
						</FormControl>
					</HStack>
						<FormControl>
						<FormLabel>Email</FormLabel>
							<Input type='email' placeholder='Enter email'/>
						</FormControl>
							<FormControl>
						<FormLabel>Text</FormLabel>
							<Textarea placeholder='Enter text'/>
						</FormControl>
						<Checkbox defaultChecked> 
						<Text fontSize="xs">
							I agree with 
							<Box as="span" color="p.purple" gap="2px">
								  {" "}    term & condition.
							</Box>
						</Text>
						</Checkbox>
						<Stack>
							<Button fontSize="sm">Send a Message</Button>
							<Button fontSize="sm" colorScheme='gray'>Book a Meeting</Button>
						</Stack>
						</Stack>
					</Card>
	)
}

export default ContactCard
