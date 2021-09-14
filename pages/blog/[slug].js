import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 200}`
  }

export default function PostPage(
    { frontmatter: {
        title,
        date,
        cover_image
    },
        slug,
        content }
) {
    return (
        <div>
            <Link href="/">
                <a className="btn btn-back">Go Back</a>
            </Link>
            <div className="card card-page">
                <h1 className="post-title">{title}</h1>
                <div className="post-date">Posted on {date}</div>
                <Image loader={myLoader} width={300} height={200} src={cover_image} alt={title} />
                <div className="post-body">
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
            </div>
        </div>
    )
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths: paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
