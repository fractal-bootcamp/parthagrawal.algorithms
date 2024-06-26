import { root } from "postcss"

type Node = {
    value: number,
    leftNode?: Node,
    rightNode?: Node,
}

// type CreateProps = {
//     root?: Node
//     value: number
//     leftNode: Node
//     rightNode: Node
// }

// takes a value and a tree (root) and returns a new tree (root)
const insertNode = (value: number, root: Node): Node => {
    if (value < root.value) {
        if (root.leftNode) insertNode(value, root.leftNode)
        else root.leftNode = { value }
    }
    else {
        if (root.rightNode) insertNode(value, root.rightNode)
        else root.rightNode = { value }
    }

    return root


}
const readTree = (root: Node, callback: Function) => {
    callback('parent:', root.value)
    if (root.leftNode) callback('left: ', root.leftNode.value);
    if (root.rightNode) callback('right: ', root.rightNode.value);
    if (root.leftNode) readTree(root.leftNode, callback);
    if (root.rightNode) readTree(root.rightNode, callback);
}





const startArr = [1, 2, 5, 6, 8, 3, 9, 4, 7, 10]

const startNode: Node = {
    value: 5,
    leftNode: {
        value: 3,
        leftNode: {
            value: 2
        },
        // rightNode: {
        //     value: 4
        // }
    },
    rightNode: {
        value: 7,
        leftNode: {
            value: 6,
        }
    }

}

insertNode(4, startNode);
readTree(startNode, console.log);





