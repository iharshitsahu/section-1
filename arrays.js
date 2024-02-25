const arr=[4, 'harshit' , true, null];
console.log(arr);
console.log(typeof arr);

const movies =['ranjhna','jodh akhbar', '50 shades of grey',];
console.log(movies.length);
const myMovie='Animal';
console.log(myMovie.length);

// indexing
console.log(movies[1]);
console.log(movies.at (-1));
console.log(movies[56]);
console.log(movies.indexOf('jodh akhbar'));

//slicing
console.log(movies.slice(1,3));
console.log(movies.slice(1));
console.log(movies.slice(1,10));

//adding new ellement
movies.push('The nun');
movies.unshift('DDLJ');
console.log(movies);

//remove element
movies.pop();
console.log(movies);
movies.shift();
console.log(movies);

//adding and removing element from specific position
movies.splice(-2,1);
movies.splice(-2,0,'border','flash')
console.log(movies);
