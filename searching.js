const BinarySearchTree = require('./BST')
const Queue = require('./queue')


//1. 
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

//8
//1st: value = 8, start = 0, end = 10, index = 5, item = 12, 12 > 8, then recurse
//2nd: value = 8, start = 0, end = 4, index = 2, item = 6, 6 < 8, then recurse
//3rd: value = 8, start = 3, end = 4, index = 3 item = 8 = item == value, return 8 from base case

//16
//1st: value = 16, start = 0, end = 10, index = 5, item = 12, 12 < 16, then recurse
//2nd: value = 16, start = 6, end = 10, index = 8, item = 17, 17 > 16, then recurse
//3rd: value = 16, start = 6, end = 7, index = 6, item = 14, 14 < 16, then recurse
//4th: value = 16, start = 7, end = 7, index = 7, item = 15, 15 < 16, then recurse
//5th: value = 16, start = 8, end = 7 -> base case hit and -1 returned 

//2. react app in folder

//3. skip for now

//4. 

    // 1) 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

    // 2) 8, 6, 5, 7, 10, 9 ,11


//5. 

function preOrder(BST){

    if(BST !== null){
        console.log(BST.key)
        preOrder(BST.left)
        preOrder(BST.right)
    }
}

function inOrder(BST){
    if(BST !== null){
        inOrder(BST.left)
        console.log(BST.key)
        inOrder(BST.right)
    }
}

function postOrder(BST){
    if(BST !== null){
        postOrder(BST.left)
        postOrder(BST.right)
        console.log(BST.key) 
    }
}

const BST = new BinarySearchTree()

    BST.insert(25)
    BST.insert(15)
    BST.insert(50)
    BST.insert(10)
    BST.insert(24)
    BST.insert(35)
    BST.insert(70)
    BST.insert(4)
    BST.insert(12)
    BST.insert(18)
    BST.insert(31)
    BST.insert(44)
    BST.insert(66)
    BST.insert(90)
    BST.insert(22)
    //preOrder(BST)  
    //inOrder(BST)
    postOrder(BST)
    
    //console.log(BST)



//6. 

//maybe breadth? works with rows

function bfs(tree, values = []) {

    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.key;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.key); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    //console.log(values)
    return values;

}

function findNextUp(){ 

    const nextUp = new BinarySearchTree()
    nextUp.insert('Picard')
    nextUp.left = new BinarySearchTree('Riker')
    nextUp.right = new BinarySearchTree('Data')
    nextUp.left.left = new BinarySearchTree('Worf')
    nextUp.left.right = new BinarySearchTree('LaForge')
    nextUp.left.left.left = new BinarySearchTree('LSO')
    nextUp.right.right = new BinarySearchTree('Crusher')
    nextUp.right.right.left = new BinarySearchTree('Selar')



    let order = []

    bfs(nextUp, order)

    console.log(order)

    //console.log(nextUp)


}

findNextUp()

//7.

// function max(arr){
//     if(!arr.length){
//         return 0
//     }

//     let buy = arr[0]
//     let sell = arr[0]
//     let profit = 0

//     for(let i = 0; i < arr.length; i++){
//         sell = arr[i]

//         if(sell < buy){
//             buy = sell
//         }

//         if(sell - buy > profit){
//             profit = sell - buy
//         }
//     }
//     return profit
// }

// console.log(max([128, 97, 121, 123, 98, 97, 105]));

//8. 

