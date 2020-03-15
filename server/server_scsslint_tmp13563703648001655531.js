var express = require('express');
var cors = require('cors');

var app = express();
var port = 8080;

app.use(cors());

app.get('/availability', function (req, res) {
    return res.json(
        [
            { "date": "15/10/2019",
                "availableSlots": [
                    { "startTime": "9:00", "endTime": "10:00" },
                    { "startTime": "10:00", "endTime": "11:00" },
                ]
            },
            { "date": "16/10/2019",
                "availableSlots": [
                    { "startTime": "15:00", "endTime": "16:00" },
                    { "startTime": "16:00", "endTime": "17:00" },
                ]
            },
        ]
    );
});


app.get('/availability', function (req, res) {
    return res.json(
{
    "@odata.context":"https://graph.microsoft.com/v1.0/$metadata#Collection(microsoft.graph.scheduleInformation)",
    "value":[
    {
        "scheduleId":"AlexW@contoso.OnMicrosoft.com",
        "availabilityView":"111111002222222200000000000000000000",
        "scheduleItems":[
            {
                "status":"Tentative",
                "start":{
                    "dateTime":"2018-08-06T09:00:00.0000000",
                    "timeZone":"Pacific Standard Time"
                },
                "end":{
                    "dateTime":"2018-08-06T10:30:00.0000000",
                    "timeZone":"Pacific Standard Time"
                }
            },
            {
                "status":"Busy",
                "start":{
                    "dateTime":"2018-08-06T11:00:00.0000000",
                    "timeZone":"Pacific Standard Time"
                },
                "end":{
                    "dateTime":"2018-08-06T13:00:00.0000000",
                    "timeZone":"Pacific Standard Time"
                }
            }
        ],
        "workingHours":{
            "daysOfWeek":[
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ],
            "startTime":"08:00:00.0000000",
            "endTime":"17:00:00.0000000",
            "timeZone":{
                "@odata.type":"#microsoft.graph.customTimeZone",
                "bias":480,
                "name":"Customized Time Zone",
                "standardOffset":{
                    "time":"02:00:00.0000000",
                    "dayOccurrence":1,
                    "dayOfWeek":"sunday",
                    "month":11,
                    "year":0
                },
                "daylightOffset":{
                    "daylightBias":-60,
                    "time":"02:00:00.0000000",
                    "dayOccurrence":2,
                    "dayOfWeek":"sunday",
                    "month":3,
                    "year":0
                }
            }
        }
    }
]
}

app.listen(port, () => console.log(`App listening on port ${port}!`))
