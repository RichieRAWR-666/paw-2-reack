import {z} from 'zod'

const registerSchema = z.object({
    name : z.string().trim().min('3, "Nama minimal 3 karakter"'),
    email : z.email(),
    password : z.string().min(8, 'password minimal 8 karakter')
})

export default registerSchema