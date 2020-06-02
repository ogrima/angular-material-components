import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sampleData: any[] = [
    { Day: 'Segunda', Clientes: 30, Veiculos: 0, Locação: 25 },
    { Day: 'Terça', Clientes: 25, Veiculos: 25, Locação: 0 },
    { Day: 'Quarta', Clientes: 30, Veiculos: 0, Locação: 25 },
    { Day: 'Quinta', Clientes: 35, Veiculos: 25, Locação: 45 },
    { Day: 'Sexta', Clientes: 0, Veiculos: 20, Locação: 25 },
    { Day: 'Sabado', Clientes: 30, Veiculos: 0, Locação: 30 },
    { Day: 'Domingo', Clientes: 60, Veiculos: 45, Locação: 0 }
];
padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
getWidth() : any {
if (document.body.offsetWidth < 850) {
  return '90%';
}

return 850;
}
xAxis: any =
{
    dataField: 'Day',
    unitInterval: 1,
    axisSize: 'auto',
    tickMarks: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
    },
    gridLines: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
    }
};
valueAxis: any =
{
    unitInterval: 10,
    minValue: 0,
    maxValue: 120,
    title: { text: 'Atendimentos por dia' },
    labels: { horizontalAlignment: 'right' },
    tickMarks: { color: '#BCBCBC' }
};
seriesGroups: any[] =
[
    {
        type: 'stackedcolumn',
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        series: [
            { dataField: 'Clientes', displayText: 'Clientes' },
            { dataField: 'Veiculos', displayText: 'Veiculos' },
            { dataField: 'Locação', displayText: 'Locação' }
        ]
    }
];
}
