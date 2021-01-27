// Add your code here
if(!root){
   return -1;
} else {
   let l = this.getHeight(root.left);
   let r = this.getHeight(root.right);
   return (l>r?l:r)+1;
}
