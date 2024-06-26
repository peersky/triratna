import * as nextRouter from "next/router";

/**
 * Given a string such as:
 *
 * https://example.com/foo?bar=zip&name=Sam
 *
 * Will return:
 *
 * {
 *   bar: 'zip',
 *   name: 'Sam',
 * }
 */
const queryFromUrl = (url: string) => {
    const [, ...queryStrings] = url.split("?");
    const queryString = queryStrings.join("?");
    let query: { [key: string]: string } = {};

    for (let [key, value] of new URLSearchParams(queryString).entries()) {
        query[key] = value;
    }

    return query;
};

/**
 * Given a string such as:
 *
 * https://example.com/foo?bar=zip&name=Sam
 *
 * and query object
 * {
 *    name: 'Sam'
 *    id: foo
 * }
 *
 * Will return:
 *
 * {
 *   id: 'bar',
 * }
 */

const extractPathParams = (router: any, query: any) => {
    const queryKeys = Object.keys(query ?? {});
    const params = Object.keys(router.query)
        .filter((key) => !queryKeys.includes(key))
        .reduce((obj: any, key) => {
            obj[key] = router.query[key];
            return obj;
        }, {});

    return params;
};

/**
 * Wraps Next/Router
 * ensures router.query only contains
 * query parameters directly extracted from URL object
 * Adds new object: query.params  that
 * contains only dynamic routes defined in
 * pages structure according to nextjs docs
 *
 * Given a string such as:
 *
 * https://example.com/[foo]?bar=zip
 * with [foo] = "journal", hence displayed in browser as:
 * https://example.com/journal?bar=zip
 *
 * Will return:
 *
 * query  :{
 *   bar: 'zip',
 * }
 *
 * params :{
 *  foo: journal
 * }
 *
 * appendQueries: Appends array of key/value to query
 * replaces if query exists
 * defaults to replace, will push if push is true
 *
 * appendQuery: Appends only one key, value pair, same as AppendQueries
 *
 *
 * drop: deletes object from url and from router objects
 *
 * NextJS router unmodified object is lcoated in .NextRouter
 */

export const useAppRouter = () => {
    const router = nextRouter.useRouter() as any;

    const query = queryFromUrl(router.asPath) as any;

    const params = extractPathParams(router, query);

    const appendQueries = (items: any, push?: any, shallow?: boolean) => {
        const newQuery: any = { ...router.query }; //
        for (const [key, value] of Object.entries(items)) {
            newQuery[key] = value;
        }
        if (push) {
            router.push(
                { pathname: router.pathname, query: newQuery },
                undefined,
                {
                    shallow: !!shallow,
                }
            );
        } else {
            router.replace(
                { pathname: router.pathname, query: newQuery },
                undefined,
                { shallow: !!shallow }
            );
        }
    };

    const appendQuery = (
        key: string,
        value: string,
        push: any,
        shallow: any
    ) => {
        const newQuery = { ...router.query };
        newQuery[key] = value;
        if (push) {
            router.push(
                { pathname: router.pathname, query: newQuery },
                undefined,
                {
                    shallow: !!shallow,
                }
            );
        } else {
            router.replace(
                { pathname: router.pathname, query: newQuery },
                undefined,
                { shallow: !!shallow }
            );
        }
    };

    const drop = (item: string) => {
        const newQuery = { ...router.query };
        delete newQuery[`${item}`];

        router.replace(
            { pathname: router.pathname, query: newQuery },
            undefined,
            {
                shallow: true,
            }
        );
        return null;
    };

    return {
        query,
        params,
        nextRouter: router,
        replace: router.replace,
        push: router.push,
        drop,
        appendQuery,
        appendQueries,
    };
};

export default useAppRouter;
