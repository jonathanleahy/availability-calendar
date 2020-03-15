## Availability calendar

For this assignment we would like you to create a page at the url `/calendar` where you diplay the available slots when calling the availability API specced below.

You will also need to build the API (to make your life easier we have provided an express app in server.js).

Don't worry too much about the layout and style of the calendar - we will not score the assignment based on that.

## API Spec:
GET `/availability`

**Response structure:**

An example:
```[
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
```

**Business rules:**
- The input data to calculate the availability slot is in the data.json file. The data used follows this structure: https://docs.microsoft.com/en-us/graph/outlook-get-free-busy-schedule
- All dates and times received and sent are in UTC timezone
- All the available slots have to start at the beginning of the hour
- All slots are 60 minutes in duration

**Suggestions**
- Look at the spec of the data in input in the microsoft website and think of how to represent it 
- Do small steps and try to think in terms of small incremental scenarios
- We would prefer to see an end to end solution with very simple scenarios in terms of data displayed, rather than only the frontend or the backend
- Commit often
- If you want, keep track of your decisions in a separate file called decisions.md so it's easier for us to understand why you made some technical decisions. Don't write too much; a few pointers while you build the app will do.
- See what you can do in a maximum of 3 hours. We don't expect you to finish the test in that time, but want to see how far you can get.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# availability-calendar
