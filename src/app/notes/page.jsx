import Blogs from "@/components/blog/Blogs";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
    title: "Notes - Gregory Temwa",
    description: "Software Engineer",
};

export default function BlogPage() {
    let allBlogs = getBlogPosts();
    return (
        <div className="flex flex-col space-y-6" data-oid="dtrghcx">
            <section className="flex flex-col gap-y-6" data-oid=":ch823t">
                <h1
                    className="text-2xl font-semibold tracking-tighter"
                    data-oid="3ozb4md"
                >
                    Developer's Notes
                </h1>
                <p data-oid="tc4ta5k">
                    Sharing my thoughts, ideas, and a bit of code.
                </p>
            </section>
            <Blogs blogs={allBlogs} data-oid="r07e-29" />
        </div>
    );
}
