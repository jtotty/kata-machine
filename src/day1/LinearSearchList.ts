/**
 * Linear search algorithm.
 * Checks if a number is in an array of numbers.
 *
 * Linear time complexity: O(N)
 */
export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;
}
