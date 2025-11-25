// I need an api service that can be used to fetch data from the api
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface RequestOptions<TBody = unknown> {
  method?: HttpMethod
  headers?: HeadersInit
  body?: TBody
  params?: Record<string, string | number | boolean | undefined>
  next?: RequestInit["next"]        // allow Next.js cache/revalidate options
  cache?: RequestInit["cache"]
  signal?: AbortSignal
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://dummyjson.com"

function buildUrl(path: string, params?: RequestOptions["params"]) {
  const url = new URL(path, API_BASE_URL)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  return url.toString()
}

export async function apiFetch<TResponse, TBody = unknown>(
  path: string,
  { method = "GET", headers, body, params, ...rest }: RequestOptions<TBody> = {}
): Promise<TResponse> {
  const url = buildUrl(path, params)

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  }

  if (body !== undefined && method !== "GET") {
    config.body = typeof body === "string" ? body : JSON.stringify(body)
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    throw new Error(`API request failed (${response.status}): ${errorText || response.statusText}`)
  }

  // Handle empty response body
  if (response.status === 204 || response.headers.get("content-length") === "0") {
    return null as TResponse
  }

  return (await response.json()) as TResponse
}

// Convenience wrappers
export const api = {
  get: <TResponse>(path: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, method: "GET" }),
  post: <TResponse, TBody>(path: string, body: TBody, options?: Omit<RequestOptions<TBody>, "method" | "body">) =>
    apiFetch<TResponse, TBody>(path, { ...options, method: "POST", body }),
  put: <TResponse, TBody>(path: string, body: TBody, options?: Omit<RequestOptions<TBody>, "method" | "body">) =>
    apiFetch<TResponse, TBody>(path, { ...options, method: "PUT", body }),
  patch: <TResponse, TBody>(path: string, body: TBody, options?: Omit<RequestOptions<TBody>, "method" | "body">) =>
    apiFetch<TResponse, TBody>(path, { ...options, method: "PATCH", body }),
  delete: <TResponse>(path: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, method: "DELETE" }),
}