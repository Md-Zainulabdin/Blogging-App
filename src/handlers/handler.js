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

export const saveBlogs = ({ fullname, title, desc, date }) => {
    const blogs = getBlogs();
    blogs.push({
        id: blogs.length + 1,
        fullname,
        title,
        desc,
        date,
    });

    fs.writeFileSync(blogFilePath, JSON.stringify(blogs))
}