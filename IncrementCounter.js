const counter_increments=document.querySelectorAll(".counter_increment")
counter_increments.forEach((counter_increment)=>{
    counter_increment.innerHTML=0
    const updateCounter=()=>{
        let target=+counter_increment.getAttribute("data-target") /*here "data-target" is 
        string so we havve to convert it into 'number' so for this we have three methods 
        one of them is used in this line i.e. we use uniray operator "+" this convert 
        string into number*/
        let counterStart=Number(counter_increment.innerHTML) /*here this is second method 
        of converting string into number*/
        let inc=target/100
        if(counterStart<target)
        {
            let practice=counter_increment.innerHTML=`${Math.round(counterStart+inc)}`
            setTimeout(updateCounter,25)
        }
        else{
            counter_increment.innerHTML=target
        }
    }
    updateCounter()
})
