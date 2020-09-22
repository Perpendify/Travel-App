function date_diff_indays(date1,date2) {
    console.log(date1,date2)
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
    console.log(dt1,dt2)
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

function daysToDepature() {

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 

    today = yyyy + '-' + mm + '-' + dd;

    var date2 = document.getElementById('inputDate').value; 
    return date_diff_indays(today,date2)
}


export { daysToDepature, date_diff_indays };
