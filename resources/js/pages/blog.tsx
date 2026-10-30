import { Head } from '@inertiajs/react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import blogPosts from '@/data/blog-posts';

export default function Blog() {
    return (
        <>
            <Head title="Blog">
                <meta
                    name="description"
                    content="Neues aus dem Zürcher Agentur-Kosmos der ESE Agency. Take off!"
                />
                <meta property="og:title" content="Blog" />
                <meta
                    property="og:description"
                    content="Neues aus dem Zürcher Agentur-Kosmos der ESE Agency. Take off!"
                />
                <meta
                    property="og:image"
                    content="https://cdn.prod.website-files.com/5ad5ed47829a45473b3d336f/650b10f803caa67e1525fc3e_ese-home-thumb.jpg"
                />
            </Head>
            <BlogHero />
            <BlogGrid posts={blogPosts} />
        </>
    );
}
