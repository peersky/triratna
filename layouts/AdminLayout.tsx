import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getDefaultLayout } from ".";
import { useAppRouter } from "../hooks";
import Link from "next/link";
import { RequireWeb3 } from "../components";
import Web3Context from "../providers/Web3Provider/context";
import { RequireNameService } from "../components/RequireNameService";
const AdminLayout = (props: any) => {
    const [path, setPath] = useState<String[]>([]);
    const router = useAppRouter();
    React.useEffect(() => {
        setPath(router.nextRouter.asPath.split("/").slice(1, -1));
    }, [router.nextRouter.asPath]);

    return (
        <Flex
            id="AppContainer"
            // textColor={"grey.700"}
            direction={"column"}
            w="100%"
            minH="100vh"
            px="7%"
        >
            {path.length !== 0 && (
                <Breadcrumb
                    spacing="8px"
                    pt={2}
                    separator={<ChevronRightIcon color="grey.500" />}
                >
                    <BreadcrumbItem>
                        <Link href="/" passHref shallow>
                            <BreadcrumbLink
                                as={"div"}
                                textTransform={"capitalize"}
                            >
                                Home
                            </BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    {path?.map((element, idx) => {
                        let linkPath = "/";
                        path.forEach((value, index) => {
                            if (index <= idx) linkPath += value + "/";
                        });

                        const query =
                            linkPath === "/terminus/" &&
                            router.query.contractAddress
                                ? {
                                      contractAddress:
                                          router.query.contractAddress,
                                  }
                                : undefined;
                        return (
                            <BreadcrumbItem key={`bcl-${element}-${idx}`}>
                                <Link
                                    passHref={true}
                                    shallow
                                    href={{
                                        pathname: linkPath,
                                        query: { ...query },
                                    }}
                                >
                                    <BreadcrumbLink
                                        as={"div"}
                                        isCurrentPage={
                                            idx === path.length ? true : false
                                        }
                                        fontWeight={
                                            idx === path.length - 1
                                                ? "semibold"
                                                : "normal"
                                        }
                                        textTransform={"capitalize"}
                                    >
                                        {element}
                                    </BreadcrumbLink>
                                </Link>
                            </BreadcrumbItem>
                        );
                    })}
                </Breadcrumb>
            )}
            <RequireWeb3>{props.children}</RequireWeb3>
        </Flex>
    );
};

export const getAdminLayout = (page: any) =>
    getDefaultLayout(<AdminLayout>{page}</AdminLayout>);
