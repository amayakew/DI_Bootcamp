import { Story } from "./Story";


export type User = {
    userId: number;
    username: string;
    email: string;
    stories: Story[];
};
