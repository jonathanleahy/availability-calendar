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

app.listen(port, () => console.log(`App listening on port ${port}!`))
