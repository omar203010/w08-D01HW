    import {TypeOf, z} from "zod";
    export const createMovietype = z.object({
        body: z.object({

            name: z.string({
                required_error: "title is required",
                invalid_type_error: "title must be a string"
    
                })
                .min(2),
                
            genre: z.string({
                required_error: "genre is required",
                invalid_type_error: "genre must be a string"
    
                }),
             
            rating: z.number({
                required_error: "rating is required",
                invalid_type_error: "rating must be a number"
                
                
            }),
                
             
            duration:z.number({
                required_error: "duration is required",
                invalid_type_error: "duration must be a number"
    
                })
                .min(60,"يجب ان تكون دقائق الفيلم اكثر من 60")
    
     })
    
    
    });
    
    
            



export type  Registertype = TypeOf<typeof createMovietype>["body"]
// export type Logintypeschema = TypeOf<typeof Logintype>["body"];