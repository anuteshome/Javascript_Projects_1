function ave_age(evangadiClass) {
    let allAge=0;
    let number=evangadiClass.students.length;

    for(let i=0;i<number;i++){
        allAge=allAge+evangadiClass.students[i].age;
    }
    let ave=allAge/number;


    return ave;
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





let resulting = ave_age(evangadiClass);
console.log(resulting);
