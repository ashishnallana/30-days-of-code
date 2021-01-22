class Student extends Person {
    constructor(firstName,lastName,idNumber,scores){
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = parseInt(idNumber);
        this.scores = scores;
        this.calculate = () => {
            
            let sum = 0;
            this.scores.forEach(element => {
                sum += element;
            })
            const average = Math.ceil(sum/this.scores.length);
            
            
            var letter = "";
            if (average >= 90 && average <= 100) letter = "O";
            else if (average >= 80 && average < 90) letter = "E";
            else if (average >= 70 && average < 80) letter = "A";
            else if (average >= 55 && average < 70) letter = "P";
            else if (average >= 40 && average < 55) letter = "D";
            else if (average < 40) letter = "T";
    
            return letter;
    
    
            
        }
    }
