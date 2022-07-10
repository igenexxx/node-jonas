const fs = require('fs');
const suagent = require('superagent');

const getUrl = breed => `https://dog.ceo/api/breed/${breed}/images/random`;

const readFilePromise = file => new Promise((res, rej) => {
    fs.readFile(file, (err, data) => {
        if (err) rej(err);
        res(data);
    })
});

const writeFilePromise = (file, data) => new Promise((res, rej) => {
    fs.writeFile(file, data, err => {
        if (err) rej(err);
        res('success');
    })
});

const getDogPic = async () => {
    try {
        const breed = await readFilePromise(`${__dirname}/dog.txt`);
        console.log(`Breed: ${breed}`);

        const res1 = suagent.agent().get(getUrl(breed));
        const res2 = suagent.agent().get(getUrl(breed));
        const res3 = suagent.agent().get(getUrl(breed));
        const all = await Promise.all([res1, res2, res3]);
        const result = all.map(result => result.body.message);

        await writeFilePromise('dog-img.txt', result.join('\n'));
        console.log('Image saved');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return '2: READY'
};


(async () => {
    try {
        console.log(`1: Will get dog pics`);
        const x = await getDogPic();
        console.log(x);
        console.log('3: Done getting dog pics');
    } catch(e) {
        console.log('ERROR!');
    }
})();
