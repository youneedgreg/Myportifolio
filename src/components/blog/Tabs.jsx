"use client";

const Tabs = ({ tags, selectedTag, onTagClick }) => {
    return (
        <div className="flex flex-wrap" data-oid="rgifzxa">
            {tags.map((tag) => (
                <div
                    key={tag}
                    className={`mx-1 my-2 cursor-pointer rounded-lg px-3 py-1 font-medium hover:bg-gray-50 dark:hover:bg-gray-50/10 ${
                        selectedTag === tag
                            ? "border border-gray-200 bg-slate-50 hover:bg-gray-100 dark:border-neutral-700 dark:bg-gray-50/10 dark:text-gray-100 dark:hover:text-gray-100"
                            : ""
                    }`}
                    onClick={() => {
                        if (selectedTag !== tag) {
                            onTagClick(tag);
                        }
                    }}
                    data-oid="47n5-m8"
                >
                    <label
                        className="cursor-pointer text-sm capitalize"
                        data-oid="1t9v1ox"
                    >
                        {tag}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Tabs;
