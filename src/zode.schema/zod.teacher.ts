    import {TypeOf, z} from "zod";
    export const teachervalid = z.object({
        body: z.object({

            name: z.string({
                required_error: "name is required",
                invalid_type_error: "name only acceptes text",
              }),
            })
            
           
    
    });
    
    
            



export type  Registertype = TypeOf<typeof teachervalid>["body"]
// export type Logintypeschema = TypeOf<typeof Logintype>["body"];