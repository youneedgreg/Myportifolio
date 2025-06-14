import BackButton from "@/components/ui/BackButton";
import CustomMDX from "@/components/ui/CustomMDX";
import { getBlogPosts } from "@/lib/blog";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    let ogImage = image
        ? `https://greg.vercel.app${image}`
        : `https://greg.vercel.app/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://greg.vercel.app/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

function formatDate(date) {
    noStore();
    let currentDate = new Date().getTime();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date).getTime();
    let timeDifference = Math.abs(currentDate - targetDate);
    let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let fullDate = new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    if (daysAgo < 1) {
        return "Today";
    } else if (daysAgo < 7) {
        return `${fullDate} (${daysAgo}d ago)`;
    } else if (daysAgo < 30) {
        const weeksAgo = Math.floor(daysAgo / 7);
        return `${fullDate} (${weeksAgo}w ago)`;
    } else if (daysAgo < 365) {
        const monthsAgo = Math.floor(daysAgo / 30);
        return `${fullDate} (${monthsAgo}mo ago)`;
    } else {
        const yearsAgo = Math.floor(daysAgo / 365);
        return `${fullDate} (${yearsAgo}y ago)`;
    }
}

export default function Blog({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section data-oid="d7q0rxe">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `https://greg.vercel.app${post.metadata.image}`
                            : `https://greg.vercel.app/og?title=${post.metadata.title}`,
                        url: `https://greg.vercel.app/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: "Gregory Odete",
                        },
                    }),
                }}
                data-oid="ildkhl-"
            />

            <div className="mb-8" data-oid=":6ordvz">
                <BackButton data-oid="q9gwtzj" />
            </div>
            <h1
                className="title max-w-[650px] text-2xl font-medium tracking-tighter"
                data-oid="u_i_uja"
            >
                {post.metadata.title}
            </h1>
            <div
                className="mt-2 mb-8 flex max-w-[650px] items-center justify-between text-sm"
                data-oid="djug7r."
            >
                <Suspense
                    fallback={<p className="h-5" data-oid="7o4u.qa" />}
                    data-oid="gx6j1he"
                >
                    <p
                        className="text-sm text-neutral-600 dark:text-neutral-300"
                        data-oid="kh10n4y"
                    >
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                </Suspense>
                {/* <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
          </Suspense> */}
            </div>
            <article
                className="prose prose-quoteless prose-neutral dark:prose-invert space-y-5"
                data-oid="ibp0x2."
            >
                <CustomMDX source={post.content} data-oid="8c5oqha" />
            </article>
        </section>
    );
}

// let incrementViews = cache(increment);

// async function Views({ slug }) {
//     let views = await getViewsCount();
//     incrementViews(slug);
//     return <ViewCounter allViews={views} slug={slug} />;
// }
