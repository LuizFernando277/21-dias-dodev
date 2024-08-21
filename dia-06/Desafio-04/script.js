let tabuada = 0;

tabuada = Number(prompt('Digite a tabuada desejada:'))

for (let i = 0; i <= 10; i++){
    console.log(`${tabuada} x ${i} = ` +tabuada*i)
}

console.log('---------- DIVISÃO ----------')

for (let i = 0; i <= 10; i++){
    console.log(`${tabuada+1} x ${i} = ` +(tabuada+1)*i)
}

console.log('---------- DIVISÃO ----------')

for (let i = 0; i <= 10; i++){
    console.log(`${tabuada+2} x ${i} = ` +(tabuada+2)*i)
}
