const arr = ['abc', 449,undefined];

console.log(arr);
console.log(typeof arr);

console.log(Array.isArray(arr));

const movies = ['Iron Man', 'Stree 2', 'Black Adam', 'Avengers:Endgame','thor'];

console.log(movies[3]);
console.log(movies.indexOf('Black Adam'));
console.log(movies.at(-4));

movies[4] = 'Harry Potter';

console.log(movies);

//slicing

console.log(movies.slice(1,4));
console.log(movies.slice(-3));

//adding and removing elements

movies.push('THor');//add at the end
movies.unshift('SpiderMan');//add at the start
console.log(movies);

movies.pop();//remove from end
movies.shift();//remove from start
console.log(movies);

//movies.splice(1,2);//remove 2 elements from index two

//movies.splice(2,2,'Superman','Flash','Arrow');//replace three element
movies.splice(2,0,'Superman','Flash','Arrow');
console.log(movies);





