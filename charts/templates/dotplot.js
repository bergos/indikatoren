var template = {
    "chart": {		
        events:{
            load: function() {                
                this.credits.element.onclick = function() {
                    /*
                    window.open(
                    "http://www.statistik.bs.ch",
                    '_blank' // http://stackoverflow.com/questions/16810556/how-to-open-credits-url-of-highcharts-in-new-tab
                    );
                    */
                };
            }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "width": 485,
        "height": 415,
        "spacingBottom": 45,
        "style": {
            "fontFamily": "Arial"
        },
        "zoomType": "xy",
        "type": "scatter",
		"inverted": true
    },
    "title": {
        "style": {
        "fontSize": "14px",
        "fontWeight": "bold",
        "fontFamily": "Arial",
        "color": "#000000"
        },        
        "align": "left"
    },
    "subtitle": {
        "style": {
        "fontSize": "12px",
        "fontWeight": "normal",
        "fontFamily": "Arial",
        "color": "#000000"
        },
        "text": "",
        "align": "left"
    },
    "plotOptions": {
        "series": {
            "dataLabels": {
                "x": 5,
                "align": "left",
                "verticalAlign": "middle",
                "enabled": false,
                "style": {
                    "fontSize": "10px"
                },
                "formatter": function(){
                    return Highcharts.numberFormat((this.y*100),1)+'%';                
                },
            }
        }
    },
    "yAxis": {
        "title": {
            "style": {
                "color": "#000000",
                "fontSize": null
            },
            "text": null
        },
        "labels": {
            "formatter": function(){
                return Highcharts.numberFormat((this.value*100),0)+'%';                
            },
            "style": {
                "color": "#000000"
            }
        }, 
        "min": 0
    },
    "xAxis": {
        "title": {
            "style": {
                "color": "#000000"
            }
        },
        "labels": {
            "style": {
                "color": "#000000"
            }
        },
        "tickColor": "#FFFFFF",
        "type": "category",
        "uniqueNames": true        
    },
    "tooltip": {
        "formatter": function(args){
            var this_point_index = this.series.data.indexOf(this.point);
            var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
            var other_series = args.chart.series[other_series_index];
            var other_point = other_series.data[this_point_index];
            return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                this.point.name +': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>' + 
                'Rang <b>' + other_point.y + '</b>';
        },        
        shared: true
    },
    "credits": {
        "enabled": true,
        "style": {
            "color": "#000000",
            "fontSize": "10px",
            "cursor": "default"
        },
        "position": {
            "align": "left",
            "verticalAlign": "bottom",
            "x": 10
        }
    },
    "legend": {
		"enabled": false,
        "symbolRadius": 0
	}
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199