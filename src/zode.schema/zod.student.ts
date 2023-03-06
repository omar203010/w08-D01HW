import {TypeOf, z} from "zod";
export const studentvalid = z.object({
    body: z.object({

        name: z.string({
            required_error: "name is required",
            invalid_type_error: "name only acceptes text",
          }),
          major: z.string({
      required_error: "major is required",
      invalid_type_error: "major only acceptes text",
    })
        })
        
       

});


        



export type  Registertype = TypeOf<typeof studentvalid>["body"]
