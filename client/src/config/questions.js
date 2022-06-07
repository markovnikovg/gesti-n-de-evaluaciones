const questions = {

    registerQuestions:[
        {
            title:"user",
            type:"text",
            select: false
        },
        {
            title:"pass",
            type:"password",
            select: false
        },
        {
            title:"mail",
            type:"email",
            select: false
        },
        {
            title:"school",
            select: true,
            options:["Ing. Luis A. Huergo","Ing. Otto Krause"]
        },
        {
            title:"year",
            select: true,
            options:["1","3"]
        }
    ],

    logInQuestions : [
        {
            title:"user",
            type:"text",
            select: false
        },
        {
            title:"pass",
            type:"password",
            select: false
        }
    ]
}

export default questions