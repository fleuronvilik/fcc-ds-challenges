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

  this.isEmpty = function(){
    return length === 0;
  };

  this.indexOf = function(element){
    if (length) { // if (!this.isEmpty())
      var index = 0, currentNode = head;
      while (currentNode.next) {
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next;
        index = index + 1;
      }
    }
    return -1;
  };

  this.elementAt = function(index){
    if (length && index < length) {
      var counter = 0, currentNode = head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter = counter + 1;
      }
      return currentNode.element;
    }
  };

  this.removeAt = function(index){
    if (0 <= index && index < length) {
      var counter = 0, currentNode = head, previousNode = null;
      if (length == 1) {
        head = null;
      } else {
        while (counter < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          counter = counter + 1;
        }
        previousNode.next = currentNode.next;
      }
      length = length - 1;
      return currentNode.element;
    }
    return null;
  };

  this.addAt = function(index, element){
    var node = new Node(element);
    if (index === 0) {
      node.next = head;
      head = node;
      length = length + 1;
    } else if (0 < index && index < length) {
      var counter = 0, currentNode = head, previousNode = null;
      while(counter < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        counter = counter + 1;
      }
      node.next = currentNode;
      previousNode.next = node;
      length = length + 1;
    }
    return false;
  };
}

