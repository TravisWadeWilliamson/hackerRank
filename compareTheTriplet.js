g
/******************************/
//Level 1 Compare The Triplets
/******************************/

/*******************************************************
  
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge to be the triplet b = (b[0], b[1], b[2]).

Your task is to find their comparison points by comparing a[0] with b[0] , a[1] with b[1] , and a[2] with b[2] .

If a[i] > b[i], then Alice is awarded  point.
If a[i] < b[i], then Bob is awarded  point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

For example, a = [1,2,3] and b = [3,2,1]. For elements 0, Bob is awarded a point because a[0] < b[0]. For the equal elements a[1] and b[1], no points are earned. Finally, for elements 2, a[2] > b[2],  so Alice receives a point. Your return array would be [1,1] with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating

********************************************************/

// Input: 2 arrays of 3 integers each a = [1,2,3], b = [3,2,1]
// Output: an array of two integers [a, b]
// Edge cases:
// Restrictions:    1 < a[i] < 100
//                  1 < b[i] < 100

/* First time through ---------------------------

const alice = [1, 2, 3];
const bob = [3, 2, 1];

const compareTriplets = (a, b) => {

    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            bScore++;
        } else if (a[i] > b[i]) {
            aScore++;
        }
    }
    return [aScore, bScore]
}

compareTriplets(alice, bob);
-----------------------------------------------*/



const compareTriplets = (aliceRatings, bobRatings) => {
    //create variables to hold the score of each peron
    let aliceScore = 0;
    let bobScore = 0;

    //loop over array a and inside of that loop, loop over array b to compare a[i] and b[j]
    for (let i = 0; i < aliceRatings.length; i++) {
        //conditional statements to compare bob and alices ratings to then give a score
        // If a[i] > b[i], then Alice is awarded  point. 1 
        if (aliceRatings[i] > bobRatings[i]) {
            aliceScore++;
        }
        
        // If a[i] < b[i], then Bob is awarded  point. 1
        if (aliceRatings[i] < bobRatings[i]) {
            bobScore++;
        }
        // If a[i] = b[i], then neither person receives a point. 
    }
    
    //push the results into the empty array 
    return [aliceScore, bobScore]
}

const a = [1,2,3];
const b = [3,2,1]; 

console.log('TEST A: 1, 2, 3 and 3, 2, 1 should be [1, 1]', compareTriplets(a, b))

const aliceR = [3, 3, 3]
const bobR = [1, 1, 1]

console.log('TEST B: 3, 3, 3 and 1, 1, 1 should be [3, 0]', compareTriplets(aliceR, bobR))
