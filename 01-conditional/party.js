const sex = 'female'
const age = 16
const valueTicketMale = 50
const valueTicketFemale = 0

if (age >= 18) {
  if (sex === 'male') {
    console.log('Você poderá entrar. Valor a pagar R$:', valueTicketMale)
  } else {
    console.log('Você poderá entrar. Valor a pagar R$:', valueTicketFemale)
  }
} else {
  console.log('Você não poderá entrar, por ser menor de idade.')
}