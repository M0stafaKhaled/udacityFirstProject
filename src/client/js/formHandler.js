import checkurl from './checkURL'
const fetchs = require('node-fetch')
const axios = require('axios')
 function  resultView(list){
            let elments = ["agreement" , "text" ,"score_tag", "agreement" , "subjectivity" , "confidence", "irony"]
            for(let i=0 ;i<elments.length;i++)
                if(list[elments[i]])
                    document.getElementById(elments[i]).innerText= elments[i] +" :"+ list[elments[i]]
                else
                    console.log(
                        document.getElementById(elments[i]) )           
}
let send = (body)=>{
    axios
            .post('http://localhost:8081/add-url', {
                url: body
            })
            .then(
                (response) => {
                    console.log(response.data)
                let list = response.data.sample;
              resultView(list)
                },
                (error) => {
                    console.log(error)
                }
            )
}
const handleSubmit = (url) => {
    if (checkurl(url)) 
        send(url);
        
    else 
        console.log('please enter url')
    
}
export  default handleSubmit

