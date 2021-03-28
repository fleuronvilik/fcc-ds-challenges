var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;

var Cat = new Node('Cat');
var Dog = new Node('Dog');

// Kitten -> Puppy -> Cat
Puppy.next = Cat; 
// Kitten -> Puppy -> Cat -> Dog
Cat.next = Dog;
