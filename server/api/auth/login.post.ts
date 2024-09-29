

export default defineEventHandler(async (event)=> {
    const body = await readBody(event)

    const response = await $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/sessions`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return response
})