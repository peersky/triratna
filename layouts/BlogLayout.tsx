// import React from "react";
import { getDefaultLayout, getBreadcrumbLayout } from ".";
import {
    Flex,
    chakra,
    Heading,
    Text,
    Image,
    UnorderedList,
    ListItem,
    OrderedList,
    Center,
    Tag,
    useColorModeValue,
    Spacer,
    Box,
    Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { renderToString } from "react-dom/server";
// import {MDXCom}

const H1 = ({
    id,
    children,
}: {
    children?: React.ReactNode | null | undefined;
    id?: string;
}) => (
    <Link href={`#${id}`}>
        <NextLink href={`#${id}`}>
            <Heading id={id} as="h1" size="xl" borderBottomWidth={"3px"} my={8}>
                {children}
            </Heading>
        </NextLink>
    </Link>
);
const H2 = ({
    id,
    children,
}: {
    children?: React.ReactNode | null | undefined;
    id?: string;
}) => (
    <Link href={`#${id}`}>
        <NextLink href={`#${id}`}>
            <Heading id={id} as="h2" size="lg" borderBottomWidth={"2px"} my={6}>
                {children}
            </Heading>
        </NextLink>
    </Link>
);
const H3 = ({
    id,
    children,
}: {
    children?: React.ReactNode | null | undefined;
    id?: string;
}) => (
    <Link href={`#${id}`}>
        <NextLink href={`#${id}`}>
            <Heading id={id} as="h3" size="md" my={4}>
                {children}
            </Heading>
        </NextLink>
    </Link>
);

const H4 = ({
    id,
    children,
}: {
    children?: React.ReactNode | null | undefined;
    id?: string;
}) => (
    <Link href={`#${id}`}>
        <NextLink href={`#${id}`}>
            <Heading id={id} as="h4" size="md" my={2} fontWeight="bold">
                {children}
            </Heading>
        </NextLink>
    </Link>
);
const P = (props: any) => (
    <chakra.span py={2} fontSize={"sm"}>
        {props.children}
    </chakra.span>
);
const ResponsiveImage = (props: any) => {
    const docsImportPath = "rankify-contracts/docs";
    const imgSrc = !props.src.startsWith(docsImportPath)
        ? props.src
        : props.src.slice(docsImportPath.length);

    return (
        <Center>
            <Image
                mt={4}
                mb={1}
                // {...props}
                alt={props.alt}
                src={imgSrc}
                w={
                    props.alt.endsWith("fullwidth")
                        ? "100%"
                        : props.alt.endsWith("small")
                        ? "220px"
                        : props.alt.endsWith("medium")
                        ? "480px"
                        : ["100%", "75%", "50", null, "50%"]
                }
            />
        </Center>
    );
};

const A = (props: any) => (
    <Link
        href={props.href}
        textColor={useColorModeValue("blue.600", "blue.300")}
    >
        {props.children}
    </Link>
);

const UL = (props: any) => (
    <UnorderedList my={0} spacing={1}>
        {props.children}
    </UnorderedList>
);

const OL = (props: any) => <OrderedList my={4}>{props.children}</OrderedList>;

export const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    img: ResponsiveImage,
    ul: UL,
    ol: OL,
    li: ListItem,
    a: A,
    blockquote: (props: any) => (
        <Box borderLeftWidth={2} pl={2} fontStyle={"italic"} fontSize={"lg"}>
            <Heading display="-webkit-inline-box">"</Heading>
            {props.children}
            <Heading display="-webkit-inline-box">"</Heading>
        </Box>
    ),
};

const BlogLayout = ({ children, ...props }: { children?: any }) => {
    const contentString = renderToString(children);
    const getHeadings = (source) => {
        const regex = /<h2>(.*?)<\/h2>/g;

        if (source.match(regex)) {
            return source.match(regex).map((heading) => {
                const headingText = heading
                    .replace("<h2>", "")
                    .replace("</h2>", "");

                const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

                return {
                    text: headingText,
                    link,
                };
            });
        }

        return [];
    };
    const headings = getHeadings(contentString);
    return (
        <Flex
            id="Blog"
            px={["12px", "12px", "20%"]}
            mt={8}
            mb="220px"
            direction="column"
            maxW={"2048px"}
            flexBasis="200px"
            flexGrow={1}
            // {...props}
        >
            <Flex direction={"row"} flexWrap="wrap">
                {headings.length > 0 ? (
                    <ol>
                        {headings.map((heading) => (
                            <li key={heading.text}>
                                <a href={heading.link}>{heading.text}</a>
                            </li>
                        ))}
                    </ol>
                ) : null}
                {/* {tags &&
          tags.map((tag) => (
            <Tag colorScheme={"blue"} variant={"outline"} key={`${tag}`}>
              {tag}
            </Tag>
          ))} */}
                <Spacer />
                {!!children.props?.meta?.date && children.props?.meta?.date}
            </Flex>
            <MDXProvider components={components} disableParentContext={true}>
                {children}
            </MDXProvider>
        </Flex>
    );
};

const BL = chakra(BlogLayout);
export const getBlogLayout = () => (page: any) =>
    getDefaultLayout(getBreadcrumbLayout(<BL>{page}</BL>));
