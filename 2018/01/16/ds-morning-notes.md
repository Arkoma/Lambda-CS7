# Data Structures Notes
## Stacks
* you can only `push` and pop
* __LIFO__ - last in first out
* Should have the methods: `push`, `pop`, and a `getter` for the property size
* `push` should accept a value and place it on top of the stack.
* `pop` should remove and return the top value off of the stack.
* size should return how many items are on the stack.
![Image of Stack](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lifo_stack.png/700px-Lifo_stack.png)
***
## Queues
* Should have the methods: `enqueue`, `dequeue`, and a `getter` for the property size
* `enqueue` should add an item to the back of the queue.
* `dequeue` should remove an item from the front of the queue and return it.
* size should return the number of items in the queue.
* __FIFO__ - first in first out.
![Image of Queue](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png)
***
## Linked Lists
* Should have the methods: `addToTail`, `removeHead`, and `contains`.
* `addToTail` replaces the tail with a new value that is passed in.
* `removeHead` removes and returns the head node.
* `contains` should searth through the linked list and return true if a matching value is found.
* The head property is a reference to the first node and the tail property is a reference to the last node. These are the only two properties that you need to keep track of an infinite number of nodes. Build your nodes with objects.
![Image of Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png)
***
## Hash Tables
* Should have the methods: `insert`, `remove`, and `retrieve`.
 * `insert` should take a key value pair and add the value to the hash table.
 * `retrieve` should return the value associated with a key.
 * `remove` should removed the given key's value from the hash table.
 * Should properly handle collisions.  If two keys map to the same index in the storage table then you should store a 2d array as the value.  Make each key/value pair its own array that is nested inside of the array stored at that index on the table. (This is often implemented as a linked list but you can just use arrays.)
 * It's like a bookshelf. The Buckets would correspond to various shelves on the bookshelf. Each bucket is like an array, or it coupld be a linked list.
 
![Image of Hash Table](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)