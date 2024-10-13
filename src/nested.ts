import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQuestions = questions.filter(
        (question: Question): boolean => question.published,
    );
    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const emptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body.length > 0 ||
            question.expected.length > 0 ||
            question.options.length > 0,
    );
    return emptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const findId = questions.find((val: Question): boolean => val.id === id);
    return findId || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeId = questions.filter((val: Question): boolean => val.id != id);
    return removeId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const nameArray = questions.map((val: Question): string => val.name);

    return nameArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumTotal = questions
        .map((val: Question): number => val.points)
        .reduce((prev: number, curr: number): number => prev + curr);

    return sumTotal;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sumTotal = questions
        .filter((val: Question): boolean => val.published)
        .map((val: Question): number => val.points)
        .reduce((prev: number, curr: number): number => prev + curr, 0);

    return sumTotal;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const converter = questions.map(
        (val: Question): string =>
            `${val.id},${val.name},${val.options.length},${val.points},${val.published}` +
            "\n" +
            val.options.reduce(
                (form: string, curr: string): string => form + "," + curr + " ",
                "",
            ),
    );

    return converter.toString().replaceAll(" ", "\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answerArray = questions.map(
        (val: Question): Answer => ({
            questionId: val.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (val: Question): Question => ({ ...val, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const firstType: Question = {
        type: "short_answer_question",
        id: 0,
        name: "",
        body: "",
        options: [],
        expected: "",
        points: 0,
        published: false,
    };
    const secondType: Question = {
        type: "multiple_choice_question",
        id: 0,
        name: "",
        body: "",
        options: [],
        expected: "",
        points: 0,
        published: false,
    };
    return (
        questions.every(
            (val: Question): boolean => val.type === firstType.type,
        ) ||
        questions.every(
            (val: Question): boolean => val.type === secondType.type,
        )
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const newQuestions = questions.map(
        (val: Question): Question =>
            targetId === val.id ? { ...val, name: newName } : val,
    );

    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const changeArray = questions.map(
        (val: Question): Question =>
            targetId === val.id ?
                val.type === "multiple_choice_question" ?
                    { ...val, options: [], type: newQuestionType }
                :   { ...val, type: newQuestionType }
            :   val,
    );

    return changeArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

export function editHelper(
    question: Question,
    targetArray: string[],
    targetIndex: number,
    value: string,
): string[] {
    targetArray = [...question.options];
    targetArray[targetIndex] = value;
    return targetArray;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const editArray = questions.map(
        (val: Question): Question =>
            targetId === val.id ?
                targetOptionIndex === -1 ?
                    { ...val, options: val.options.concat(newOption) }
                :   {
                        ...val,
                        options: editHelper(
                            val,
                            val.options,
                            targetOptionIndex,
                            newOption,
                        ),
                    }
            :   val,
    );

    return editArray;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const targetQuestion = questions
        .filter((val: Question): boolean => targetId === val.id)
        .reduce((val: Question): Question => val);

    const dupQuestion = duplicateQuestion(newId, targetQuestion);

    const dupArray = [...questions];
    dupArray.splice(questions.indexOf(targetQuestion, 0) + 1, 0, dupQuestion);

    return dupArray;
}
