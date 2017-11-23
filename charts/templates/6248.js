(function(){
    return {
   chart:{
  		//"width":665,
  	},
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderColor: 0
        }
  },
  "yAxis": {
  	max: 900,
  	tickInterval: 450,
  	min:-100,
    "labels": {
      "format": "{value:,.0f}",
    },
	plotLines: [{
                value: 0,
                color: 'white',
                width: 2,
                zIndex: 10
                }]
  },
  "xAxis": {
   "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"x": 25,
	itemWidth: 100,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#a8c4cb",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#fabd24",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
	{
      "color": "#000000",
      "index": 1,
      "type": "line",
      "marker": {
        "enabled": false
      }, 

      //"yAxis": 1,
      legendIndex: 3,
      tooltip: {
      	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    }
    },
  ],  
  "tooltip": {
    "shared": true
  },
};
}());