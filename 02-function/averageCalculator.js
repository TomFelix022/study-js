function averageCalculator(numbers) {
    const total = numbers.reduce((accumulator,value)=>{
        return accumulator + value
    }) 

    return total / numbers.length
}

const listNumbers = [1,30,28,37,100]

console.log(averageCalculator(listNumbers))