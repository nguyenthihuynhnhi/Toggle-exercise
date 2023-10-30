

//tôi có input như trên hãy tạo cho tôi function tạo ra output có mẫu giống bên dưới
//theo điều kiện như sau: nếu object id là 1 thì children sẽ là mảng chứa object có ownerId là 1 cho đến hết dữ liệu đầu vào

const output = {
    id: 1,
    name: "layer 1",
    children: [
        {
            id: 2,
            name: "layer 1 - 1",
            children: [
                {
                    id: 4,
                    name: "layer 1 - 1 - 1",
                    children: [
                        {
                            id: 5,
                            name: "layer 1 - 1 - 1 - 1",
                            children: [
                                {
                                    id: 6,
                                    name: "layer 1 - 1 - 1 - 1 - 1"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "layer 1 - 2",
            children: [
                {
                    id: 7,
                    name: "layer 1 - 2 - 2"
                },
                {
                    id: 8,
                    name: "layer 1 - 2 - 3"
                }
            ]
        }
    ]
}


const input = [
    { id: 1, name: "layer 1", level: 1 },
    { id: 2, name: "layer 1 - 1", level: 2, ownerId: 1 },
    { id: 3, name: "layer 1 - 2", level: 2, ownerId: 1 },
    { id: 4, name: "layer 1 - 1 - 1", level: 3, ownerId: 2 },
    { id: 5, name: "layer 1 - 1 - 1 - 1", level: 4, ownerId: 4 },
    { id: 6, name: "layer 1 - 1 - 1 - 1 - 1", level: 5, ownerId: 5 },
    { id: 7, name: "layer 1 - 2 - 2", level: 3, ownerId: 3 },
    { id: 8, name: "layer 1 - 2 - 3", level: 3, ownerId: 3 },
]

function buildTree(input, parentId = 1) {
    const node = input.find(item => item.id === parentId);

    if (!node) return null;

    const children = input.filter(item => item.ownerId === parentId);

    if (children.length > 0) {
        node.children = children.map(child => buildTree(input, child.id));
    }

    return node;
}

const result = buildTree(input)
console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ result:", result)
