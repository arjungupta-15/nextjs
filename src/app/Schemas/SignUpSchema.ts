import {z} from 'zod';

export const User = z
  .string()
  .min(5,"username atleast 5 characters long")
  .max(15,"username not more than 15 characters long")
  .regex(/^[a-zA-Z0-9]+$/,"username can only contain letters and numbers")

  export const SignUpSchema = z.object({
   username:User,
   email:z.string().email({message:"invalid email address"}),
   passwor:z.string().min(8,"password must be 8 charcters"),
  })