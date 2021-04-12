// Iteration 1: All directors? - Get the array of all directors.
function turnHoursToMinutes(arr){
    // console.log(arr) 
    function minutesHour(hoursAndMinutes){
        //console.log(hoursAndMinutes) //--> Ej. "1h 18min"
        minutesOnly = hoursAndMinutes.replace(/h|min/g,'').split(' ') 
        // console.log(minutesHour)
        return minutesOnly.reduce((acumulador, currentV)=>{
            return (Number(acumulador)*60)+Number(currentV)
        })
    }
    newArr = arr.map((movies)=>{
        obj = {
            director: movies.director,
            duration: Number(minutesHour(movies.duration)),
            genre: movies.genre,
            rate: movies.rate,
            title: movies.title,
            year: movies.year
        }
        return obj
    })
    return newArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies){
    //console.log(arrMovies)
    rate = arrMovies.reduce((sum, currentV)=>{
        
        return sum + Number(currentV.rate)},0)
    rate/=arrMovies.length 
    rate= Number(rate.toFixed(2))
    return rate
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrMovies){
    arrDramaMovies = arrMovies.filter((movies)=>{
        return movies.genre.includes('Drama')
    })
    if(arrDramaMovies.length>0){
        return ratesAverage(arrDramaMovies)
    }else {
        return undefined
    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (arrMovies){
    if(arrMovies.length===0){
        return []
    }
    if(arrMovies.length<2){
        return arrMovies[0].title
    }
    
    ordered = arrMovies.sort((a,b)=>{
        if(a.title>b.title){return 1}
        if(a.title<b.title){return -1}
        return 0
    })
    if(arrMovies.length<20){
        onlyTitleArr= ordered.map((e)=>{
            return e.title})
        return onlyTitleArr
    }
    orderedTwenty = [] //length = 0

    for(let i=0; i<20; i++){
        orderedTwenty.push(ordered[i].title)
    }
    // console.log(orderedTwenty.length) //length = 20
    // console.log(orderedTwenty[0].title)
    console.log(orderedTwenty,'orderedTwenty')
    return orderedTwenty
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arrMovies){
    if(arrMovies.length===0){
        return undefined
    }else{
        
        arrMoviesYearly =arrMovies.map((movie)=>{
            return {
                year: movie.year,
                rate: movie.rate
            }
        })

    }
}

// function createObjYearly (year,rate){
//     let objYear
//     objYear[year] = {
//         rates: []
//     }
//     // objYear[year].rates.push(rate)
//     return objYear
// }
function orderByDuration(arrMovies){
    console.log(arrMovies)
    arrOrdered = arrMovies.sort((a,b)=>{
        if(a.duration == b.duration){
            return -1
        }else {
            return a.duration - b.duration
        }
    })
    console.log(arrOrdered)
    return arrOrdered
}

function howManyMovies(arrMovies){
    if(arrMovies.length===0){
        return undefined
    }
    arrSteven = arrMovies.filter((element)=>{
        return element.director==='Steven Spielberg'&&element.genre.includes('Drama')
    })
    return `Steven Spielberg directed ${arrSteven.length} drama movies!`
}