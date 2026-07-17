import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"

const InfoCards=({imgUrl,text,tagtext,inverted})=> {
	return (
		<CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat"
		bgColor ={inverted ? "p.purple" : "white"}
		>
			<Tag bg={inverted  ? "white" : "p.purple"} 
			
			color={inverted ? "p.purple":"white"} borderRadius="full">{tagtext}</Tag>
			<Text color={inverted ? "white":"black"} mt="4" fontWeight="medium" textStyle="h5">
				 {text}
			</Text>
		</CustomCard>
	)
}

export default InfoCards
