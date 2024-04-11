import { Flex, Box, chakra } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useAppRouter } from "../hooks";
const _Scrollable = ({
    className,
    children,
    ...props
}: {
    children: any;
    className: string;
}) => {
    const scrollerRef = useRef<any>();
    const router = useAppRouter();
    const [path, setPath] = useState<string>();
    const [y, setY] = useState(0);
    const [dir, setDir] = useState(0);

    const [scrollDepth, setScrollDepth] = useState(0);

    const getScrollPrecent = ({ currentTarget }: { currentTarget: any }) => {
        const scroll_level =
            (100 * (currentTarget.scrollTop + currentTarget.clientHeight)) /
            currentTarget.scrollHeight;
        return scroll_level;
    };

    const handleScroll = (e: any) => {
        // updateXarrow();
        const currentScroll = Math.ceil(getScrollPrecent(e) / 3);
        if (currentScroll) {
            if (currentScroll != y) {
                setDir(y - currentScroll);
                setY(currentScroll);
            }
        }

        const navbar = document.getElementById("Navbar");

        if (navbar) {
            if (dir === -1 && e.target.scrollTop > 0) {
                navbar.style.top = `${-navbar.offsetHeight}px`;
            } else {
                navbar.style.top = "-0";
            }
        }
        setY(currentScroll);

        if (currentScroll > scrollDepth) {
            setScrollDepth(currentScroll);
            // Object.prototype.hasOwnProperty.call(mixpanel, "get_distinct_id") &&
            //   mixpanel.people.increment({
            //     [`Scroll depth at: ${router.nextRouter.pathname}`]: currentScroll,
            //   });
        }
    };

    const navbar = document.getElementById("Navbar");

    useEffect(() => {
        setPath(router.nextRouter.pathname);
    }, [router.nextRouter.pathname]);

    useEffect(() => {
        scrollerRef?.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: path === router.nextRouter.pathname ? "smooth" : "auto",
        });
        // eslint-disable-next-line
    }, [path]);

    return (
        <Flex
            className={className + " " + "ScrollableWrapper"}
            direction="column"
            w="100%"
            overflowY="hidden"
            maxH="100%"
        >
            {/* <Xwrapper> */}
            <Box
                className="Scrollable"
                // direction="column"
                ref={scrollerRef}
                overflowY="scroll"
                onScroll={(e) => handleScroll(e)}
                {...props}
            >
                {children}
            </Box>
            {/* </Xwrapper> */}
        </Flex>
    );
};

export const Scrollable = chakra(_Scrollable);
export default Scrollable;
