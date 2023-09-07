//=====Array (Diziler)======//

let arabalar=['bmw','volvo','fiat','mercedes']
document.write(arabalar)
document.write('<br>')
let tirlar=new Array('DAF','Scania','Mercedes','Volvo')
document.write(tirlar[1])

document.write('<br>')
//length ile dizi eleman sayısı hesablanır

document.write(`Tır Listesinin uzunluğu ${tirlar.length}`)

//İsimler adında dizi luşturun ve içine 5 tane isim ekleyin ve 3. ismi ekrana yazdırın

//=====Array Methods======//

// push() Sona eleman ekler

document.write(`Tırlar dizi Ford markası eklenmeden önce ${tirlar}`)

tirlar.push('Ford')
document.write('<br>')
document.write(`Tırlar Dizisi güncel ${tirlar}`)

//pop() sondan eleman çıkartır
document.write('<br>')
tirlar.pop()
document.write(`Tırlar Dizisi güncel pop metoundan sonra  ${tirlar}`)

//shift() dizinin başından ki elemnaı siler

document.write('<br>')
tirlar.shift()
document.write('shift ',tirlar)

document.write('<br>')

//istenen sıradan kaldırır
delete tirlar[2]
document.write('delete ',tirlar)



//unShift() başa ekleme yapar
tirlar.unshift('MAN')
document.write('<br>')
document.write(tirlar)

//iki dizi birlşetirme

document.write('<br>')
document.write(arabalar.concat(tirlar))


