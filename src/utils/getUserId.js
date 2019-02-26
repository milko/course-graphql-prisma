import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
    const header = request.request
                 ? request.request.headers.authorization
                 : request.connection.context.Authorization

    if (header) {
        const token = header.replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisisasecret')
        return decoded.userId
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    } 
    
    // undefined means selection not provided,
    // pass null if you want to make the query fail.
    return null
}

export { getUserId as default }
