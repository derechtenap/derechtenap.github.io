import Link from 'next/link';
import { reader } from './reader';
import './styles.css';
import { Button } from '@components/ui/button';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <>
      <h1 className="text-blue-800">Tim Deres</h1>
      <Button variant="secondary">Hello</Button>
      <p>Web Developer</p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
