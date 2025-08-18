function generatePassword(len) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  let result = ''
  for (let i = 0; i < len; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    result += chars[randomIndex]
  }
  return result
}

let password = generatePassword(6)
console.log(`Generated password: ${password}`)