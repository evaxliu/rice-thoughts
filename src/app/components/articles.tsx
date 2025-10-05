import fs from 'fs';
const filePath: string = '../lib/data';

interface ArticleData {
  id: number,
  title: string,
  author: string,
  status: string,
  date: string,
  body: string
}

export default function Articles() {
  fs.readFile(filePath, 'utf8', (err, jsonString: string) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    // File successfully read
    const data: ArticleData = JSON.parse(jsonString);
    const title: string = data.title;
    const author: string = data.author;
    const date: string = data.date;
    const body: string = data.body;
  });
  return (
    <div className="p-10 m-5 text-white flex items-center justify-center border">
      <div className="w-full flex-none md:w-64">
        <h1>
          {/* {data.title} */}
          Article title
        </h1>
        <h2>
          Author
        </h2>
        <p>Short description</p>
        <button>Read More...</button>
      </div>
    </div>
  );
}