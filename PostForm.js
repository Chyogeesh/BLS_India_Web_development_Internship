// components/PostForm.js
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function PostForm({ post, onSubmit }) {
    const { register, handleSubmit } = useForm({ defaultValues: post || {} });

    const submitHandler = async (data) => {
        await axios.post('/api/posts/create', data);
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <input {...register('title')} placeholder="Title" />
            <textarea {...register('content')} placeholder="Content" />
            <input {...register('image_url')} placeholder="Image URL" />
            <input {...register('video_url')} placeholder="Video URL" />
            <input {...register('meta_title')} placeholder="Meta Title" />
            <input {...register('meta_description')} placeholder="Meta Description" />
            <input {...register('tags')} placeholder="Tags" />
            <button type="submit">Save</button>
        </form>
    );
}
