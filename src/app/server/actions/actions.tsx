'use server'

export interface TreeNode {
    id: number;
    name: string;
    ownerId?: number;
    children?: TreeNode[];
    level: number;
    title?: string
}
const input: TreeNode[] = [
    { id: 1, name: "layer 1", level: 1 },
    { id: 2, name: "layer 1 - 1", level: 2, ownerId: 1 },
    { id: 3, name: "layer 1 - 2", level: 2, ownerId: 1 },
    { id: 4, name: "layer 1 - 1 - 1", level: 3, ownerId: 2 },
    { id: 5, name: "layer 1 - 1 - 1 - 1", level: 4, ownerId: 4 },
    { id: 6, name: "layer 1 - 1 - 1 - 1 - 1", level: 5, ownerId: 5 },
    { id: 7, name: "layer 1 - 2 - 2", level: 3, ownerId: 3 },
    { id: 8, name: "layer 1 - 2 - 3", level: 3, ownerId: 3 },
];



export async function myAction(req) {

    if (req.type === "getAllData") {
        return input
    }

}
