import Link from 'next/link';
import Articles from './components/articles';

export default function Home() {
  return (
    <div>
      <div>
        <title>Kengli Blog</title>
      </div>
      <div>
        <Articles/>
      </div>
    </div>
  );
}