import Link from "next/link";
import Image from "next/image";
import { client } from "../../../lib/sanityClient";
import { Post } from "../../../lib/sanityTypes";

async function getBlogPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"]{
      title,
      slug,
      "author": author->name,
      "categories": categories[]->title,
      mainImage,
      publishedAt,
      excerpt
    }`
  );
}

export default async function BlogPosts() {
  const posts = await getBlogPosts();

  console.log(posts);

  return (
    <div className="max-w-container w-4/5 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug.current}`}
            key={post.slug.current}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {post.mainImage && (
                <Image
                  src={post.mainImage.url}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 flex flex-col justify-between border h-full">
                <div className="w-4/5">
                  <h2 className="font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
