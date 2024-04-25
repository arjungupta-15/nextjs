import {z} from 'zod'
 
export const SignInSchema = z.object({
    identifer:z.string(),
    password:z.string(),
    
})