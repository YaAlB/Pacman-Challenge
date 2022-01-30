# Pacman Challenge

Using React to implement Pacman and using Jest for testing.

Currently pacman uses [ R ] key for moving and [ Q: Left, E: Right ] for rotating 90 degrees.

The origin (0,0) is the SOUTH WEST most corner.

## Tasks

- The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
- There are no other obstructions on the grid.
- Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands
- PLACE will put the Pacman on the grid in positon X,Y and facing NORTH,SOUTH, EAST or WEST.
- The origin (0,0) can be considered the SOUTH WEST most corner.
- The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another - PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move Pacman one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
- REPORT will announce the X,Y and F of Pacman. This can be in any form, but standard output is sufficient.
- Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

### How to Run the Challenge

## Install NPM

`npm ci`

## Start React Packager

`npm start`

## Test Data

- Place: 1, 1, North / Move[R] Move[R] Move[R] / Report: 1, 4, North
- Place: 4, 0, East / Move[R] Right[E] Move[R] Right[E] Move[R] / Report: 3, 0, West
- Place: 2, 2, West / Left[Q] Left[Q] Left[Q] Move[R] / Report: 2, 3, North
- Place: 3, 3, South / Left[Q] Move[R] Left[Q] Move[R] / Place: 3, 4, South / Report: 3, 4, South
- Left[Q] Move[R] Left[Q] Move[R] / Report: `disabled` / Place: 0, 0, South / Move[R] / Report: 0, 0, South

---