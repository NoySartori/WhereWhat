import { User } from "../user-model/user-model";

export interface Blog{
    id:string,
    title:string,
    content:string,
    preview:string,
    subject:string,
    user:User   
}