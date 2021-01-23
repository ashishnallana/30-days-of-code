function Solution(){
  //Write your code here
  
  let stack = [];
  let queue = [];
  this.pushCharacter = (n) => {
      stack.push(n);
  }
  this.popCharacter = () => {
      return stack.pop();
  }
  
  this.enqueueCharacter = (n) => {
      queue.push(n)
  }
  this.dequeueCharacter = () => {
      return queue.shift();
  }

}
