function updateTime() {
    
    const clock = document.getElementById("clock")
   const currentTimeInMilliSecond = Date.now()
    
    clock.textContent = `Current UTC Time in Miliseconds : ${currentTimeInMilliSecond}`


}
updateTime()
setInterval(updateTime, 1000)
function updateDay(){
   const now = new Date()
  const options = {
    weekday: 'long'
  }
                                                                                                                                                                                                                                                                                                                                          
   const labelDate = document.getElementById("time")
   const finalTime = new Intl.DateTimeFormat('en-US', options).format(now)
   labelDate.textContent = `Today is ${finalTime}`
}
updateDay() 