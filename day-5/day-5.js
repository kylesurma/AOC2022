const moves = require('./all-moves')
const dock = [
  ['H', 'T', 'Z', 'D' ],
  ['Q', 'R', 'W', 'T', 'G', 'C', 'S'],
  ['P', 'B', 'F', 'Q', 'N', 'R', 'C', 'H'],
  ['L', 'C', 'N', 'F', 'H', 'Z' ],
  ['G', 'L', 'F', 'Q', 'S' ],
  ['V', 'P', 'W', 'Z', 'B', 'R', 'C', 'S'],
  ['Z', 'F', 'J' ],
  ['D', 'L', 'V', 'Z', 'R', 'H', 'Q'],
  ['B', 'H', 'G', 'N', 'F', 'Z', 'L', 'D']
    ]

movesTest = ['move 1 from 4 to 8',
'move 2 from 1 to 9',
'move 4 from 6 to 5',
'move 1 from 7 to 6',
'move 2 from 1 to 4',
'move 7 from 8 to 9',
'move 7 from 4 to 5',
'move 4 from 2 to 4',
'move 1 from 5 to 9',]

const shippingContainerMover  = (commandStr, isOneCrateAtATime = false) => {
    const [howMany, from, to] = commandStr.split(' ').filter(item => +item)
    const grab = dock[from - 1].splice(-howMany)
    const drop = isOneCrateAtATime ? grab.reverse() : grab
    dock[to - 1].push(...drop)
}

const getTopsOfStack = (dock) => dock.map(stack => stack.pop()).join('')

const runMoves = (moves, isOneCrateAtATime = false) => {
    if (!moves.length) {
        return getTopsOfStack(dock)
    } else {
        shippingContainerMover(moves.shift(), isOneCrateAtATime)
       return runMoves(moves, isOneCrateAtATime)
    }
}

console.log(runMoves(moves, false))

