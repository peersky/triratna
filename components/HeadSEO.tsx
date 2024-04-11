import React from "react";
import Head from "next/head";

type TwitterCard = "Summary" | "summary_large_image" | "app" | "player";
interface SEOHeadProps {
    title: string;
    keywords: string;
    description: string;
    url: string;
    image: string;
    ogType?: string;
    ogURL?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
    twitterURL?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterCreator?: string;
    twitterImageAlt?: string;
    twitterImage?: string;
    baseURL: string;
}

export const SEOHead = ({
    title,
    keywords,
    description,
    url,
    image,
    ogType,
    ogURL,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
    twitterURL,
    twitterTitle,
    twitterDescription,
    twitterCreator,
    twitterImageAlt,
    twitterImage,
    baseURL,
}: SEOHeadProps) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />

            <title>{title}</title>
            <meta key="meta-title" name="title" content={title} />
            <meta key="meta-keywords" name="keywords" content={keywords} />
            <meta
                key="meta-description"
                name="description"
                content={description}
            />

            {/* <!-- Open Graph / Facebook --> */}
            <meta
                key="meta-og-type"
                property="og:type"
                content={ogType ?? "website"}
            />
            <meta key="meta-og-url" property="og:url" content={ogURL ?? url} />
            <meta
                key="meta-og-title"
                property="og:title"
                content={ogTitle ?? title}
            />
            <meta
                key="meta-og-description"
                property="og:description"
                content={ogDescription ?? description}
            />
            <meta
                key="meta-og-image"
                property="og:image"
                content={ogImage ?? baseURL + image}
            />

            {/* <!-- Twitter --> */}
            <meta
                key="meta-twitter-card"
                property="twitter:card"
                content={twitterCard ?? "summary_large_image"}
            />
            <meta
                key="meta-twitter-url"
                property="twitter:url"
                content={twitterURL ?? url}
            />
            <meta
                key="meta-twitter-title"
                property="twitter:title"
                content={twitterTitle ?? title}
            />
            <meta
                key="meta-twitter-description"
                property="twitter:description"
                content={twitterDescription ?? description}
            />
            <meta
                key="meta-twitter-image"
                property="twitter:image"
                content={twitterImage ?? baseURL + image}
            />

            {twitterImageAlt && (
                <meta
                    key="meta-twitter-image-alt"
                    property="twitter:image:alt"
                    content={twitterImageAlt}
                />
            )}

            {twitterCreator && (
                <meta
                    key="meta-twitter-image-alt"
                    property="twitter:image:alt"
                    content={twitterCreator}
                />
            )}
        </Head>
    );
};

export default SEOHead;
