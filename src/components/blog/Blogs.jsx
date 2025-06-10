"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Tabs from "./Tabs";

const Blogs = ({ blogs }) => {
    const [selectedTag, setSelectedTag] = useState("all");

    const tags = ["all", "journal", "guide", "others"];

    const handleTagClick = (tag) =>
        setSelectedTag((prevTag) => (prevTag === tag ? null : tag));

    const filteredAndSortedBlogs = blogs
        .filter((blog) => {
            if (selectedTag === "all") return true;
            return blog.metadata.tag.includes(selectedTag);
        })
        .sort((a, b) => {
            return (
                new Date(b.metadata.publishedAt) -
                new Date(a.metadata.publishedAt)
            );
        });

    return (
        <section className="flex flex-col space-y-6" data-oid="y0m55mt">
            <Tabs
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
                data-oid="xk5h53x"
            />

            <div className="flex flex-col space-y-10" data-oid="y26c30j">
                {filteredAndSortedBlogs.map((post) => (
                    <BlogCard key={post.slug} post={post} data-oid="zb2pr_j" />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
