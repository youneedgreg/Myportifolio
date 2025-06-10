import Blogs from "@/components/blog/Blogs";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
    title: "Notes - Gregory Temwa",
    description: "Software Engineer",
};

export default function BlogPage() {
    let allBlogs = getBlogPosts();
    return (
        <div className="flex flex-col space-y-6" data-oid="gn7yzo:">
            <section className="flex flex-col gap-y-6" data-oid="5k8o6xz">
                <h1
                    className="text-2xl font-semibold tracking-tighter"
                    data-oid=":ucwf.c"
                >
                    Developer's Notes
                </h1>
                <p data-oid="w9gtlsa">
                    Sharing my thoughts, ideas, and a bit of code.
                </p>
            </section>
            <Blogs blogs={allBlogs} data-oid="o.-lkyz" />
        </div>
    );
}
