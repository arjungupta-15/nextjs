import {z} from 'zod'
 
export const MessageSchema = z.object({
   content:z
   .string()
   .min(6,{message:" must be 6 characters"})
   .max(300,{message:"cannot be more than 300 characters"})
})