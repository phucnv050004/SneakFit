import { TNews } from "@/interfaces/TNews";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const DetailArticle = () => {
    const [article, setArticle] = useState<TNews | null>(null);
    const [articles, setArticles] = useState<TNews[]>([]);
    const { id } = useParams();

    const getAllArticles = async () => {
        try {
            const { data } = await axios.get("/articles");
            setArticles(data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    useEffect(() => {
        getAllArticles();
    }, []);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching article:", error);
            }
        };
        fetchArticle();
    }, [id]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section: Article Details */}
                <div className="lg:col-span-2">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">{article?.title}</h1>
                        <p className="text-gray-600 text-xs md:text-sm mb-6">
                            By {article?.author} on 12/12/2023
                        </p>
                        <img
                            src={article?.images}
                            alt={article?.title}
                            className="w-full h-auto max-h-64 md:max-h-80 object-cover rounded-md mb-4"
                        />
                        <div className="text-base md:text-lg text-gray-700 mb-4">{article?.content}</div>
                    </div>
                </div>

                {/* Right Section: Related Articles */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Bài viết liên quan</h2>
                    <ul className="space-y-4 max-h-[400px] md:max-h-[500px] lg:max-h-[900px] overflow-y-auto">
                        {articles?.map((relatedArticle: TNews) => (
                            <li key={relatedArticle.id} className="flex items-center space-x-4 border-b pb-2">
                                <img
                                    src={relatedArticle.images}
                                    alt={relatedArticle.title}
                                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                                />
                                <Link
                                    to={`/article/${relatedArticle.id}`}
                                    className="text-blue-500 hover:text-blue-600 text-sm md:text-base"
                                >
                                    {relatedArticle.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailArticle;


