export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const body = await readBody(event)
    const userMessage = {
        "to": config.lineUserId,
        "messages": [
            {
                "type": "text",
                "text": body.message
            }
        ]
    }

    $fetch('https://api.line.me/v2/bot/message/push', {
        headers: {
            'Authorization': `Bearer ${config.lineBotChannelAccessToken}`,
        },
        method: 'post',
        body: JSON.stringify(userMessage)
    }).then(r => console.log(r)).catch(err => console.log(err))
})