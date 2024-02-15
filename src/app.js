import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap.css';
import './styles.css';
//
import * as wijmo from '@grapecity/wijmo';
import * as chart from '@grapecity/wijmo.chart';
import * as interaction from '@grapecity/wijmo.chart.interaction';
import { getData } from './data';
//
wijmo.setLicenseKey('aidar.nygmet@alumni.nu.edu.kz,E769971486566984#B0cJ5LlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7dzYpFnNzVVQTZDOFxWTuJ4billZHRETQBnRhlnQ5FWQ8VjY4JDd7FUdmt6QLhFSzQlN7xGVnNXQrQnZqVVUTJWS6Z4aCVjatdUcRBFaNhzLzgDWvFVYXFmTx56c5cDMiRnQthERrU7TXZkRC5UeyZVbKV7T74EdMdGeYt4K4kXVzlmS0pXZwoXO84GNwFjYOlWaiJkZBNkYy3kSZ54Za36aDtETMlVRLFzQadFRO96ZFBlVFdUNRVWcGV6ZpdXT6hFcqxWeC3iV6EUcFBXerMDcURnNS9WSwMFU98WRTxWM7QzcBhFNzcjWXhlaL54SxZ6VxoVWQFDSyAzVyM6QYl6YyN5MqhVUxZXYvlHaB9EM7MXODl4NyImaMlnV8xkWHp4T4Y5ZyE6NmJ4U7AnNpd6SUVXcXlWY6JmbTRVMVNDexMkeml7MjFDRst4R4UEMKZEO9c6SiojITJCLiUDOyI4QxIDNiojIIJCLwEDOyAjN8UDO0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiMDNyQDMxASNxIDM4IDMyIiOiQncDJCLiYTMzADNyAjMiojIwhXRiwiI0tmL5RWZuUnbukmbtVHbhBEdl56Z99mLyFGZpFmI0ISYONkIsUWdyRnOiwmdFJCLiQDO9YjN5YDO4EzN9kjN7IiOiQWSiwSfdtlOicGbmJCLiEjd4IDMyIiOxIIZ');
document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
    getData().then(response =>{
        console.log(response)
        let palette = ['rgba(55,90,127,1)', 'rgba(0,188,140,1)', 'rgba(52,152,219,1)', 'rgba(243,156,18,1)', 'rgba(231,76,60,1)', 'rgba(143,97,179,1)', 'rgba(176,135,37,1)', 'rgba(74,73,73,1)', 'rgba(0,0,0,1)']
        let theChart = new chart.FlexChart('#theChart', {
            itemsSource: response,
            bindingX: 'date',
            chartType: chart.ChartType.LineSymbols,
            series: [
                { binding: 'value', name: 'Astana1' }
            ],
            legend: { position: chart.Position.None },
            tooltip: {
                content: (ht) => {
                    return (ht && ht.x && ht.y)
                        ? `<b>Date:</b> ${wijmo.Globalize.formatDate(ht.x, 'hh:mm dd-MM-yyyy')}<br><b>Value:</b> ${ht.y.toFixed(2)}`
                        : '';
                }
            },
            plotMargin: 'NaN 60 NaN 60',
            palette: palette
        });
    let theChartSelector = new chart.FlexChart('#theChartSelector', {
        itemsSource: response,
        bindingX: 'date',
        chartType: chart.ChartType.Area,
        legend: {
            position: chart.Position.None
        },
        axisX: {
            position: chart.Position.None
        },
        axisY: {
            position: chart.Position.None
        },
        tooltip: { content: '' },
        series: [
            { binding: 'value' }
        ],
        palette: palette
    });
    let rangeSelector = new interaction.RangeSelector(theChartSelector, {
        seamless: true,
        rangeChanged: (sender) => {
            theChart.beginUpdate();
            theChart.axisX.min = sender.min;
            theChart.axisX.max = sender.max;
            theChart.endUpdate();
        }
    });
    })
 
   
    
}

