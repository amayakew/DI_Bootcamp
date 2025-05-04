import { Contributor } from "./Contributor";


export type Story = {
    id: number;
    title: string;
    content: string;
    authorId: number;
    authorName: string;
    contributors: Contributor[];
}