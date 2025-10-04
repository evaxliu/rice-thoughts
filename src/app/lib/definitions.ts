export type Article = {
  id: number;
  title: string;
  author: string;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'posted' | 'draft';
};