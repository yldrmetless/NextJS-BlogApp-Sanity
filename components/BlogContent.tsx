import { urlFor } from "@/lib/createClient";
import { Post } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  //   console.log(posts);

  return (
    <div className="w-full lg:px-72 bg-gray-100 py-20 px-10 flex flex-col gap-10">
      {posts.map((post) => (
        <Link
          href={{
            pathname: `/post/${post?.slug?.current}`,
            query: {
              slug: post?.slug?.current,
            },
          }}
          key={post?._id}
        >
          <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
            <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
              <Image
                src={urlFor(post?.mainImage).url()}
                width={500}
                height={500}
                alt="blogimage"
                className="w-full max-h-[500px] object-cover group-hover:scale-105 transition-all duration-500 rounded-bl-md"
              />
              <div className="absolute  top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200"></div>
              <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded text-white p-5 justify-center duration-200">
                <p className="text-lg font-semibold">Click to read</p>
              </div>
            </div>

            <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-x-2">
                  {post?.categories.map((item) => (
                    <p
                      className="text-xs uppercase text-blue-600 font-semibold"
                      key={item?._id}
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer mt-2">
                  {post?.title}
                </h2>
                <p className="text-gray-500">{post?.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-gray-500">
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <div className="flex items-center gap-2">
                  <Image
                    src={urlFor(post?.author?.image).url()}
                    width={200}
                    height={200}
                    alt="author image"
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <p className="text-sm font-medium">{post?.author?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogContent;
