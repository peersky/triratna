"use client";

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    Link,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaSoundcloud, FaEthereum } from "react-icons/fa";

export default function SocialProfileWithImage({
    name,
    url,
    avatar,
    role,
    x,
    linkedIn,
}: {
    name: string;
    url: string;
    avatar: string;
    role: string;
    x: string;
    linkedIn: string;
}) {
    return (
        <Center py={6}>
            <Box
                maxW={"270px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
            >
                <Image
                    h={"120px"}
                    w={"full"}
                    src={
                        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    }
                    objectFit="cover"
                    alt="#"
                />
                <Flex justify={"center"} mt={-12}>
                    <Avatar
                        size={"xl"}
                        src={avatar}
                        css={{
                            border: "2px solid white",
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={"center"} mb={5}>
                        <Heading
                            fontSize={"2xl"}
                            fontWeight={500}
                            fontFamily={"body"}
                        >
                            {name}
                        </Heading>
                        <Text color={"gray.500"}>{role}</Text>
                    </Stack>

                    <Stack
                        direction={"row"}
                        maxH="48px"
                        justify={"center"}
                        spacing={6}
                    >
                        {/*  <Text>
                            {" "}
                            aksjdajldnlandlkandklankldnakldnklandklandklankldankldnaklndkalndkl
                            nkl nakldn lnkdnal nakldnaklndklandklna n n ldaldl
                        </Text>*/}

                        <Link href={linkedIn} width="fit-content" isExternal>
                            <IconButton
                                variant="outline"
                                colorScheme="black"
                                aria-label="my Github"
                                fontSize="24px"
                                size="m"
                                p={1}
                                icon={<FaLinkedin />}
                            />
                        </Link>
                        <Link isExternal href={x} width="fit-content">
                            <IconButton
                                variant="outline"
                                colorScheme="black"
                                aria-label="my Github"
                                fontSize="24px"
                                size="m"
                                p={1}
                                icon={<FaXTwitter />}
                            />
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}
