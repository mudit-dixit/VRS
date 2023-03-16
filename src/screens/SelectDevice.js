import React, { useState } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Container,
	Divider,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Input,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useDisclosure,
	useRadio,
	useRadioGroup,
} from '@chakra-ui/react';
import _, { reduce, remove } from 'lodash';

const data = {
	source: [
		{ sourceId: 'source1', camera: ['camera1', 'camera2'] },
		{ sourceId: 'source2', camera: ['camera3', 'camera4'] },
		{ sourceId: 'source3', camera: ['camera5', 'camera6'] },
		{ sourceId: 'source4', camera: ['camera7', 'camera8'] },
	],
	videoFormat: [
		'1280 x 720p',
		'1920 x 1080p',
		'2560 x 1440p',
		'3840 x 2160p',
	],
	monitors: ['Monitor 1', 'Monitor 2', 'Monitor 3'],
	audioInput: ['MicroPhone 1', 'MicroPhone 2'],
};

function SelectDevice() {
	const [currentCamera, setCurrentCamera] = useState();
	const [currentCameraName, setCurrentCameraName] = useState();
	const [cameraSourceId, setCameraSourceId] = useState();
	const [source, setSource] = useState([
		{ sourceId: 'source1', camera: ['camera1', 'camera2'] },
		{ sourceId: 'source2', camera: ['camera3', 'camera4'] },
		{ sourceId: 'source3', camera: ['camera5', 'camera6'] },
		{ sourceId: 'source4', camera: ['camera7', 'camera8'] },
	]);
	const {
		isOpen: isConnectCameraOpen,
		onOpen: onisConnectCameraOpenOpen,
		onClose: onisConnectCameraOpenClose,
	} = useDisclosure();
	const {
		isOpen: isAddDeviceOpen,
		onOpen: onAddDeviceOpen,
		onClose: onAddDeviceClose,
	} = useDisclosure();
	const {
		isOpen: isSaveOpen,
		onOpen: onSaveOpen,
		onClose: onSaveClose,
	} = useDisclosure();
	function handleCameraInput(e) {
		setCurrentCameraName(e.target.value);
	}
	function onRest() {
		setSource([
			{ sourceId: 'source1', camera: ['camera1', 'camera2'] },
			{ sourceId: 'source2', camera: ['camera3', 'camera4'] },
			{ sourceId: 'source3', camera: ['camera5', 'camera6'] },
			{ sourceId: 'source4', camera: ['camera7', 'camera8'] },
		]);
	}
	return (
		<Box>
			<Box>Select Source</Box>

			<Modal
				isOpen={isConnectCameraOpen}
				onClose={onisConnectCameraOpenClose}
				size="4xl"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>connect {currentCamera}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{renderConnectCameraModal(
							cameraSourceId,
							currentCamera
						)}
					</ModalBody>

					<ModalFooter>
						<Button
							variant="ghost"
							onClick={onisConnectCameraOpenClose}
						>
							Save
						</Button>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onisConnectCameraOpenClose}
						>
							reset
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Modal isOpen={isAddDeviceOpen} onClose={onAddDeviceClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Camera Name</FormLabel>
							<Input
								type="name"
								onChange={(e) => {
									handleCameraInput(e);
								}}
							/>
							<FormLabel>Camera Ip</FormLabel>
							<Input type="name" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onAddDeviceClose}
						>
							Close
						</Button>
						<Button
							variant="ghost"
							onClick={() => addCamera(cameraSourceId)}
						>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Modal onClose={onSaveClose} isOpen={isSaveOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Saved Successfully</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>
					<ModalFooter>
						<Button onClick={onSaveClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Tabs variant="unstyled">
				{' '}
				<Grid templateColumns="repeat(5, 1fr)" gap={4}>
					<GridItem colSpan={2} h="10">
						<TabList>
							{source.map((e) => {
								return (
									<Tab
										_selected={{
											color: 'white',
											bg: 'green.400',
										}}
									>
										{e.sourceId}
									</Tab>
								);
							})}
						</TabList>
					</GridItem>
					<GridItem colStart={4} colEnd={6} h="10">
						<Stack spacing={4} direction="row" align="center">
							<Button
								colorScheme="teal"
								size="xs"
								onClick={() => onRest()}
							>
								Reset
							</Button>
							<Button
								colorScheme="teal"
								size="xs"
								onClick={onSaveOpen}
							>
								Save
							</Button>
						</Stack>
					</GridItem>
				</Grid>
				<TabPanels>
					{source.map((e) => {
						return (
							<TabPanel>
								{renderSelectsSource(e.sourceId)}
							</TabPanel>
						);
					})}
				</TabPanels>
			</Tabs>
		</Box>
	);

	function handelOpenConnectCamera(cameraSourceId, cameraId) {
		onisConnectCameraOpenOpen();
		setCurrentCamera(cameraId);
		setCameraSourceId(cameraSourceId);
	}

	function handelOpenAddCamera(cameraSourceId) {
		onAddDeviceOpen();
		setCameraSourceId(cameraSourceId);
	}

	function renderSelectsSource(sourceId) {
		let cameraSource = source.find((o) => o.sourceId === sourceId);
		if (cameraSource) {
			return (
				<>
					<HStack spacing="24px">
						{cameraSource.camera.map((e) => {
							return (
								<Box>
									{' '}
									<Card maxW="sm">
										<CardBody>
											<Image src="" borderRadius="lg" />
											<Stack mt="6" spacing="3">
												<Heading size="md">{e}</Heading>
												<Text>IP Camera</Text>
											</Stack>
										</CardBody>
										<Divider />
										<CardFooter>
											<ButtonGroup spacing="2">
												<Button
													onClick={() =>
														handelOpenConnectCamera(
															cameraSource.sourceId,
															e
														)
													}
												>
													Connect
												</Button>
												<Button
													onClick={() =>
														removeCamera(
															cameraSource.sourceId,
															e
														)
													}
													variant="ghost"
													colorScheme="blue"
												>
													Remove
												</Button>
											</ButtonGroup>
										</CardFooter>
									</Card>
								</Box>
							);
						})}
						<Box>
							{' '}
							<Card maxW="sm">
								<CardBody>
									<Image src="" borderRadius="lg" />
									<Stack mt="6" spacing="3">
										<Heading size="md">Device Name</Heading>
										<Text>IP Camera</Text>
									</Stack>
								</CardBody>
								<Divider />
								<CardFooter>
									<ButtonGroup spacing="2">
										<Button
											onClick={() =>
												handelOpenAddCamera(
													cameraSource.sourceId
												)
											}
										>
											Add Device
										</Button>
									</ButtonGroup>
								</CardFooter>
							</Card>
						</Box>
					</HStack>
				</>
			);
		}
	}

	function renderConnectCameraModal(cameraSourceId, cameraId) {
		return (
			<Box>
				<Menu closeOnSelect={false}>
					<MenuButton as={Button}>
						Select Video Format Size
					</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup
							title="Select Video Format Size"
							type="checkbox"
						>
							{_.map(data.videoFormat, (element) => {
								return (
									<MenuItemOption value={element}>
										{element}
									</MenuItemOption>
								);
							})}
						</MenuOptionGroup>
					</MenuList>
				</Menu>
				<Menu closeOnSelect={false}>
					<MenuButton as={Button}>Select Monitor</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup title="Select Monitor" type="checkbox">
							{_.map(data.monitors, (element) => {
								return (
									<MenuItemOption value={element}>
										{element}
									</MenuItemOption>
								);
							})}
						</MenuOptionGroup>
					</MenuList>
				</Menu>
				<Menu closeOnSelect={false}>
					<MenuButton as={Button}>Select audio input</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup
							title="Select audio input"
							type="checkbox"
						>
							{_.map(data.audioInput, (element) => {
								return (
									<MenuItemOption value={element}>
										{element}
									</MenuItemOption>
								);
							})}
						</MenuOptionGroup>
					</MenuList>
				</Menu>
			</Box>
		);
	}

	function addCamera(sourceId) {
		console.log(source);

		let array = [];
		source.reduce(function (x, n) {
			if (n.sourceId == sourceId) {
				n.camera.push(currentCameraName);
				array.push(n);
				setCurrentCameraName('');
			} else {
				array.push(n);
			}
		}, 0);
		setSource(array);
		onAddDeviceClose();
	}

	function removeCamera(cameraSourceId, cameraId) {
		console.log(cameraSourceId);

		let array = source.find((o) => o.sourceId == cameraSourceId);
		console.log(array);
		array.camera = _.remove(array.camera, function (n) {
			if (n != cameraId) {
				return n;
			}
		});
		let array2 = [];
		source.reduce(function (x, n) {
			if (n.sourceId == cameraSourceId) {
				array2.push(array);
			} else {
				array2.push(n);
			}
		}, 0);
		setSource(array2);
	}

	function onSave() {}
}

export default SelectDevice;
