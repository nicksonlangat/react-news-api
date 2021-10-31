import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Articles from './Articles';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=8vAXVHAvav4dDQ4kIQUlTlef66Ycs5n1');
            setArticles(res.data.results);
            console.log(res.data.results);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
    );
    }
export default Home;