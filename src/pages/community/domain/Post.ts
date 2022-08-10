export default class Post {
  id: number;
  title: string;
  content: string;
  authorId: string

  constructor(title: string, content: string, authorId: string) {
    this.id = 0;
    this.title = title;
    this.content = content;
    this.authorId = authorId;
  }
}