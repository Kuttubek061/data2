function clockkk() {
    const date = document.getElementById('date')
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')


    const today = new Date()

    const weekDays = ["Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишенби","Жекшемби",]
    const allMonth = ['Үчтүн','Бирдин','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун','Жетинин','Бештин',]

    date.innerHTML = today.getDate()
    day.innerHTML = weekDays[today.getDay()-1]
    month.innerHTML =  allMonth [today.getMonth()]
    year.innerHTML = today.getFullYear()

    let hourss = today.getHours()
    let minutess = today.getMinutes()
    let secondss = today.getSeconds()

    console.log(hourss)
    // hours.innerHTML = today.getHours()
    // minutes.innerHTML = today.getMinutes()
    // seconds.innerHTML = today.getSeconds()

    if (hourss <= 9){
        hourss = '0' + hourss
    }
    if (minutess <= 9){
        minutess = '0' + minutess
    }
    if (secondss <= 9){
        secondss = '0' + secondss
    }

    hours.innerHTML = hourss
    minutes.innerHTML = minutess
    seconds.innerHTML = secondss  
    setTimeout(() => {
    clockkk()
    },1000)

}  

clockkk()









