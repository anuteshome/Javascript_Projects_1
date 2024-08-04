

function change_length() {

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
    
    evangadiClass.lengthOfCourse="5 Month";
    return evangadiClass;
}

let result=change_length();
console.log(result);