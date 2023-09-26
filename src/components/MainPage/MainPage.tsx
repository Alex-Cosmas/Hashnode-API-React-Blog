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
        <div className="main-page">
          <h2 className="heading">
            I'm Alex Cosmas, a Product Designer/Developer from Nairobi, Kenya.
          </h2>

          <p className="text">
            I am currently the Lead Product Designer at Simple Formations, where
            I'm spearheading the development of a Corporate Legal Entity and
            Compliance Management solution.
          </p>

          <p className="text">
            I'm a curious individual always seeking to expand my horizons and
            not one to limit myself to just Design and Development. Currently,
            deep in with Elixir and Functional Programming and enjoying every
            minute of it.
          </p>

          <p className="text">
            In addition to my personal growth, I also enjoy mentoring and
            teaching newcomers to the field.
          </p>
          <p className="text">
            You can connect with me on Twitter, GitHub, or Email to stay updated
            on my journey and insights.
          </p>
        </div>
      </div>
      <div className="main-page">
        <h2 className="heading">Latest articles</h2>
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
