function reverse_string(str){
    let split_string = str.split("");
    let reverse_array = split_string.reverse();
    let join_array = reverse_array.join("");
    return join_array

    //return str.split("").reverse().join("");
}

function palindrome(){
    let msg = document.getElementById("checker").value;
    let ans = document.getElementById("result");
    if(msg == ''){
        alert("Please enter any Word")
    }else{
    msg = msg.toLowerCase();

    if(msg == reverse_string(msg)){
        ans.innerHTML = "It's a Palindrome!"
    }
    else{
        ans.innerHTML = "It's not a palindrome!"
    }
}
}