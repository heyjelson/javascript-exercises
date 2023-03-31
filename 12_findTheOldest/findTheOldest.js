const findTheOldest = function(people) {
    const age = people.reduce((old, present) => {
        const oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
        const presentAge = getAge(present.yearOfBirth, present.yearOfDeath);
        return oldAge > presentAge ? old : present;
    });
    return age;
};

    const getAge = function(birth, death) {
        if(!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
