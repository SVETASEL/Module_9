const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": { 
        "id_1": "Людмила",
        "id_2": "Мария",
        "id_3": "Екатерина",
        "id_4": "Анна",
        "id_5": "Ольга",
        "id_6": "Наталья",
        "id_7": "Елена",
        "id_8": "Ирина",
        "id_9": "Светлана",
        "id_10": "Татьяна"
    }
}`,

professionFemaleJson: `{
    "count": 10,
    "list": { 
    "id_1": "учитель",
    "id_2": "менеджер",
    "id_3": "бухгалтер",
    "id_4": "повар",
    "id_5": "экономист",
    "id_6": "маркетолог",
    "id_7": "дизайнер",
    "id_8": "воспитатель",
    "id_9": "домохозяйка",
    "id_10": "стилист"
    }
}`,

professionMaleJson: `{
    "count": 10,
    "list": { 
    "id_1": "учитель",
    "id_2": "менеджер",
    "id_3": "бухгалтер",
    "id_4": "инженер",
    "id_5": "экономист",
    "id_6": "маркетолог",
    "id_7": "дизайнер",
    "id_8": "воспитатель",
    "id_9": "водитель",
    "id_10": "слесарь"
    }
}`,

birthMonthsJson: `{
    "count": 12,
    "list": { 
    "id_1": "января",
    "id_2": "февраля",
    "id_3": "марта",
    "id_4": "апреля",
    "id_5": "мая",
    "id_6": "июня",
    "id_7": "июля",
    "id_8": "августа",
    "id_9": "сентября",
    "id_10": "октября",
    "id_11": "ноября",
    "id_12": "декабря"

    }
}`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return Math.floor(Math.random()*2) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
         // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomProfession: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomPatronymicName: function () {
    let firstName = this.randomValue(this.firstNameMaleJson);
    let patronymic;

    if (firstName.endsWith('р') || firstName.endsWith('м') || firstName.endsWith('н') || firstName.endsWith('л')) {
    if (this.person.gender === this.GENDER_MALE) {
      patronymic = firstName + 'ович';
    } else {
      patronymic = firstName + 'овна';
    }
    } else if (firstName.endsWith('й')) {
    let baseName = firstName.slice(0, -1); // Убираем "й" в конце
    if (this.person.gender === this.GENDER_MALE) {
      patronymic = baseName + 'евич';
    } else {
      patronymic = baseName + 'евна';
    }
    } else { (firstName.endsWith('а'))
    let baseName2 = firstName.slice(0, -1);
    // Для остальных случаев, добавляем "ович" для мужского пола и "овна" для женского пола
    if (this.person.gender === this.GENDER_MALE) {
      patronymic = baseName2 + 'ович';
    } else {
      patronymic = baseName2 + 'овна';
    }
  }
  return patronymic;
},

    randowmBirthDate: function () {
    let minYear = 1935;
    let maxYear = 2001;
    let year = Math.floor((Math.random() * (maxYear - minYear +1) + minYear));
    let month = Math.floor(Math.random() * 12);
    let daysInMonth;
        if (month === 1) {
        daysInMonth = 28;
        } else if (month === 3 || month === 5 || month === 8 || month === 10) {
        daysInMonth = 30;
        } else {
        daysInMonth = 31;   
        }
    let day = Math.floor(Math.random() * daysInMonth) + 1;
    let monthName = this.randomValue(this.birthMonthsJson);
    let formattedDate = day + ' ' + monthName + ' ' + year + ' года';

  return formattedDate;
},


    randomSurname: function () {
        let surnamesJson = this.randomValue(this.surnameJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            surnamesJson = surnamesJson.replace(/в(?=$)/g, 'ва').replace(/н$/g, 'на');
        }
        console.log(typeof(surnamesJson))
        return surnamesJson;
    },


    getPerson: function () {
        this.person = {};
        this.person.birthDate = this.randowmBirthDate();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession ();
        this.person.patronymic = this.randomPatronymicName ();
        return this.person;
    }
};

