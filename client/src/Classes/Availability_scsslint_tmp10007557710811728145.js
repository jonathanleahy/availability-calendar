export default class Schedule {

    schedule = {}

    display() {
        return "Hello"
    }

    async getAvailability() {
        await fetch('http://localhost:8080/schedule/AlexW@contoso')
            .then(results => results.json())
            .then(data => {
                console.log(JSON.stringify(data))
                this.schedule = data;
                return data
            });
    }
}