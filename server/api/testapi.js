export default defineEventHandler((event) => {
    // const {req, res} = event.node

    const query = getQuery(event)

    return {
        status: 1,
        msg: 'success: ' + query.id
    }
})