const moves = require('./all-moves')
const dock = require('./dock')

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
// grab all crates at the same time
//    console.log(runMoves(moves, false))
// grab one crate at a time
//    console.log(runMoves(moves, true))

