(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 15,
      /*"dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },*/
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
	"max": 120000,
	tickInterval: 60000
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
     itemMarginBottom: 2,
    "x": 40,
	"width": 200,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#b00000", "index": 5}, /*rot */
  {"color": "#2f656b", "index": 4}, /*dunkelblau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());
