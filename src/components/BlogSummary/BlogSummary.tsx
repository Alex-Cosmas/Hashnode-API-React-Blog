// import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ArticleSummary } from "../../models/hashnode";

interface Props {
  article: ArticleSummary;
  key: number;
}

function BlogSummary(props: Props) {
  // const { title, brief, slug, dateAdded, totalReactions } = props.article;
  const { title, brief, slug } = props.article;
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="px-4 py-0.5 rounded-sm bg-slate-50 cursor-pointer"
        onClick={() => {
          navigate(`/article/${slug}`);
        }}
      >
        <h3>{title}</h3>
        <p>{brief}</p>
      </div>

      {/* <div className='info-grid small-text'>
                <span className='info-item'>❤ {totalReactions}</span>
                <span className='info-item'>{moment(dateAdded.toString(), 'YYYY-MM-DDTHH:mm:ss.fffZ').fromNow()}</span>
            </div> */}
    </div>
  );
}

export default BlogSummary;
