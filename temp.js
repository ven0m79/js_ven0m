function findNextSquare(sq) {
    const sqSq = Math.sqrt(sq);
    const sqLogic = Number.isInteger(Math.sqrt(sq));
    if (sqLogic) {
        let value = Math.pow((sqSq + 1), 2)
        return value;
    }
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
  }

 console.log(findNextSquare(121)); 