function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (length) {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      } // currentNode holds the last one (tail) by the end
      currentNode.next = new Node(element);
    } else {
      head = new Node(element);
    } 
    length = length + 1;
    // console.log(head);
    // only change code above this line
  };
}

// var test = new LinkedList();
// console.log(test.size())
// test.add("Kitten");
// test.add("Puppy");
// test.add("Cat");
// test.add("Dog");
