import { hash, compare } from 'bcryptjs';
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// handlers //


// 1 -> Get users from local database

export const getUsers = () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

// 2 -> verify user with email

export const verifyEmail = (email) => {
    const users = getUsers();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

// 3 -> save user to local database

export const saveUsers = async ({ firstname, lastname, email, password }) => {
    const users = getUsers();

    const isEmailFound = verifyEmail(email);
    if (isEmailFound) {
        throw new Error("User Already Exist!")
    }

    const hashedPassword = await hash(password, 12);

    users.push({
        id: users.length + 1,
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    fs.writeFileSync(filePath, JSON.stringify(users))
}

// 5 -> verify user with password

export const verifyPassword = async (hashedPassword, password) => {
    const isFound = await compare(password, hashedPassword);
    return isFound;
}

const blogFilePath = path.join(process.cwd(), 'src', 'data', 'blog.json');

// Get Blogs

export const getBlogs = () => {
    const data = JSON.parse(fs.readFileSync(blogFilePath));
    return data;
}

// Save Blogs

export const saveBlogs = ({ fullname, title, desc, date, img }) => {
    const blogs = getBlogs();
    blogs.push({
        id: crypto.randomUUID(),
        fullname,
        title,
        desc,
        date,
        img,
    });

    fs.writeFileSync(blogFilePath, JSON.stringify(blogs))
}

export const getBlogById = (id) => {
    const allBlogs = getBlogs();
    const blogById = allBlogs.find((blog) => blog.id === +id);
    return blogById;
}

export const deleteBlog = (id) => {
    let allBlogs = getBlogs();
    console.log('Before', allBlogs);
    let updateBlogs = allBlogs.filter((blog) => blog.id !== id);
    fs.writeFileSync(blogFilePath, JSON.stringify(updateBlogs))
}

export const updateBlog = (data, id) => {
    const allBlogs = getBlogs();
    const blog = getBlogById(id);
    const { title, desc, date } = data;
    const index = +blog.id - 1;

    allBlogs[index].title = title;
    allBlogs[index].desc = desc;
    allBlogs[index].date = date;

    fs.writeFileSync(blogFilePath, JSON.stringify(allBlogs))
}