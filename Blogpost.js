// models/BlogPost.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const BlogPost = sequelize.define('BlogPost', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    image_url: { type: DataTypes.STRING },
    video_url: { type: DataTypes.STRING },
    meta_title: { type: DataTypes.STRING },
    meta_description: { type: DataTypes.TEXT },
    tags: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM('published', 'draft'), defaultValue: 'draft' },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

module.exports = { sequelize, BlogPost };
