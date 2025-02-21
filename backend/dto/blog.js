class BlogDTO{
    constructor(blog){
        this._id = blog._id;
    this.author = blog.author;
    this.content = blog.content;
    this.title = blog.title;
    this.photo = typeof blog.photoPath === "object" 
    ? JSON.stringify(blog.photoPath)  // Convert to string if object
    : blog.photoPath;
    }

}

module.exports = BlogDTO;