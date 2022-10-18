function isValid(s){
    str_list = s.split("")
    stack = []
    prev = stack[0]
    if (str_list.length%2 == 0){
        let false_count = 0;
        while (str_list.length >0){
            console.log(str_list)
            current = str_list[0]
            next = str_list[1]
            //console.log(prev, current)
            if (prev == "(" && current==")"){
                res = true
                
            } else if (prev == "{" && current=="}"){
                res=true
            } else if (prev == "[" && current=="]"){
                res=true
            } else(
                res = false
            )
            prev=current
            if (res==true){
                str_list.shift()
                str_list.shift()
                
            }else {
                //false_count++ 
                str_list.shift()
            } 
        
        
        
        
        //console.log(false_count)
        }
    } else {res=false}
    return res
}

console.log(isValid("[]"))