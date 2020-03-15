## Your decisions logs

1. Data-in

The microsoft example has the availability log in this format:

```
{        
   "Schedules": ["AlexW@contoso.OnMicrosoft.com"],
   "StartTime": {
       "dateTime": "2018-08-06T09:00:00",
       "timeZone": "Pacific Standard Time"
   },
   "EndTime": {
       "dateTime": "2018-08-06T18:00:00",
       "timeZone": "Pacific Standard Time"
   },
   "availabilityViewInterval": "15"
}
```

as the getSchedule is for the 2018-08-06, I assume they should both be working from the same day.
