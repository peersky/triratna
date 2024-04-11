"use client";

import { ReactNode } from "react";
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

export default function StatsGridWithImage(props: any) {
    const bgColor = useColorModeValue("gray.50", "gray.800");
    return (
        <Box
            position={"relative"}
            bgColor={bgColor}
            boxShadow={"xl"}
            mt={props.mt}
        >
            <Container maxW={"7xl"} zIndex={10} position={"relative"}>
                <Stack direction={{ base: "column", lg: "row" }}>
                    <Stack
                        flex={1}
                        justify={{ lg: "center" }}
                        py={{ base: 4, md: 10, xl: 30 }}
                    >
                        <Box mb={{ base: 8, md: 20 }}>
                            <Text
                                fontFamily={"heading"}
                                fontWeight={700}
                                textTransform={"uppercase"}
                                mb={3}
                                fontSize={{ base: "sm", lg: "xl" }}
                            >
                                {props.caption}
                            </Text>
                            <Heading
                                mb={5}
                                fontSize={{ base: "3xl", md: "5xl" }}
                            >
                                {props.title}
                            </Heading>
                            <Text fontSize={"xl"} color={"gray.400"}>
                                {props.body}
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {props?.stats?.map((stat, idx) => (
                                <Box key={stat.title + idx}>
                                    <Text
                                        fontFamily={"heading"}
                                        fontSize={"3xl"}
                                        mb={3}
                                    >
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={"xl"}>{stat.content}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={"span"} fontWeight={700}>
        {children}
    </Text>
);
