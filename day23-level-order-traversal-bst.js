this.levelOrder = function(root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        
let output = [];
let queue = [];
let currentNode = root;
queue.push(currentNode);
let currentLevel = 1;
while(queue.length){
    
    currentNode = queue.shift();
    currentLevel--; //this will ensure we are adding new lines only on next level
    output.push(currentNode);
    
    if(currentNode.left){
        queue.push(currentNode.left);
    }
    if(currentNode.right){
        queue.push(currentNode.right);
    }
    
    if(currentLevel = 0){
        currentLevel = queue.length; 
    }
}

let ansArr = [];
output.forEach(node => {
    ansArr.push(node.data)
})
console.log(ansArr.join(" "))
        

	}; // End of function levelOrder
