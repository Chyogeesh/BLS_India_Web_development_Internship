// pages/blog/[id].js
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export default function BlogPost() {
    const { query } = useRouter();
    const { data, error } = useSWR(query.id ? `/api/posts/${query.id}` : null, fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error loading post</p>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            {data.image_url && <img src={data.image_url} alt="Post Image" />}
        </div>
    );
}
