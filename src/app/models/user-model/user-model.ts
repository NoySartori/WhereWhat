import { Blog } from "../blog-model/blog-model";

export interface User {
    name:string,
    email:string,
    img:string,
    gender:string,
    information:string,
    blogs:Blog[]
}