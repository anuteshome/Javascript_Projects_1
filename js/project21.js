function sex(evangadiClass) {
    let count=0;
    let num=evangadiClass.students.length;
    for(let i=0;i<num;i++){
       if(evangadiClass.students[i].sex=="M"){
        count++;
       }
    }
return count;
}




let evangadiClass = {
    lengthOfCourse: "1 Month",
    website: "https://www.evangadi.com/",
    isChallenging: false,
    topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
    students: [
    {
    name: "Abebe",
    age: 34,
    sex: "M"
    },
    {
    name: "Kebede",
    age: 44,
    sex: "M"
    },
    {
    name: "Almaz",
    age: 27,
    sex: "F"
    },
    {
    name: "Challa",
    age: 22,
    sex: "M"
    },
    {
    name: "Chaltu",
    age: 19,
    sex: "F"
    }
    ]
}

let all=sex(evangadiClass);
console.log(all);