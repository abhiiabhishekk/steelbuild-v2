import type {QueryParams} from 'next-sanity'

import {client} from './client'

type SanityFetchOptions = {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: SanityFetchOptions): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
      tags,
    },
  })
}