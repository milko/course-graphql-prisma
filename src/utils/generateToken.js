import jwt from 'jsonwebtoken'

const generateToken = (userId, duration = '7 days') => {
    return jwt.sign(
        { userId },
        'thisisasecret',
        { expiresIn: duration }
    )
}

export { generateToken as default }
