import { Box, Button, Flex, HStack, VStack, Icon, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { BsFileEarmarkMedical, BsCaretRightFill } from "react-icons/bs";
import { MdFormatListBulleted, MdSettings, MdImportantDevices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiFileUserLine } from "react-icons/ri";
import { BiVideoRecording } from "react-icons/bi";
import SelectDevice from "./SelectDevice";

function landing() {
	return (
		<Box width='full' height='full'>
			<VStack width='full' height='full' gap={0}>
				<Flex justifyContent='space-between' width='full' px='1rem' py='0.5rem' bg='primary.400'>
					<HStack gap={0}>
						<VStack color={"secondary.400"}>
							<Icon as={BsFileEarmarkMedical} boxSize={8} />
							<Text>New Surgery</Text>
						</VStack>
						<Icon as={BsCaretRightFill} boxSize={4} />
						<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
						<HStack gap={4} height='full'>
							<VStack color={"secondary.400"}>
								<Icon as={MdImportantDevices} boxSize={8} />
								<Text>Select Device</Text>
							</VStack>
							<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
							<VStack color={"secondary.400"}>
								<Icon as={RiFileUserLine} boxSize={8} />
								<Text>New Case</Text>
							</VStack>
							<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
							<VStack color={"secondary.400"}>
								<Icon as={BiVideoRecording} boxSize={8} />
								<Text>Record</Text>
							</VStack>
							<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
						</HStack>
					</HStack>
					<HStack gap={4}>
						<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
						<VStack color={"secondary.400"}>
							<Icon as={MdFormatListBulleted} boxSize={8} />
							<Text>Surgery Info</Text>
						</VStack>
						<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
						<VStack color={"secondary.400"}>
							<Icon as={MdSettings} boxSize={8} />
							<Text>Settings</Text>
						</VStack>
						<Divider orientation='vertical' borderLeftWidth='thin' borderStyle='solid' borderColor='whiteAlpha.600' />
						<VStack color={"secondary.400"}>
							<Icon as={CgProfile} boxSize={8} />
							<Text>User Profile</Text>
						</VStack>
					</HStack>
				</Flex>
				<Flex justifyContent='space-between' flex={1} bg='secondary.400' width='full' margin='10rem'>
					<Box>
						<SelectDevice />
					</Box>
				</Flex>
			</VStack>
		</Box>
	);
}

export default landing;
