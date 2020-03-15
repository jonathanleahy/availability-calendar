export default class ClientsDiary {

    data = {}

    constructor(availability, schedule) {
        this.data.availability = availability
        this.data.schedule = schedule
    }

    /**
     * This should return an availability array for the day specified in the parameter.
     * This data will be generated from the availability and schedule data.
     * This is returning dummy data at the moment
     *
     * @returns {{Schedules: [string], EndTime: {dateTime: string, timeZone: string}, StartTime: {dateTime: string, timeZone: string}, availabilityViewInterval: string}[]}
     */
    getDaysSchedule(selectedDay) {

        return (
            [
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
            ]
        );
    }

}
