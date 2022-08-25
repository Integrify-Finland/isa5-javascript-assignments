let array =[1,4,2,3];

function minAndMax(){

    let minNum = Math.min(...array)
    let maxNum = Math.max(...array)

    console.log(`MAximum Number is: ${maxNum}`)
    console.log(`min Number is: ${minNum}`)
}

minAndMax()