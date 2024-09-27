

export default defineEventHandler(async (event)=> {
    const body = await readBody(event)

    const response = await $fetch('/api/v1/sessions', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return response
})