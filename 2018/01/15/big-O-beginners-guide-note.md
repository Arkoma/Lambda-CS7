# Big O notation (beginner's guide)
## O(1)
* Constant time or same time or space.
***
## O(n)
* Linear time (_grows linearly in direct proportion to the size of the input data set_).
***
## O(n<sup>2</sup>) 
* The algorithm's performance here is directly tied to the square of the size of the data set. 
* This is often seen with algorithms that involve nested iterations over the data set. 
* Further nests would result in O(n<sup>3</sup>) or O(n<sup>4</sup>), etc.
***
## O(2<sup>n</sup>)
* The algorithm's growth doubles with each addition to the input data set.
* This happens with recursion as in the Fibonacci number calculation
***
## O(logN)
* Binary search is an example of an algorithm that has O(logN) time. The algorithm's growth is minimal even as the data set becomes quite large.

_These notes are based on ROB BELL's **A beginner's guide to the Big O notation** <https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/>_

