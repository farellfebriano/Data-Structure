//Ques 1: Given an input string s, reverse the order of the words
// input: 'the sky is blue' ---->>>> Output: 'blue is sky the'
// input: "  hello world "  ---->>>> Output: "world hello"
// input: "a good  example" ---->>>> Output: "exaple goo a"

// in this cooding challenge we use
// 1.) trim() as string manipulation
// 2.) pop()
// 3.) push()


let reverse = (string)=>{
    let splited = string.trim().split(' ')
    let stack=[]
    for(i of splited){
        stack.push(i)
    }
    let result=''
    while(stack.length){
        result += ' '+stack.pop()
    }
    return result.trim()
}
console.log(reverse("  hello world "));
