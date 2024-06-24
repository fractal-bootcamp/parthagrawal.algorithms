

// iterate through an array
// compare each element to the next element 
// if the next element is smaller, swap the elements
// done with the array - check if the array is sorted
// if not, do it again 

export const bubbleSort = (arr: number[]): { outcome: string, arr: number[] } => {
    let swapped = false;
    const newArr = [...arr];

    for (let i = 0; i < arr.length - 1; i++) {
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

    }
    if (swapped) {
        return bubbleSort(newArr)
    }


    return { outcome: "sorted", arr: newArr }


}