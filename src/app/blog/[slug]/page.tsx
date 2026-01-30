import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogContent from '@/components/BlogContent';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog-posts';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Urban Catering',
    };
  }

  return {
    title: `${post.title} | Urban Catering Blog`,
    description: post.content[0].slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.content[0].slice(0, 160),
      images: [{ url: post.image }],
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <BlogContent post={post} />
      <Footer />
    </>
  );
}
