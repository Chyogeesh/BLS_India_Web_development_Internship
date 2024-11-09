// routes/blogRoutes.js
const express = require('express');
const { BlogPost } = require('../models/BlogPost');
const router = express.Router();

// Create new post
router.post('/create', async (req, res) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = req.body;
    try {
        const post = await BlogPost.create({ title, content, image_url, video_url, meta_title, meta_description, tags, status });
        res.json(post);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

// Get all posts
router.get('/posts', async (req, res) => {
    const posts = await BlogPost.findAll();
    res.json(posts);
});

// Edit post
router.put('/edit/:id', async (req, res) => {
    try {
        const updated = await BlogPost.update(req.body, { where: { id: req.params.id } });
        res.json(updated);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

// Delete post
router.delete('/delete/:id', async (req, res) => {
    await BlogPost.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Post deleted' });
});

module.exports = router;
