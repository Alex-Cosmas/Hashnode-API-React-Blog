import { useEffect, useState } from "react";
import { ArticleSummary } from "../../models/hashnode";
import { HashnodeClient } from "../../services/hashnode-client";
import BlogGrid from "../BlogGrid/BlogGrid";

function MainPage() {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function func(): Promise<void> {
      const client = new HashnodeClient();
      const result = await client.fetchBlogPosts();
      const articles = result;

      setArticles(articles);
      setLoading(false);
    }
    func();
  }, []); // [] means only load once on initial page render

  return (
    <>
      <div className="">
        <h2 className="heading">Articles</h2>
        <p>Written a couple of articles — some more noteworthy than others.</p>
      </div>
      {loading ? (
        <div className="centered-div loading">Loading blog posts...</div>
      ) : (
        <BlogGrid articles={articles} />
      )}
    </>
  );
}

export default MainPage;
