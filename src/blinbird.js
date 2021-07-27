function toJson() {
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    let check1 = document.getElementById("check1")
    let check2 = document.getElementById("check2")
    let check3 = document.getElementById("check3")
    let check4 = document.getElementById("check4")
    let checkMassive = [check1,check2,check3,check4]
    let i = 1;
    let string = ""
    for(let item of checkMassive){
        if(item.checked){
            string +=i  + ","
        }
        i++;
    }
    const json ={
        question: question.value,
        answer1: answer1.value,
        answer2: answer2.value,
        answer3: answer3.value,
        answer4: answer4.value,
        checkAnswer: string

    }
    console.log(json)
    question.value = "";
    answer1.value = "";
    answer2.value = "";
    answer3.value = "";
    answer4.value = "";
    for(let item of checkMassive){
        item.checked = false;
    }
}
