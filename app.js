const game = (arr, k) => {
    let winner = null
    let winCount = new Map()
    let winFlag = true
  
    arr.map((num) => winCount.set(num, 0))
  
    while (winFlag) {
  
      if (arr[0] > arr[1]) {
        winner = arr[0]
        arr.push(arr[1])
        arr.splice(1, 1)
  
        winCount.set(arr[0], winCount.get(arr[0]) + 1)
  
        if (winCount.get(arr[0]) === k) {
          winFlag = false
          return winner
        }
  
      } else {
        winner = arr[1]
        arr.push(arr[0])
        arr.splice(0, 1)
  
        winCount.set(arr[1], winCount.get(arr[1]) + 1)
  
        if (winCount.get(arr[1]) === k) {
          winFlag = false
          return winner
        }
      }
  
    }
  
  }
  
  console.log(game([3, 2, 1], 10))


