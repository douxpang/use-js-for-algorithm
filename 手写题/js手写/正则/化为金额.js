console.log(10000000000..toLocaleString('de-DE'));

// 寻找字符空隙加 .  不会
console.log('10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')) 

// 寻找数字并在其后面加 . 
console.log('10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.'))