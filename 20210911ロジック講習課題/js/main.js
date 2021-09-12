for (let count = 1; count <= 100; count ++) {
    if (count % 3 == 0 && count % 5 == 0) {
     console.log(`異世界に犬として転生した俺がツンデレお嬢様に「このアホ犬！」と罵られながら魔王と戦うことになった件(${count}回目)`);
    } else if (count % 3 == 0) {
        console.log(`アホ(${count}回目)`);
    } else if (count % 5 == 0) {
        console.log(`犬(${count}回目)`);
    } else if (count % 2 == 0) {
        console.log(`${count}回目`)
    }
}