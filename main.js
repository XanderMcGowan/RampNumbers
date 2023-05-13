let rampNumCount = 0
let rampNumbers = []

const getNum = () => {
  rampNumCount = 0
  let num = document.getElementById('num').value
    if (num.length > 5) {
      document.getElementById("results").innerHTML = "number must be lower then 99999"
      return
    }

    numOfRampsBelow(num)
}

 const numOfRampsBelow = (num) => {
   
    for (let i = 1; i < num; i++){
      let strNum = i.toString()
        if (i >= 10 & i < 100){
          if (strNum[0] <= strNum[1]){
            rampNumbers.push(strNum)
            rampNumCount ++
          }
        } 
      
        if (i >= 100 & i < 1000){
          if ((strNum[0] <= strNum[1]) && 
              (strNum[1] <= strNum[2]))
          {
            rampNumbers.push(strNum)
            rampNumCount ++
          }
        }
      
        if (i >= 1000 & i < 10000){
          if ((strNum[0] <= strNum[1]) && 
              (strNum[1] <= strNum[2]) && 
              (strNum[2] <= strNum[3]))
          {
            rampNumbers.push(strNum)
            rampNumCount ++
          }
        }

        if (i >= 10000 & i < 100000){
        if ((strNum[0] <= strNum[1]) && 
            (strNum[1] <= strNum[2]) && 
            (strNum[2] <= strNum[3]) &&
            (strNum[3] <= strNum[4]))
        {
            rampNumbers.push(strNum)
            rampNumCount ++
          }
        }

      
    }
    document.getElementById("results").innerHTML = `${rampNumCount} total ramp numbers are less than ${num}`
  }

