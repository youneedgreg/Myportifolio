import { cn } from "@/utils/cn";

const Separator = ({ className }) => {
    return (
        <hr
            className={cn("border-gray-200 dark:border-neutral-700", className)}
            data-oid="fs.o3go"
        />
    );
};

export default Separator;
