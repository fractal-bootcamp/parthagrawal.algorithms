

// iterate through an array
// compare each element to the next element 
// if the next element is smaller, swap the elements
// done with the array - check if the array is sorted
// if not, do it again 

// put bubbleSort in useEffect hook, and then call bubbleSortStep




export const bubbleSortStep = (arr: number[], i: number): { newArr: number[], swapped: boolean } => {
    let swapped = false;
    const newArr = [...arr];

    const elem1 = arr[i];
    const elem2 = arr[i + 1];
    const shouldSwap = elem2 < elem1;

    if (shouldSwap) {
        // this allows this function to simultaneously confirm the array is sorted
        // indicate that there was a swap somehow
        // by saying "hey if there was no swap, then the array is sorted" 
        // rather than creating a dedicated function that checks this each time
        newArr[i] = arr[i + 1];
        newArr[i + 1] = arr[i];
        swapped = true
    }


    return { newArr: newArr, swapped }

}

export function bubbleSort(array: number[], callback?: (newArr: number[]) => any): number[] {
    const newArray = structuredClone(array)
    let shouldResort = false
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > newArray[i + 1]) {
            [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
            shouldResort = true
            if (callback) callback(newArray)
        }
    }

    // "repeat until done"
    if (shouldResort) return bubbleSort(newArray, callback)
    return newArray
}

const INITIAL_ARRAY = [1, 2, 3, 1, 6, 9, 1, 4, 9, 1, 2]
const history = [INITIAL_ARRAY]
bubbleSort(INITIAL_ARRAY, (arr) => history.push(arr))

console.log(history)