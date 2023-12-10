# Mine Sweeper kata - Yellow belt exam

```text
Mine Sweeper - Game	Rules:
You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.
Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.
The first square you open could be a bomb.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares

UAT Scenarios:
1 – Game Board Creation phase:
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] Game created

2 – Game Over - Step on a bomb on 1;1
+-+-+-+
| | | |
+-+-+-+
| |X| |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] BOOM! – Game Over.

3 – Clean square 0;0 and get the number of bombs around
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|3| | |
+-+-+-+
[Sandbox 3x3] 3 bombs around your square.

4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1].
+-+-+-+
| | | |
+-+-+-+
|*|*| |
+-+-+-+
|3|*| |
+-+-+-+
[Sandbox 3x3] Square flagged as bomb.

5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]
+-+-+-+
|2|2|1|
+-+-+-+
|*|*|2|
+-+-+-+
|3|*|2|
+-+-+-+
[Sandbox 3x3] the land is cleared! GOOD JOB!

6 – Massive cleaning and victory clicking on 0;0
+-+-+-+
|_|1| |
+-+-+-+
|_|1|1|
+-+-+-+
|_|_|_|
+-+-+-+
[Sandbox 3x3] the land is cleared! GOOD JOB!

Kata Objective:
The game runs in BOT mode to print on the screen all the moves until we got a victory or game over. The test
suite can simulate the game without having an executable. In that case the test suite will print on console
the scenario; or in a log file with a clean test report [red/green style]
```

## Examples

### Example 1

```text
Creating an empty 3x3 game board:
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] Game created
```

### Example 2

```text
Game Over - Step on a bomb on 1;1

Bombs:
---
-b-
---

Game:
---
-X-
---
[Sandbox 3x3] BOOM! – Game Over.
```

### Example 3

```text
Game Over - Step on a bomb on 0;0

Bombs:
---
---
b--

Game:
---
---
X--
[Sandbox 3x3] BOOM! – Game Over.
```

### Example 4

```text
Game Over - Step on a bomb on 2;0

Bombs:
---
---
--b

Game:
---
---
--X
[Sandbox 3x3] BOOM! – Game Over.
```

### Example 5

```text
Game Over - Step on a bomb on 0;1

Bombs:
--b
b--
b--

Game:
---
--1
---
[Sandbox 3x3] 1 bomb around your square.

---
X-1
---
[Sandbox 3x3] BOOM! – Game Over.
```

### Example 6

```text
Game Over - Step on a bomb on 0;2

Bombs:
b--
--b
-b-

Game:
---
---
--2
[Sandbox 3x3] 2 bombs around your square.

--1
---
--2
[Sandbox 3x3] 1 bomb around your square.

X-1
---
--2
[Sandbox 3x3] BOOM! – Game Over.
```

### Example 7

```text

Bombs:
b-b
---
--b

Game:
-2-
---
---
[Sandbox 3x3] 2 bombs around your square.

*2-
---
---
[Sandbox 3x3] Square flagged as bomb.

*2*
---
---
[Sandbox 3x3] Square flagged as bomb.

*2*
1--
---
[Sandbox 3x3] 1 bomb around your square.

*2*
13-
---
[Sandbox 3x3] 3 bombs around your square.

*2*
132
---
[Sandbox 3x3] 2 bombs around your square.

*2*
132
-1-
[Sandbox 3x3] 1 bomb around your square.

*2*
132
-1*
[Sandbox 3x3] Square flagged as bomb.

*2*
132
_1*
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### Example 8

```text
Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]

Bombs:
---
bb-
-b-

Game:
---
---
3--
[Sandbox 3x3] 3 bombs around your square.

---
*--
3--
[Sandbox 3x3] Square flagged as bomb.

---
**-
3--
[Sandbox 3x3] Square flagged as bomb.

---
**-
3*-
[Sandbox 3x3] Square flagged as bomb.

---
**-
3*2
[Sandbox 3x3] 2 bombs around your square.

---
**2
3*2
[Sandbox 3x3] 2 bombs around your square.

2--
**2
3*2
[Sandbox 3x3] 2 bombs around your square.

22-
**2
3*2
[Sandbox 3x3] 2 bombs around your square.

221
**2
3*2
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### Example 9

```text
Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]

Bombs:
-b-
--b
b--

Game:
1--
---
---
[Sandbox 3x3] 1 bomb around your square.

1--
-3-
---
[Sandbox 3x3] 3 bombs around your square.

1--
23-
---
[Sandbox 3x3] 2 bombs around your square.

1--
23-
--1
[Sandbox 3x3] 1 bomb around your square.

1--
23-
-21
[Sandbox 3x3] 2 bombs around your square.

1-2
23-
-21
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### Example 10

```text
Massive cleaning and victory clicking on 0;0

Bombs:
--b
---
---

Game:
_1-
_11
___
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### Example 11

```text
Massive cleaning and victory clicking on 0;2

Bombs:
--b
--b
--b

Game:
_2-
_3-
_2-
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### Example 12

```text
Game Over - Step on a bomb on 1;2

Bombs:
-bb
---
b--

Game:
---
-32
-1_
[Sandbox 3x3] No bomb around your square.

1--
-32
-1_
[Sandbox 3x3] 1 bomb around your square.

1--
*32
-1_
[Sandbox 3x3] Square flagged as bomb.

1--
-32
-1_
[Sandbox 3x3] Square unflagged as bomb.

1--
232
-1_
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

### ✅ US 1

```text
As a Mine Sweeper player
I want to have a game board
So that I can follow my steps

✅ UAT 1.1
Given a game board
When I count the number of squares
Then it should be 9

✅ UAT 1.2
Given the squares of the game board
When I want to create one
Then the empty game board looks like

+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] Game created
```

### ✅ US 2

```text
As a Mine Sweeper player
I want to have bomb(s)
So that I can sweep them

✅ UAT 2.1
Given a new game
When the game starts
Then the number of bombs should be 1 or 3.
```

### ✅ US 3

```text
As a Mine Sweeper player
I want to have the game board filled with bomb(s)
So that I can sweep them

✅ UAT 3.1
Given a new game
When there is 1 bomb
Then the number of bombs placed on the game board should be 1.

✅ UAT 3.2
Given a new game
When there are 3 bombs
Then the number of bombs placed on the game board should be 3.
```

### ✅ US 4

```text
As a Mine Sweeper player
I want to know the number of neighbour squares with bombs
So that I can figure out my next step

✅ UAT 4.1
Given a board with bombs (b) here

--b
--b
--b

When the number of neighbour squares with bombs is calculated
Then the bomb board is

02b
03b
02b

✅ UAT 4.2
Given a board with bombs (b) here

--b
---
---

When the number of neighbour squares with bombs is calculated
Then the bomb board is

01b
011
000

✅ UAT 4.3
Given a board with bombs (b) here

---
-b-
---

When the number of neighbour squares with bombs is calculated
Then the bomb board is

111
1b1
111

✅ UAT 4.4
Given a board with bombs (b) here

b-b
---
--b

When the number of neighbour squares with bombs is calculated
Then the bomb board is

b2b
132
01b
```

### ✅ US 5

```text
As a Mine Sweeper player
I want to know my possible steps
So that I can plan the next one

✅ UAT 5.1
Given an empty game board
When the possible steps are calculated
Then it should be all 9 squares listed

✅ UAT 5.2
Given a game board with steps

1--
23-
--1

When the possible steps are calculated
Then it should be 5 squares listed

✅ UAT 5.3
Given a game board with steps

22-
**2
3*2

When the possible steps are calculated
Then it should be 4 squares listed
```

### 🚧 US 6

```text
As a Mine Sweeper player
I want to see my steps on the board
So that I can plan the next one

✅ UAT 6.1
Given an empty game board with bomb (b) here

--b
---
---

When I step on square 2;1
Then it should return 1
And message '[Sandbox 3x3] 1 bombs around your square.'

✅ UAT 6.2
Given an empty game board with bomb (b) here

---
bb-
-b-

When I step on square 0;0
Then it should return 3
And message '[Sandbox 3x3] 3 bombs around your square.'

✅ UAT 6.3
Given an empty game board with bomb (b) here

---
-b-
---

When I step on square 1;1
Then it should return X
And message '[Sandbox 3x3] BOOM! – Game Over.'

✅ UAT 6.4
Given a game board

1--
23-
--1

with bombs (b) here

-b-
--b
b--

When I step on square 1;0
Then it should return 2
And message '[Sandbox 3x3] 2 bombs around your square.'

✅ UAT 6.5
Given an empty game board with bombs (b) here

-bb
---
b--

When I step on square 2;0
Then it should return _
And message '[Sandbox 3x3] 0 bomb around your square.'
```

<!--⚠ UAT 6.6
Given an empty game board with bomb (b) here

--b
---
---

When I step on square 0;0
Then it should return _
And message '[Sandbox 3x3] 0 bomb around your square.'

Board state:
_1-
_11
___

⚠ UAT 6.7
Given an empty game board with bombs (b) here

--b
--b
--b

When I step on square 0;2
Then it should return _
And message '[Sandbox 3x3] 0 bomb around your square.'

Board state:
_2-
_3-
_2-
```
-->

### ✅ US 7

```text
As a Mine Sweeper player
I want to mark squares
So that I can see my guessed bombs

✅ UAT 7.1
Given an empty game board
When I mark square 0;0 as bomb
Then * appears in the square

✅ UAT 7.2
Given game board with * in square 0;1

1--
*32
-1_

When I unmark it
Then the board's state is

1--
-32
-1_

✅ UAT 7.3
Given game board

---
**-
3--

When I mark 1;0 as bomb
Then it should return *
And message '[Sandbox 3x3] Square flagged as bomb.'

```

### 🚧 US 8

```text
As a Mine Sweeper player
I want to know if I won
So that I can celebrate

✅ UAT 8.1
Given game board

---
--1
---

And 3 bombs hidden
When winning is checked
Then game has not won

🚧 UAT 8.2
Given game board

*2*
132
---

And 3 bombs hidden
When winning is checked
Then game has not won

⚠ UAT 8.3
Given game board

221
**2
3*2

And 3 bombs hidden
When winning is checked
Then game has won

⚠ UAT 8.4
Given game board

_1-
_11
___

And 1 bomb hidden
When winning is checked
Then game has won

⚠ UAT 8.5
Given game board

1--
*32
-1_

And 3 bombs hidden
When winning is checked
Then game has not won
```

### ⚠ US 9

```text
As a Mine Sweeper player
I want to see a BOT game
So that I can learn new tricks

⚠ UAT 9.1
Given a BOT game runs
When it ends
Then the BOT either loses or wins, other outcome is not possible
```
