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
        <div className="centered-div loading">
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <BlogGrid articles={articles} />
      )}
    </>
  );
}

export default MainPage;
