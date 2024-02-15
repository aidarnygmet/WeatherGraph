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