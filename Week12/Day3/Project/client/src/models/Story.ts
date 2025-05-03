import { Contributor } from "./Contributor";
import { User } from "./User";


export type Story = {
    id: number;
    title: string;
    content: string;
    authorId: number;
    authorName: string;
    contributors: Contributor[];
}