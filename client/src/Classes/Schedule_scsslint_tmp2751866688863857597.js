export default class Schedule {


    this.schedule
    
    display() {
        return "Hello"
    }

    async getLiveSchedule() {
        await fetch('http://localhost:8080/schedule/AlexW@contoso')
            .then(results => results.json())
            .then(data => {
                this.schedule = data;
            });
    }
}
