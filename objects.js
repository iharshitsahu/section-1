const user={name:'raju', email:'raju@gmail.com',password:'raju1'};

console.log(user.name);

console.log(user.email);

console.log(user['password']);
console.log(Object.keys(user));
console.log(Object.values(user));

user.password='khuljasimsim';

console.log(user);
user.address='Lucknow';
console.log(user);

const smartphone={
    brand:'1+',
    model:'nord c3',
    prize: 25000,
    color: ['black','blue','silver']
};

console.log(smartphone.color[1]);
smartphone.color[2]='white';
console.log(smartphone.color[2]);
smartphone.color.push('red');
console.log(smartphone.color);

const phonelist=[
    {brand:'1+',model:'nord c3',prize: 25000,color: ['black','blue','silver']},
    {brand:'samsung',model:'j2',prize: 15000,color: ['black','blue']},
    {brand:'vivo',model:'v7',prize: 20000,color: ['red','yellow']},
    {brand:'xiaomi',model:'note12',prize: 56000,color: ['black','blue','silver']}
];

console.log(phonelist.length);
console.log(phonelist[0].prize);
console.log(phonelist[2].color[1]);