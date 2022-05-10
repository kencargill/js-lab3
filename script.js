let submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];

function addSubmission (array, newName, newScore, newDate) {
    return newScore >= 60 ? array.push({name: newName, score: newScore, date: newDate, passed:true}) : array.push({name: newName, score: newScore, date: newDate, passed:false})
};
// addSubmission(submissions, "Ken", 59, "2022-10-07");
console.log(submissions);

function deleteSubmissionByIndex (array, index) {
    array.splice (index, 1);
};
// deleteSubmissionByIndex(submissions,4);

function deleteSubmissionByName (array, name) {
    const index = array.findIndex(
        (submission) => submission.name === name
        );

    array.splice(index, 1);
};
// deleteSubmissionByName(submissions, "Jane");

function editSubmission (array, index, score) {
    array[index].score = score;
    score >= 60 ? array[index].passed = true : array[index].passed = false;
}
// editSubmission(submissions,2,100);

function findSubmissionByName (array, name) {
    const index = array.findIndex(
        (submission) => submission.name === name
        );
    return array[index];
};
// console.log(findSubmissionByName(submissions, "Joe"));


function findLowestScore (array) {
    let lowestScoreObject = array[0];


    array.forEach((submission) => {
        if (submission.score < lowestScoreObject.score) {
            lowestScoreObject = submission;
        }
    });

    return lowestScoreObject
};

console.log(findLowestScore(submissions));


function findAverageScore (array) {
    let sum = 0;
    for (let submission of array) {
    sum += submission.score;
    };
    return sum / array.length;
};
// console.log(findAverageScore(submissions));

function filterPassing (array) {
    const result = array.filter
        (submission => submission.passed === true
        );
    return result
};
// console.log(filterPassing(submissions));

function filter90AndAbove (array) {
    const result = array.filter
    (submission => submission.score >= 90
    );
return result;
};

// console.log(filter90AndAbove(submissions));
