export default function generatePass() {
    let password : string = ''
    let character : string = 'aghbcprkWLMNZEYU@$%!123456789.AaHhOu'
    let passwordLenght = 8

    for(let index = 0; index < passwordLenght; index++) {
        password += character.charAt(
            Math.floor(Math.random() * character.length)
        )
    }


    return password
}