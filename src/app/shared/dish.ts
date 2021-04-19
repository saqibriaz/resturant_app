import {Comment} from './Comment'

export class dish{
    id:string;
    name:string;
    image:string;
    category:string;
    featured:boolean;
    label:string;
    price:string;
    description:string;
    comments: Comment[];
 
}