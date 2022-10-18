function isValid(s){
    str_list = s.split("")
    count = 0
    while (str_list.length >0){
        current = str_list[0]
        next = str_list[1]
        if (current == "(" && next==")"){
            res = true            
        } else if (current == "{" && next=="}"){
            res=true
        } else if (current == "[" && next=="]"){
            res=true
        } else(
            res = false
        )
        if (res === true){
            str_list.shift()
            str_list.shift()
        } else{
            str_list.shift()
        }
    }
    return res
}

console.log(isValid(']()'))