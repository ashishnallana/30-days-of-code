this.removeDuplicates=function(head){
      //Write your code here 
      let set = new Set()
      if(!head){
          return 0;
      } else {
          let currNode = head;
      while(head){
          set.add(currNode.data);
          if(currNode.next){
              currNode = currNode.next;
          } else if (!currNode.next) {
      console.log(Array.from(set).join(" "))
              return;
          }
      }
      }
    }
