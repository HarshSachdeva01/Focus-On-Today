const customCheckboxList = document.querySelectorAll('.custom-checkbox')
const errorLabel =document.querySelector('.error-label')
const inputList = document.querySelectorAll('.goal-input')
const progressValue = document.querySelector('.progress-value')
const progressLabel=document.querySelector('.progress-label')
const lastQuoteLabel=document.querySelector('.quote')

const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, Keep going!',
    'whoa! you just completed all the goals , time for chill :D',
]

const allQuotesLast=[
    '"Move one step ahead, Today"',
    '"Just two more left"',
    '"You are just there"',
    '"woohoooo!! all goals are completed"'
]


//  const allGoals= JSON.parse(localStorage.getItem('allGoals') )  || {
//     first:{
//         name:'',
//         completed:false
//     },
//     second:{
//         name:'',
//         completed:false
//     },
//     third:{
//         name:'',
//         completed:false
//     }
// }



const allGoals= JSON.parse(localStorage.getItem('allGoals') )  || {

}

let completedGoalCount = Object.values(allGoals).filter((goal)=>goal.completed).length
progressValue.style.width = `${(completedGoalCount/3)*100}%`
progressLabel.innerText=allQuotes[completedGoalCount]
lastQuoteLabel.innerText=allQuotesLast[completedGoalCount]




customCheckboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allInputsAdded=[...inputList].every(function(input){
            return input.value
        })
        if(allInputsAdded){
        checkbox.parentElement.classList.toggle('completed')
        // progressValue.style.width = '33.33%'
        const inputId=checkbox.nextElementSibling.id
        allGoals[inputId].completed = !allGoals[inputId].completed
        completedGoalCount = Object.values(allGoals).filter((goal)=>goal.completed).length
        progressValue.style.width = `${(completedGoalCount/3)*100}%`
        progressValue.firstElementChild.innerText = `${completedGoalCount}/3 completed`
        progressLabel.innerText=allQuotes[completedGoalCount]
        lastQuoteLabel.innerText=allQuotesLast[completedGoalCount]
        localStorage.setItem('allGoals',JSON.stringify(allGoals))
        errorLabel.parentElement.classList.remove('show-error')
        }else{
            errorLabel.parentElement.classList.add('show-error')
        }
    })
    
})

inputList.forEach((input)=>{

    if(allGoals[input.id]){
        input.value = allGoals[input.id].name

        if(allGoals[input.id].completed){
            input.parentElement.classList.add('completed')
        }

    }
   


   

  

    input.addEventListener('focus',()=>{
        errorLabel.parentElement.classList.remove('show-error')
    })

    input.addEventListener('input',(e)=>{
        if(allGoals[input.id] && allGoals[input.id].completed){
            input.value=allGoals[input.id].name
            return
        }

        if(allGoals[input.id]){
        allGoals[input.id].name=
            input.value
        }else{
            allGoals[input.id] = {
                name:input.value,
                completed:false,  
                
            }

        }
        

        localStorage.setItem('allGoals',JSON.stringify(allGoals))
        console.log(allGoals);
        

    })
})

const tag = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageTag = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

// tag.innerText= localStorage.myName
// tag.innerText= localStorage.getItem('myName')


// nameInput.addEventListener('input',(e)=>{
//     // localStorage.myName = e.target.value
//         localStorage.setItem('myName',e.target.value)
//         tag.innerText=localStorage.getItem('myName')

//     // tag.innerText= localStorage.myName


// })



// // tag.innerText= localStorage.myName
// ageTag.innerText= localStorage.getItem('myAge')


// ageInput.addEventListener('input',(e)=>{
//     // localStorage.myName = e.target.value
//         localStorage.setItem('myAge',e.target.value)
//         ageTag.innerText=localStorage.getItem('myAge')

//     // ageTag.innerText= localStorage.myAge


// })
// const myData=JSON.parse(localStorage.getItem('myData')) || {}

// if(myData.name){
//     tag.innerText=myData.name
// }

// if(myData.age){
//     ageTag.innerText = myData.age


// }



    

// nameInput.addEventListener('input',(e)=>{
//     myData.name = e.target.value
//     tag.innerText=e.target.value
//     localStorage.setItem('myData',JSON.stringify(myData))

// })

// // tag.innerText=localStorage.getItem('myData').name


// // tag.innerText=localStorage.getItem('myData').name

// ageInput.addEventListener('input',(e)=>{
//     myData.age = e.target.value
//     ageTag.innerText=e.target.value
//     localStorage.setItem('myData',JSON.stringify(myData))

// })
    
















 
  
  







