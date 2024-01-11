"use server"

export const submitLoginForm = async (prevState : any , form : FormData) => {
    try{
        const rawData = {
            email : form.get("email"),
            password : form.get("password")
        }
        const url = process.env.LOGIN_URL  as string 
        const response = await fetch(url , {
            method : "POST",
            body : JSON.stringify(rawData),
            headers : {
                accept : "application/json",
                "Content-Type" :"application/json"
            }
        })
        const responseData = await response.json()
        return {
            message : "Ok",
            data : responseData
        }
    }catch(e : any){
        return {
            message : e.message , 
            data : {}
        }
    }
}