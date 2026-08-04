import {BLOGS_QUERY} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/fetch'
import type {SanityBlogListItem} from '@/types/sanityBlog'

export default async function SanityTestPage() {
  const blogs = await sanityFetch<SanityBlogListItem[]>({
    query: BLOGS_QUERY,
    revalidate: 0,
  })

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-700">
          Sanity Connection Test
        </p>

        <h1 className="text-4xl font-bold">
          Published Blogs
        </h1>

        <p className="mt-3 text-gray-600">
          Total published blogs received: {blogs.length}
        </p>

        {blogs.length === 0 ? (
          <div className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <h2 className="font-semibold text-amber-900">
              No published blog found
            </h2>

            <p className="mt-2 text-sm text-amber-800">
              Create or publish at least one Blog document in Sanity Studio
              and refresh this page.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-4">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h2 className="text-xl font-semibold">
                  {blog.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {blog.excerpt || 'No excerpt provided'}
                </p>

                <dl className="mt-5 grid gap-2 text-sm text-gray-600">
                  <div>
                    <dt className="inline font-semibold">
                      Slug:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.slug}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Category:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.category || 'Not provided'}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Author:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.author || 'Not provided'}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Reading time:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.readingTime}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Published date:{' '}
                    </dt>

                    <dd className="inline">
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString(
                            'en-IN',
                            {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                            }
                          )
                        : 'Not provided'}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Featured:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.featured ? 'Yes' : 'No'}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Tags:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.tags.length > 0
                        ? blog.tags.join(', ')
                        : 'No tags'}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline font-semibold">
                      Thumbnail:{' '}
                    </dt>
                    <dd className="inline">
                      {blog.thumbnail?.asset?.url
                        ? 'Available'
                        : 'Not provided'}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}