const MEDUSA_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_API_KEY || ""
const REVALIDATE_WINDOW = process.env.REVALIDATE_WINDOW || 60 * 30 // 30 minutes
const ENDPOINT =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

export default async function medusaRequest(
  method: string,
  path = "",
  payload?: {
    query?: Record<string, any>
    body?: Record<string, any>
  }
) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-publishable-key": MEDUSA_API_KEY,
    },
    next: {
      revalidate: parseInt(REVALIDATE_WINDOW.toString()),
      tags: ["medusa_request"],
    },
  }

  if (payload?.body) {
    options.body = JSON.stringify(payload.body)
  }

  if (payload?.query) {
    const params = objectToURLSearchParams(payload.query!).toString()
    path = `${path}?${params}`
  }

  const limit = payload?.query?.limit || 100
  const offset = payload?.query?.offset || 0

  try {
    const result = await fetch(`${ENDPOINT}/store${path}`, options)
    const body = await result.json()

    if (body.errors) {
      throw body.errors[0]
    }

    const nextPage = offset + limit

    body.nextPage = body.count > nextPage ? nextPage : null

    return {
      status: result.status,
      ok: result.ok,
      body,
    }
  } catch (error: any) {
    throw {
      error: error.message,
    }
  }
}

const getAccessToken = async () => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      email: "admin@medusa-test.com",
      password: "supersecret",
    }),
  }

  const authRes = await fetch(
    "http://localhost:9000/admin/auth/token",
    requestOptions
  ).then((response) => response.json())

  return authRes
}

export async function medusaAdminRequest(
  method: string,
  path = "",
  payload?: {
    query?: Record<string, any>
    body?: Record<string, any>
  }
) {
  const authRes = await getAccessToken()

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authRes.access_token}`,
    },
    next: {
      revalidate: parseInt(REVALIDATE_WINDOW.toString()),
      tags: ["medusa_request"],
    },
  }

  if (payload?.body) {
    options.body = JSON.stringify(payload.body)
  }

  if (payload?.query) {
    const params = objectToURLSearchParams(payload.query!).toString()
    path = `${path}?${params}`
  }

  const limit = payload?.query?.limit || 100
  const offset = payload?.query?.offset || 0

  try {
    const result = await fetch(`${ENDPOINT}/admin${path}`, options)
    const body = await result.json()

    if (body.errors) {
      throw body.errors[0]
    }

    const nextPage = offset + limit

    body.nextPage = body.count > nextPage ? nextPage : null

    return {
      status: result.status,
      ok: result.ok,
      body,
    }
  } catch (error: any) {
    throw error
  }
}

function objectToURLSearchParams(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams()

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value: any) => {
        params.append(`${key}[]`, value)
      })
    } else {
      params.append(key, obj[key])
    }
  }

  return params
}
