import { ArticleSummary } from "../../models/hashnode";
import BlogSummary from "../BlogSummary/BlogSummary";

interface Props {
  articles: ArticleSummary[];
}

function BlogGrid(props: Props): any {
  const { articles } = props;

  return (
    <div className="blog-grid  space-y-4">
      {articles.map((article: ArticleSummary, i: number) => (
        <BlogSummary key={i} article={article} />
      ))}
    </div>
  );
}

export default BlogGrid;
