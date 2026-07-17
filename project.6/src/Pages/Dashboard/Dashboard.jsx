import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCards from "./components/InfoCards";

const Dashboard=()=> {
	return (
	     <DashboardLayout title="Dashboard">
		 <Grid 
		  gridTemplateColumns={{
			base:"repeat(1,1fr)",
			xl:"repeat(2,1fr)",
		  }}
		  gap="6"
		  >
			<GridItem colSpan={{
				base:1,
				xl:2,
			}}>
			<PortfolioSection/> 
			</GridItem>
			<GridItem colSpan={1}>
			<PriceSection/> 
			</GridItem>
			<GridItem colSpan={1}>
			<Transactions/> 
			</GridItem>
			<GridItem colSpan={1}>
			<InfoCards imgUrl="/Shapes.png"
			 tagtext="loan"  inverted={false}
			 text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"/> 
			</GridItem>
			<GridItem colSpan={1}>
			<InfoCards imgUrl="/Visual.png"
			 tagtext="contact" inverted={true}
			 text="Learn more about our real estate, mortgage, and  corporate account services"/> 
			</GridItem>
		 </Grid>
			  
		 </DashboardLayout>
	);
};

export default Dashboard