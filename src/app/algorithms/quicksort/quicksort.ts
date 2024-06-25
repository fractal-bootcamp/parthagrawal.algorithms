export const quickSortHistory = (historyArr: number[][]): number[][] => {

    const parentArr = historyArr[historyArr.length - 1]
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
        historyArr.push([...lessThan, pivot, ...greaterThan])
        return historyArr
    }
    if (lessThan.length == 0) {
        historyArr.push([...lessThan, pivot, ...quickSort(greaterThan)])
        return historyArr
    }
    if (greaterThan.length == 0) {
        historyArr.push([...quickSort(lessThan), pivot, ...greaterThan])
        return historyArr
    }

    historyArr.push([...quickSort(lessThan), pivot, ...quickSort(greaterThan)])
    return historyArr


}



export const quickSort = (parentArr: number[]): number[] => {

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
        return [...lessThan, pivot, ...greaterThan]
    }
    if (lessThan.length == 0) {
        return [...lessThan, pivot, ...quickSort(greaterThan)]
    }
    if (greaterThan.length == 0) {
        return [...quickSort(lessThan), pivot, ...greaterThan]
    }

    return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]






}


const INITIAL_ARRAY = [1, 3, 4, 6, 1, 2, 9, 3]

const HISTORY_ARR: number[][] = [[1, 3, 4, 6, 1, 2, 9, 3]]

const history = quickSortHistory(HISTORY_ARR)
const sortedArr = history[history.length - 1]
console.log(history)
console.log(sortedArr)




export default quickSortHistory;