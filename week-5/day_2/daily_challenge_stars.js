 let stars = '';
 for (let i = 1; i <= 6; i++) {
     stars += '*';
     console.log(stars);
 }

 for (let i = 1; i <= 6; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    console.log(line);
}
