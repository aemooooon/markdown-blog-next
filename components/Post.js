import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 200}`
  }

const Post = ({ post }) => {
    return (
        <div className="card">
            <Image loader={myLoader} src={post.frontmatter.cover_image} width={200} height={150} alt={post.frontmatter.title} />
            <div className="post-date">
                Post on {post.frontmatter.date}
            </div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a rel="noopener noreferrer" className='btn'>Read More</a>
            </Link>
        </div>
    )
}

export default Post
