/* //ESTUDOS SOBRE SETS
const mySet = new Set()

mySet.add (1);
mySet.add ('cabbage');
mySet.add (1);
 ySet.has(5);


mySet.has(3);


mySet.delete(5)

mySet.delete(1)



mySet.add(18)

mySet.has(3)


console.log(mySet) */

function getAdmins (Map) {
    let admins = []
    for ([key, value] of users){
        if (value === 'admin'){
            admins.push(key)
        }
    }
    return admins
}

var users = new Map()

users.set('Luiz', 'admin')
users.set('Paulo', 'manager')
users.set('Marco', 'user')
users.set('Ana', 'admin')


console.log(getAdmins(users))

