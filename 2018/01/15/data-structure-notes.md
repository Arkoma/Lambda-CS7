# Data Structures

## Linked Lists
* One difference between a linked list and an array is that arrays are already indexed.
    * *DISADVANTAGE* - you have to go item by item so it means that it is _slow_ to get to the Kth element and that it is linear O(n).
    * *ADVANTAGE* - insertion and deletion _can_ be quick if what you're wanting to insert or delete is the first element in a linked list.  In this case, preppending an item will be in constant time O(1). But if you need to append something to the end, that would be in linear time O(n).
* Doubly linked list. This is a list where not only is each item in the list pointing to the next item, but it can also point back to the previous item.
* So, how does this look like in the code? Below is an example in Java.

```Java
public class Node {
    Node next;
    int data;
    public Node(int data) {
        this.data;
    }
}

public class LinkedList {
    Node head;

    public void append(int data) {
        if (head == null) {
            head = new Node(data);
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        } 
        current.next = new Node(data);
    }
    public void prepend(int data) {
        Node newHead = new Node(data);
        newHead.next = head;
    }
    public void deleteWithValue(int data) {
        if (head == null) return;
        if (head.data == data) {
            head = head.next;
            return;
        }
        Node current = head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;  
                return; 
            }
            current = current.next;
        }
    }
}
```
* In the `deleteWithValue` function above, the data is never explicitly _destroyed_, but no one can access it because the _next_ pointers have been moved and therefore, it's essentially gone.

These notes were taken from 

![DATA STRUCTURES: LINKED LISTS](http://img.youtube.com/vi/njTh_OwMljA/0.jpg)

(https://youtu.be/njTh_OwMljA)
