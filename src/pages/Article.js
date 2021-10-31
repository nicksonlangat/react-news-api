import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
const Article = ({ article }) => {
    return (
        <div >
            {article && (
                <div>
               <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img className="w-full 
                rounded-md lg:h-16 lg:w-16" 
                src={logo}  alt="text"/>
                </div>
                <div>
                <span className="text-sm text-gray-900">{article.published_date}</span>
                <p className="mt-3 text-lg font-medium leading-6">
                    <a href="./blog-post.html" className="
                text-xl text-neutral-600
                group-hover:text-gray-900
                lg:text-2xl
                ">{article.title}</a>
               
                </p>
                <p className="mt-2 text-lg text-gray-700"> 
               {article.abstract}
                </p>
                </div>

                </div>
                
            )}
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;


                