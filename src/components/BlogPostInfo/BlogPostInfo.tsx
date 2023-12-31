// import moment from "moment";
// import { HashnodeArticleUrl } from "../../external-links";
import { Article } from "../../models/hashnode";
// import "./BlogPostInfo.css";

interface Props {
  article: Article;
}

function BlogPostInfo(props: Props) {
  const { article } = props;

  //   const added = moment(article.dateAdded);
  //   const updated = moment(article.dateUpdated ?? article.dateAdded);
  return (
    <>
      <div className="tags section-border space-x-2 ">
        {article.tags.map((t, i) => (
          <span
            className="bg-white/90 text-xs font-xs uppercase px-2 font-medium rounded-lg"
            key={i}
          >
            {t.name}
          </span>
        ))}
      </div>
      <div className="article-details section-border">
        {/* <div className='article-item'><a href={HashnodeArticleUrl(article.slug)} >{article.totalReactions} reactions ❤</a></div> */}
        {/* <div className='article-item'>Written {added.format('LLL')}</div>
            <div className='article-item'>Last updated {updated.format('LLL')}</div> */}
        {article.isFeatured && (
          <div>
            <i>This article was featured on Hashnode! 🏆</i>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogPostInfo;
