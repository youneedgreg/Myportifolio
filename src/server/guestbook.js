import { supabase } from "@/lib/supabase";

export const getEntries = async () => {
    try {
        const { data, error } = await supabase
            .from("guestbook")
            .select("*")
            .order("createdAt", { ascending: false });

        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        throw error;
    }
};

export const addEntry = async ({ payload, form }) => {
    try {
        const { data, error } = await supabase
            .from("guestbook")
            .insert([
                { name: payload.name, email: payload.email, message: payload.message },
            ]);

        if (error) {
            throw error;
        }

        form?.reset();
        return data;
    } catch (error) {
        throw error;
    }
};
