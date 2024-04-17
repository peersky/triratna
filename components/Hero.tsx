import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

const SimpleHero = () => {
    return (
        <>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Your gateway <br />
                        <Text as={"span"} color={"green.400"}>
                            Into sustainable future
                        </Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        Ensure longevity your company and community by
                        incorporating state of art research technologies in
                        community building and trust generation.
                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <Button
                            colorScheme={"green"}
                            bg={"green.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "green.500",
                            }}
                        >
                            Contact us to learn more
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default SimpleHero;
