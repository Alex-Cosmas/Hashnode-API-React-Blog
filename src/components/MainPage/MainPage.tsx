import { useEffect, useState } from 'react'
import { ArticleSummary } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';
import BlogGrid from '../BlogGrid/BlogGrid';
import './MainPage.css'

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
            <div className='section-border'>
                <div className='main-page'>
                    <h2 className='heading'>Who am I?</h2>
                    <p className='text'>Alex is a Product Designer/Developer living in Nairobi, Kenya.</p>
                    <p>Currently, Lead Product Designer for Simple Formations, tasked with building a Corporate Legal Entity & Compliance  managment solution.
                        Primary works with Figma, Excalidraw, React, TailwindCSS.
                        I am curious individual and not limited to just Design/Development.
                        Learning Elixir & Functional Programming to make me a holistic asset.
                        On occasions, I mentor & teach newbies
                    </p>
                    <p className='text'>You can find Katy on Twitter, GitHub, and Hashnode.</p>
                </div>
            </div>
            <div className='main-page'>
                <h2 className='heading'>Latest articles</h2>
            </div>
            {loading
                ? <div className='centered-div loading'>Loading blog posts...</div>
                : <BlogGrid articles={articles} />}
        </>
    )
}

export default MainPage
