/**
 * Algorithm to sort all values in an array.
 *
 * Quadratic time complexity: O(n^2)
 */
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        /*
            For each iteration loop till the penultimate value.
            Subtract i for each iteration. (Note: First iteration i = 0).
        */
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            // If current item > next item => swap
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
            }
        }
    }
}

/**
 * Swap two adjacent elements in an array.
 */
function swap(arr: number[], index: number): void {
    const tmp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = tmp;
}
