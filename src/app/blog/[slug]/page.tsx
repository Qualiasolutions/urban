import { notFound } from 'next/navigation';
import BlogContent from '@/components/BlogContent';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog-posts';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

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
