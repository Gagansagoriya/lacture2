import { writeBlog , publishBlog } from "./blogAction.js";

import readlinesync from 'readline-sync';

const blogContent = 'blogText.txt';

// Get user to write a blog 

const userBlog = readlinesync.question('Write a Blog : ');

writeBlog(blogContent,userBlog);

// Then publish the blog content \

publishBlog(blogContent);