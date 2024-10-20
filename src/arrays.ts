/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        const bookDoubled = [...numbers, ...numbers];
        return bookDoubled;
    }

    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledList = numbers.map((num: number): number => num * 3);
    return tripledList;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringConvert = numbers.map((num: string): number =>
        Number.isInteger(Number.parseInt(num)) ? Number.parseInt(num) : 0,
    );
    return stringConvert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSign = amounts.map((value: string): string =>
        value.includes("$") ? value.substring(1) : value,
    );

    const numConvert = noSign.map((value: string): number =>
        Number.isInteger(Number.parseInt(value)) ? Number.parseInt(value) : 0,
    );
    return numConvert;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclaimUpper = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );

    const excludeQuestion = exclaimUpper.filter(
        (value: string): boolean => value.includes("!") || !value.endsWith("?"),
    );

    return excludeQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const finalCount = words.filter((message: string): boolean =>
        message.length < 4 ? true : false,
    );

    return finalCount.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const colorCheck = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue",
    );

    return colorCheck;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (total: number, num: number): number => (total += num),
        0,
    );

    return `${sum}=` + addends.toString().replaceAll(",", "+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const posArray = [...values];
    const finalPos = [...values];
    const negativeCheck = values.some((value: number): boolean => value < 0);

    if (negativeCheck) {
        const negativeIndex = values.findIndex(
            (val: number): boolean => val < 0,
        );

        const sum = values.reduce(
            (num: number, value: number): number =>
                values.indexOf(value) < negativeIndex ? num + value : num,
            0,
        );

        const injectedArray = [...values];
        injectedArray.splice(negativeIndex + 1, 0, sum);

        return injectedArray;
    }
    const posOption = posArray.reduce(
        (sum: number, value: number): number => sum + value,
        0,
    );

    finalPos.push(posOption);

    return finalPos;
}
