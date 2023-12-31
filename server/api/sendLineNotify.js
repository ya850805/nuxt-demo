//send Line notify需要寫在服務器端
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const {lineNotifyToken} = config
    console.log('xxx:' + lineNotifyToken)

    const body = await readBody(event)
    $fetch('https://notify-api.line.me/api/notify', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${config.lineNotifyToken}`,
        },
        method: 'post',
        body: `message=${body.message}`
    }).then(r => console.log(r)).catch(err => console.log(err))
})