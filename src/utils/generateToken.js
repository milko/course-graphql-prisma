import jwt from 'jsonwebtoken'

const generateToken = (userId, duration = '7 days') => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: duration }
    )
}

export { generateToken as default }
