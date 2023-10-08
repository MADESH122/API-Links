 
//--------------------task-complited-----------------------//
var res = fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then((data)=>data.json()).then((data1)=>{
    console.log(data1);
    for (var state in data1){ 
        var stateName =  state ;
        var totalCases = data1[state].total.confirmed  ;
        var totalDeceased = data1[state].total.deceased  ;
        var totalVaccinated1 = data1[state].total.vaccinated1 ;
        var totalVaccinated2 = data1[state].total.vaccinated2 ;
 
console.log(`StateName: ${stateName}  , TotalCases:${totalCases}  , TotalDeceased: ${totalDeceased}  , TotalVaccinated1: ${totalVaccinated1}  , TotalVaccinated2: ${totalVaccinated2}`)
    }
})

 