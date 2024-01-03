import { client, urlFor } from "@/lib/createClient";
import { Post } from "@/type";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";


import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == "post"] {
        slug
      }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  //   console.log(slug);

  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    body,
    author ->
  }`;

  const post: Post = await client.fetch(query, { slug });

  //   console.log(post);

  return (
    <div className="p-10 flex flex-col items-center justify-between w-full lg:px-72 mx-auto mb-10">
      <div className="flex items-center justify-center gap-x-24 mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={700}
            height={700}
            alt="main image"
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt="author image"
            className="w-28 h-28 rounded-full object-cover"
          />

          <p className="text-3xl text-[#333] font-semibold">
            {post?.author?.name}
          </p>

          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 bg-[#3e5b98] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <PortableText value={post?.body} components={RichText}/>    
      </div>
    </div>
  );
};

export default SlugPage;
