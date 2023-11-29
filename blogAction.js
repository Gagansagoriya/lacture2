import fs from 'fs';

// Function for writing the blog content

const writeBlog = (blogContent,userBlog) =>{

    try{
        fs.writeFileSync(blogContent,userBlog);
    }catch(error){
        console.log(error);
    }

}

const publishBlog = (blogContent,userBlog) =>{

    try{

        const contentBlog = fs.readFileSync(blogContent,"utf-8");

        console.log(contentBlog);

        return content;

    }
    catch(error){
        console.log(error);
        return null;

    }
}

export{writeBlog, publishBlog};