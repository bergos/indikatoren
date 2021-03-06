(function(){
    return {
  "plotOptions": {
    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
    {
      "color": "#C8C8C8",
      "index": 1
    },
    {
      "color": "#933F8D",
      "index": 0
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": -10,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "renderTo": 'container-I.01.1.0017',
    "type": "column",
    "inverted": true
  }
	}
}());
