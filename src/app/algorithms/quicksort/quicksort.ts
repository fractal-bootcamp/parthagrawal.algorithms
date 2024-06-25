const quickSort = (parentArr: number[]): number[] => {

    // const sortedArr = structuredClone(parentArr)
    const pivotIdx = Math.floor(Math.random() * parentArr.length)
    const pivot = parentArr[pivotIdx]

    parentArr.splice(pivotIdx, 1)

    const greaterThan: number[] = [];
    const lessThan: number[] = [];
    debugger;

    parentArr.forEach((elem, idx) => {
        if (elem > pivot) {
            greaterThan.push(elem)
        }
        else {
            lessThan.push(elem)
        }

    })

    if (lessThan.length > 0 || greaterThan.length > 0) {
        return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
    }
    else {
        return [...lessThan, pivot, ...greaterThan]
    }




}


const INITIAL_ARRAY = [5, 1, 6, 8, 4, 8, 10, 3]
const sortedArr = quickSort(INITIAL_ARRAY)
console.log(sortedArr)

export default quickSort;