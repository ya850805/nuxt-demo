export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const lineUserId = config.public.lineUserId
    const url = `https://api.line.me/v2/bot/profile/${lineUserId}`

    return await $fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.public.lineBotChannelAccessToken}`,
        },
        method: 'get'
    }).then(r => {
        console.log(r)
        return r
    }).catch(err => console.log(err))
})