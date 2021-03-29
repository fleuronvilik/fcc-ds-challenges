var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

  this.add = function(data){
    var node = new Node(data, this.tail);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  };
  this.remove = function(data){
    if (this.head) {
      var current = this.head, afterDeleted, beforeDeleted;
      while (current) {
	afterDeleted = current.next; beforeDeleted = current.prev;
        if (current.data === data) {
          if (beforeDeleted) {
            beforeDeleted.next = current.next;
            current.prev = null;
          } else {
            this.head = current.next;
          }
          if (afterDeleted) {
            afterDeleted.prev = beforeDeleted;
            current.next = null;
          } else {
            this.tail = current.prev;
            return;
          }
        }
        current = afterDeleted;
      }
    }
  };
};
