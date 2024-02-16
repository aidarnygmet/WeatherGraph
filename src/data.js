export async function getData() {
    const response = await fetch('http://localhost:8080/get/forecast_directly/Astana1');
    const data = await response.json();
    
    const convertedData = []
      for (const item of data) {
        const date = (new Date(item.dt*1000))
        convertedData.push({date: date, value: item.temp})
      }
    return convertedData;
    // fetch('http://localhost:8080/get/forecast/Astana1')
    // .then(response => response.json())
    // .then(data => {
    //     const labels = data.map(entry => {
    //         const [day, month, year] = entry.date.split('/');
    //         const [hours, minutes] = entry.time.split(':');
    //         return ({date: new Date(year, month - 1, day, hours, minutes), value: entry.temp});
    //     });
        
    // });
}
export async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/get/forecast_directly/Astana1');
        const data = await response.json();
        const res = data.map(entry=>{
            return {
                date: timestampToDate(entry.dt),
                time: timestampToTime(entry.dt),
                temp: entry.temp, 
                feels_like: entry.feels_like, 
                pressure: entry.pressure,
                humidity: entry.humidity,
                dew_point: entry.dew_point,
                uvi: entry.uvi,
                clouds: entry.clouds,
                visibility: entry.visibility,
                wind_speed: entry.wind_speed,
                wind_deg: entry.wind_deg,
                pop: entry.pop

            }
        })
        return {key: res};
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
function timestampToDate(timestamp) {
    const date = new Date(timestamp*1000);
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (zero-based) and pad with leading zero if necessary
    const year = date.getFullYear().toString(); // Get full year
    return `${day}/${month}/${year}`;
}
function timestampToTime(timestamp) {
    const date = new Date(timestamp*1000);
    const hours = date.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if necessary
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
    return `${hours}:${minutes}`;
}