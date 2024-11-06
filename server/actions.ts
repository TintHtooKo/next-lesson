"use server"

import { db } from "@/server"
import { posts, todos } from "./schema"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"
import { error } from "console"
import { redirect } from "next/navigation"

export const readData = async() => {
    const todos = await db.query.todos.findMany()
    if(!todos){
        return {error : 'No todos found'}
    }
    return {success : todos}
}

export const createData = async(formData : FormData) => {
    const todoTitle = formData.get('title')?.toString()
    if(!todoTitle){
        return {error : 'Todo title is required'}
    }

    await db.insert(todos).values({title : todoTitle})
    revalidatePath("/")
    return {success : 'Todo created successfully'}
}

export const deleteData = async(formData: FormData) => {
    const id = Number(formData.get('id'));
    if(!id){
        return {error : 'Id is required'}
    }

    await db.delete(todos).where(eq(todos.id, id))
    revalidatePath("/")
    return {success : 'Todo deleted successfully'}
}

export const updateData = async(formData : FormData)=>{
    const todoTitle = formData.get('title')?.toString()
    const todoId = Number(formData.get('id'))
    if(!todoTitle){
        return {error : 'No Todo Found'}
    }

    await db.update(todos).set({title : todoTitle}).where(eq(todos.id,todoId))
    revalidatePath("/");
    redirect("/")

}


// For Blog
export const getPosts = async() => {
    const posts = await db.query.posts.findMany()
    if(!posts){
        return {error : 'No posts found'}
    }
    return {success : posts}
}

export const createPost = async(formData : FormData) => {
    const title = formData.get('title')?.toString()
    const desc = formData.get('desc')?.toString()
    if(!title || !desc){
        return {error : 'Title or desc is required'}
    }

    await db.insert(posts).values({title , desc})
    revalidatePath("/")
    redirect("/")
}

export const getPost = async(id : number) => {
    const post = await db.query.posts.findFirst({where : eq(posts.id, id)})
    if(!post){
        redirect("/")
    }
    return {success : post}
}

export const deletePost = async(formData:FormData) => {
    const id = Number(formData.get('id'))
    if(!id){
        return {error : 'Id is required'}
    }
    await db.delete(posts).where(eq(posts.id, id))
    revalidatePath("/")
    return {success : 'Post deleted successfully'}
}

export const updatePost = async(formData : FormData) => {
    const id = Number(formData.get('id'))
    const title = formData.get('title')?.toString()
    const desc = formData.get('desc')?.toString()
    if(!title || !desc){
        return {error : 'Title or desc is required'}
    }
    await db.update(posts).set({title, desc}).where(eq(posts.id, id))
    revalidatePath("/")
    redirect("/")
}