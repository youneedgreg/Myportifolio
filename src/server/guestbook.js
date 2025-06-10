import dbConnect from "@/lib/mongodb";
import GuestbookEntry from "@/models/GuestbookEntry";

export const getEntries = async () => {
    try {
        await dbConnect();
        const entries = await GuestbookEntry.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(entries));
    } catch (error) {
        throw error;
    }
};

export const addEntry = async ({ payload, form }) => {
    try {
        await dbConnect();
        const newEntry = await GuestbookEntry.create(payload);
        form?.reset();
        return JSON.parse(JSON.stringify(newEntry));
    } catch (error) {
        throw error;
    }
};
