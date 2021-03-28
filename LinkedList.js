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
  };

  this.remove = function(element){
    if (length) {
      if (head.element === element) {
        head = head.next;
        length = length - 1;
      } else {
        var currentNode = head, previousNode = null;
        while (currentNode.next) {
          if (currentNode.element === element) {
            previousNode.next = currentNode.next;
            length = length - 1;
          }
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
  };
}

