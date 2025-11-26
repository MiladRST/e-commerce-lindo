"server only"

type FetchOptions = {
  revalidate?: number | false
  tags?: string[]
  cache?: 'force-cache' | 'no-store'
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://dummyjson.com"

export async function fetcher<T>(
  url: string,
  options?: FetchOptions & RequestInit
): Promise<T> {
  const { revalidate, tags, ...fetchOptions } = options || {}

  const res = await fetch(`${BASE_URL + url}`, {
    ...fetchOptions,
    next: { revalidate, tags },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
  }

  return res.json()
}

// Optional: Add a non-throwing version if you prefer
export async function fetcherSafe<T>(
  url: string,
  options?: FetchOptions & RequestInit
): Promise<{ data: T | null; error: string | null }> {
  try {
    const data = await fetcher<T>(url, options)
    return { data, error: null }
  } catch (error) {
    return { data: null, error: (error as Error).message }
  }
}