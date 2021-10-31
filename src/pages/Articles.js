import React from 'react';
import Article from './Article.js';
import PropTypes from 'prop-types';

export default function Articles({ loading, articles }) {

    return (
        <>
            {
                loading ? (
                    "Loading..."
                ) : (
                    <section>
                    <div className="px-4 py-12 mx-auto">
                    <div className="max-w-4xl pt-24 mx-auto">
                        <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-black"></div>
                        </div>
                        <div className="relative flex justify-start">
                            <span className="pr-3 text-lg font-medium text-neutral-600 bg-white"> Most popular articles </span>
                        </div>
                        </div>
                        <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                        {articles.map((article) => (
                                   <div className="pt-8 sm:flex lg:items-end group">
                                        <Article article={article} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    </div>
                </section> )}
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};