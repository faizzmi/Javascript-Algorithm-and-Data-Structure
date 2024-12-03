/**
 * Inserts a value into the data array at the given index and returns the new array.
 * If the index is out of bounds, the value is inserted at the start or end of the array.
 *
 * @param {number[]} data - The original array.
 * @param {number} index - The index where the value should be inserted.
 * @param {number} value - The value to insert.
 * @return {number[]} The new array with the value inserted.
 */
function insert(data, index, value) {
    const result = new Array(data.length + 1); // Create a new array with an increased size
    const insertIndex = Math.min(Math.max(index, 0), data.length); // Clamp index to valid bounds

    for (let i = 0; i < result.length; i++) {
        if (i < insertIndex) {
            result[i] = data[i]; // Copy elements before the insertion point
        } else if (i === insertIndex) {
            result[i] = value; // Insert the value
        } else {
            result[i] = data[i - 1]; // Copy elements after the insertion point
        }
    }

    return result;
}

/**
 * Deletes the element at the given index from the data array and returns the new array.
 * If the index is invalid, the original array is returned.
 *
 * @param {number[]} data - The original array.
 * @param {number} index - The index of the element to delete.
 * @return {number[]} The new array with the element removed.
 */
function deleteElement(data, index) {
    if (index < 0 || index >= data.length) {
        return data; // Return the original array if the index is invalid
    }

    const result = new Array(data.length - 1); // Create a new array with reduced size

    for (let i = 0; i < result.length; i++) {
        result[i] = (i < index) ? data[i] : data[i + 1]; // Skip the element at the index
    }

    return result;
}

/**
 * Removes all occurrences of a value from the data array and returns the new array.
 *
 * @param {number[]} data - The original array.
 * @param {number} value - The value to remove.
 * @return {number[]} The new array with all occurrences of the value removed.
 */
function removeOccurrences(data, value) {
    let count = 0;

    // Count the occurrences of the value
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value) {
            count++;
        }
    }

    const result = new Array(data.length - count); // Create a new array with the reduced size
    let j = 0;

    // Copy only elements that are not equal to the value
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== value) {
            result[j++] = data[i];
        }
    }

    return result;
}

console.log(insert([1, 2, 3], 1, 4));
console.log(deleteElement([1, 2, 3], 1));
console.log(removeOccurrences([1, 2, 3, 2], 2));
