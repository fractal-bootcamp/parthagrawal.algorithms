import { root } from "postcss"

type Node = {
    value: number,
    leftNode?: Node | null,
    rightNode?: Node | null,
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

type deleteNodeProps = {
    value: number,
    root: Node,
    parentNode?: Node,
}

const deleteNode = (props: deleteNodeProps) => {

    const { value } = props
    const { root } = props
    const { parentNode } = props



    const findNextNode = (root: Node) => {
        if (root.leftNode) findNextNode(root.leftNode);
        return root

    }
    // find target
    if (value < root.value) {
        if (!root.leftNode) {
            console.log('node not found')
            return;
        }
        deleteNode({ value, root: root.leftNode, parentNode: root })
    }
    else if (value > root.value) {
        if (!root.rightNode) {
            console.log('node not found')
            return;
        }

        deleteNode({ value, root: root.rightNode, parentNode: root })
    }
    else {
        // target found

        if (parentNode) {
            // two children
            if (root.leftNode && root.rightNode) {
                const nextNode = findNextNode(root.rightNode)
                root.value = nextNode.value
                deleteNode({ value: nextNode.value, root: nextNode })

            }
            // only one child
            else if (root.leftNode || root.rightNode) {

                // if it's on the left then the parent node's left one needs to be reassigned
                if (root.value < parentNode.value) {
                    parentNode.leftNode = root.leftNode || root.rightNode
                }
                else {
                    parentNode.rightNode = root.leftNode || root.rightNode
                }


            }
            // no children
            if (!root.leftNode && !root.rightNode) {
                if (root.value < parentNode.value) {
                    parentNode.leftNode = null
                }
                if (root.value >= parentNode.value) {
                    parentNode.rightNode = null
                }
            }
        }



    }


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
debugger;
deleteNode({ value: 3, root: startNode })
console.log('after delete')
readTree(startNode, console.log);






