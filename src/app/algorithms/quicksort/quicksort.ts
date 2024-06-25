// export const quickSortHistory = (historyArr: number[][]): number[][] => {


//     const parentArr = historyArr[historyArr.length - 1]

//     const sortedArr = structuredClone(parentArr)
//     const pivotIdx = Math.floor(Math.random() * parentArr.length)
//     const pivot = parentArr[pivotIdx]

//     parentArr.splice(pivotIdx, 1)

//     const greaterThan: number[] = [];
//     const lessThan: number[] = [];

//     parentArr.forEach((elem, idx) => {
//         if (elem > pivot) {
//             greaterThan.push(elem)
//         }
//         else {
//             lessThan.push(elem)
//         }

//     })

//     if (lessThan.length == 0 && greaterThan.length == 0) {
//         historyArr.push([...lessThan, pivot, ...greaterThan])
//         return historyArr
//     }
//     if (lessThan.length == 0) {
//         historyArr.push([...lessThan, pivot, ...quickSort(greaterThan)])
//         return historyArr
//     }
//     if (greaterThan.length == 0) {
//         historyArr.push([...quickSort(lessThan), pivot, ...greaterThan])
//         return historyArr
//     }

//     historyArr.push([...quickSort(lessThan), pivot, ...quickSort(greaterThan)])
//     return historyArr


// }



export const quickSort = (parentArr: number[], callback: Function): number[] => {

    const sortedArr = structuredClone(parentArr)
    const pivotIdx = Math.floor(Math.random() * parentArr.length)
    const pivot = parentArr[pivotIdx]

    parentArr.splice(pivotIdx, 1)

    const greaterThan: number[] = [];
    const lessThan: number[] = [];

    parentArr.forEach((elem, idx) => {
        if (elem > pivot) {
            greaterThan.push(elem)
        }
        else {
            lessThan.push(elem)
        }

    })

    if (lessThan.length == 0 && greaterThan.length == 0) {
        const sortArr = [...lessThan, pivot, ...greaterThan]
        callback(sortArr)
        return sortArr

    }
    if (lessThan.length == 0) {
        const sortArr = [...lessThan, pivot, ...quickSort(greaterThan, callback)]
        callback(sortArr)
        return sortArr
    }
    if (greaterThan.length == 0) {
        const sortArr = [...quickSort(lessThan, callback), pivot, ...greaterThan]
        callback(sortArr)
        return sortArr
    }

    const sortArr = [...quickSort(lessThan, callback), pivot, ...quickSort(greaterThan, callback)]
    callback(sortArr)
    return sortArr






}


const INITIAL_ARRAY = [1, 3, 4, 6, 1, 2, 9, 3]

const HISTORY_ARR: number[][] = [[3, 4, 2, 1, 11, 8, 1, 9, 2, 10, 4, 14, 2, 4, 7, 8, 3, 2, 5, 6, 7, 1, 12]]

const history: number[][] = []
const updateHistory = (arr: number[]) => {
    history.push(arr)
}

quickSort(INITIAL_ARRAY, updateHistory)
const sortedArr = history[history.length - 1]
console.log(history)
console.log(sortedArr)



export default quickSort;