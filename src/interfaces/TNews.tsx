export interface TNews {
    _id: string;
    title: string;
    content: string;
    author: string;
    date: string;
}
export interface NewsFormParams {
    title: string;
    author: string;
    content: string;
    isPublished: boolean;
}
