export const myAction=(payload)=>{
    return{
        type:"ADD",
        payload
    }
}

export const IncAction=(id)=>{
    return{
        type:"INC",
        payload:id
    }
}

export const decAction=(id)=>{
    return{
        type:"DEC",
        payload:id
    }
}

export const removeAction = (id)=>{
    return{
        type:"REMOVE",
        payload:id
    }
}