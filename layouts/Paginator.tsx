import React, { ReactNode, useContext } from "react";

import {
    Flex,
    Button,
    ButtonGroup,
    Select,
    Spacer,
    chakra,
    ScaleFade,
    ResponsiveValue,
} from "@chakra-ui/react";
import { useAppRouter } from "../hooks";
import { UIContext } from "../providers";

const _Paginator = ({
    children,
    setLimit,
    setPage,
    paginatorKey,
    hasMore,
    pageOptions,
    page,
    pageSize,
    hideTopControls = false,
    hideBottomControls = false,
    size,
    maxItems,
    ...props
}: {
    children: ReactNode;
    setLimit: (limit: number) => void;
    setPage: (page: number) => void;
    paginatorKey: string;
    hasMore: boolean;
    pageOptions: string[];
    page: number;
    pageSize: number;
    hideTopControls?: boolean;
    hideBottomControls?: boolean;
    maxItems: number;
    size: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs">;
}) => {
    const router = useAppRouter();
    const _pageOptions = pageOptions ?? ["25", "50", "100", "300", "500"];
    const [pageUpdate, setpageUpdate] = React.useState(true);
    const [isMounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        let timer1: any;
        if (pageUpdate) {
            timer1 = setTimeout(() => {
                setpageUpdate(false);
            }, 200);
        }
        return () => {
            clearTimeout(timer1);
        };
        //eslint-disable-next-line
    }, [pageUpdate]);

    React.useEffect(() => {
        let queries: any = {};
        if (!router.query[`${paginatorKey}Page`]) {
            queries[`${paginatorKey}Page`] = 0;
        }
        if (!router.query[`${paginatorKey}Limit`]) {
            queries[`${paginatorKey}Limit`] = _pageOptions[0];
        }
        router.appendQueries({ ...queries });
        if (!isMounted) {
            setMounted(true);
        }

        //eslint-disable-next-line
    }, []);

    const __page = router.query[`${paginatorKey}Page`];
    const __limit = router.query[`${paginatorKey}Limit`];
    React.useLayoutEffect(() => {
        const _page = Number(router.query[`${paginatorKey}Page`]);
        const _limit = Number(router.query[`${paginatorKey}Limit`]);

        if (!isNaN(_page) && page !== _page) {
            setPage(_page);
        }
        if (!isNaN(_limit) && pageSize !== _limit) {
            if (isMounted) {
                router.appendQuery(`${paginatorKey}Page`, "0", false, false);
                setPage(0);
            }
            setLimit(_limit);
        }

        //eslint-disable-next-line
    }, [__page, __limit, page, pageSize, paginatorKey, setPage, setLimit]);
    let midpages = Array.from(Array(Math.ceil(maxItems / pageSize)));
    midpages = midpages.length > 5 ? midpages.slice(0, 3) : midpages;
    const PageBar = (props: any) => (
        <Flex justifyContent={"space-between"} py={4} pt={2} h="92px">
            <ButtonGroup
                size="sm"
                variant={"outline"}
                colorScheme="orange"
                justifyContent={"space-between"}
                w="100%"
                alignItems="baseline"
                {...props}
            >
                <Button
                    size={size}
                    isDisabled={router.query[`${paginatorKey}Page`] == "0"}
                    onClick={() => {
                        setpageUpdate(true);
                        router.appendQuery(
                            `${paginatorKey}Page`,
                            (Number(router.query[`${paginatorKey}Page`]) - 1 <=
                            0
                                ? 0
                                : Number(router.query[`${paginatorKey}Page`]) -
                                  1
                            ).toString(),
                            false,
                            false
                        );
                    }}
                >
                    {`<<<`}
                </Button>
                {/* {!ui.isMobileView && (
                    <Flex alignContent={"center"}>
                        {midpages.map((i, indx) => (
                            <Button
                                mx={0}
                                px={0}
                                w="min-content"
                                variant={"link"}
                                size={size}
                                key={indx}
                            >
                                {indx + 1}
                            </Button>
                        ))}
                    </Flex>
                )} */}
                <Spacer />
                <Select
                    h="100%"
                    m={0}
                    pt={0}
                    maxW="150px"
                    placeholder="Select page size"
                    onChange={(e) => {
                        router.appendQuery(
                            `${paginatorKey}Limit`,
                            e.target.value,
                            false,
                            false
                        );
                    }}
                    value={
                        router.query[`${paginatorKey}Limit`] ?? _pageOptions[0]
                    }
                    bgColor="blue.500"
                >
                    {_pageOptions.map((pageSize) => {
                        return (
                            <option
                                key={`paginator-options-pagesize-${pageSize}`}
                                value={pageSize}
                            >
                                {pageSize}
                            </option>
                        );
                    })}
                </Select>
                <Button
                    size={size}
                    isDisabled={!hasMore}
                    onClick={() => {
                        setpageUpdate(true);
                        router.appendQuery(
                            `${paginatorKey}Page`,
                            (
                                Number(router.query[`${paginatorKey}Page`]) + 1
                            ).toString(),
                            false,
                            false
                        );
                    }}
                >{`>>>`}</Button>
            </ButtonGroup>
        </Flex>
    );
    return (
        <Flex
            className="Paginator"
            position="relative"
            direction={"column"}
            w="100%"
            h="100%"
            {...props}
        >
            {!hideTopControls && <PageBar />}

            <ScaleFade in={!pageUpdate}>{children}</ScaleFade>
            {!hideBottomControls && (
                <PageBar
                    className="Paginator Bar Bottom"
                    position="absolute"
                    bottom="0"
                />
            )}
        </Flex>
    );
};

export const Paginator = chakra(React.memo(_Paginator));
