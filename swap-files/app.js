const fs = require('fs');
const path = require('path');

function moveFiles(firstDir, secondDir){
    fs.readdir(firstDir, (err, files) => {
        if (err){
            // console.log(err);
        }else{
            files.forEach(file => {
                const readStream = fs.createReadStream(path.join(firstDir, file));
                const writeStream = fs.createWriteStream(path.join(secondDir, file));
                readStream.pipe(writeStream);
                fs.unlink(path.join(firstDir, file), err => {
                    // console.log(err)
                })
            })
        }
    })
}

function swapFiles(firstPath, secondPath) {
    fs.mkdir(path.join(process.cwd(), 'demo123'), err => {
        // console.log(err)
    })
    const tempPath = path.join(process.cwd(), 'demo123')
    moveFiles(firstPath, tempPath);
    moveFiles(secondPath, firstPath);
    setTimeout(() => moveFiles(tempPath, secondPath), 500);
    setTimeout(() => {
        fs.rmdir(tempPath, {recursive: true}, (err) => {
        })
    }, 1000)
}

// Костильно, тому що не розібрався з промісами чи асинк/евейт
// Видалення папки відбувається швидше ніж переносяться файли 3ій раз
// Хотів зробити через стрім саме, попробував переробити на Rename - так само треба ділей робити


let path1 = path.join(process.cwd(), 's2018');
let path2 = path.join(process.cwd(), 's2020');

swapFiles(path1, path2)
