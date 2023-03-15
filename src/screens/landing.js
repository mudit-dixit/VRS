import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";

function landing() {
	return (
		<Box width='full' height='full'>
			<VStack width='full' height='full' gap={0}>
				<Flex justifyContent='space-between' width='full' p='1rem'>
					<HStack>
						<Button variant='primary'>New Surgery</Button>
					</HStack>
					<HStack>
						<Button size='xl' variant='with-shadow'>
							Surgery Info
						</Button>
						<Button>Settings</Button>
						<Button>User Profile</Button>
					</HStack>
				</Flex>
				<Flex justifyContent='space-between' flex={1} bg='secondary.400' width='full' margin='10rem'>
					<Box>
						<span>Body</span>
					</Box>
				</Flex>
			</VStack>
		</Box>
	);
}

export default landing;
