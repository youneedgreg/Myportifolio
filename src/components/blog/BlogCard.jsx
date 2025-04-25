// import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { LuDot } from "react-icons/lu";

const BlogCard = ({ post }) => {
    return (
        <Link
            key={post.slug}
            className="group border-b border-gray-200 pb-8 dark:border-neutral-800"
            href={`/notes/${post.slug}`}
        >
            <div className="flex w-full flex-col space-y-2">
                {/* <div className="rounded-md overflow-hidden max-w-full max-h-full w-full h-36">
                    <Image
                        src={post.metadata.image}
                        className="rounded-md h-full w-full object-cover"
                        width={512}
                        height={512}
                        alt={post.metadata.title}
                    />
                </div> */}
                {/* <div>
                    <span className="capitalize text-xs font-medium me-2 px-2 py-1 rounded-md bg-slate-100 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-gray-100 dark:bg-gray-50/10 ">
                        {post.metadata.tag}
                    </span>
                </div> */}
                <div className="space-y-3">
                    <p
                        className="font-medium tracking-tight text-neutral-900 group-hover:underline dark:text-neutral-100"
                        title={post.metadata.title}
                    >
                        {post.metadata.title}
                    </p>
                    <div className="flex space-x-0.5">
                        <p className="text-xs text-neutral-900 capitalize dark:text-neutral-100">
                            {post.metadata.tag}
                        </p>
                        <div>
                            <LuDot className="text-neutral-900 dark:text-neutral-300" />
                        </div>

                        <p className="text-xs text-neutral-900 dark:text-neutral-100">
                            {format(post?.metadata.publishedAt, "MMMM d, yyyy")}
                        </p>
                        <div>
                            <LuDot className="text-neutral-900 dark:text-neutral-300" />
                        </div>
                        <p className="text-xs text-neutral-900 dark:text-neutral-100">
                            {`${post.metadata.duration} min read`}
                        </p>
                    </div>
                    <p className="text-sm text-neutral-900 dark:text-neutral-300">
                        {post.metadata.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
