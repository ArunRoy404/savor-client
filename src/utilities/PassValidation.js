const isValidPassword = (password) => {
    return new Promise((resolve, reject) => {
        const digitExist = /(?=.\d)/.test(password)
        const isLowerCase = /(?=.*[a-z])/.test(password)
        const isUpperCase = /(?=.*[A-Z])/.test(password)
        const isPassLong = password.length > 5

        if (!digitExist)  return reject( new Error('Password must contain at least one digit'))
        if (!isLowerCase) return reject( new Error('Password must contain at least one lowercase character'))
        if (!isUpperCase) return reject( new Error('Password must contain at least one uppercase character'))
        if (!isPassLong)  return reject( new Error('Password length must be at least 6 characters long.'))

        resolve(true)
    })
}

export default isValidPassword