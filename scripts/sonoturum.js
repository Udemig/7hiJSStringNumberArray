//Boolean Değer Sayısal değeri

let trueSayiDegeri=new Number(true)
let falseSayiDegeri=new Number(false)
document.write(`true nun sayısal karşılığı  ${trueSayiDegeri}`)
document.write('<br>')
document.write(`false un sayısal değeri ${falseSayiDegeri}`)

//Büyük normalde kulllanılmayacak sayı tanımlama
let sayi=5454545646546546546545646545645
document.write('<br>')
document.write(sayi)
//BigInt() buyuk sayı tanımlamada kullanılır 2 üstü 53 kadar yer kaplar
let buyukSayi=BigInt(sayi)
document.write('<br>')
document.write(buyukSayi)

//Ondalık sayı operatöleri

let dolar=26.8298
document.write('<br>')
//noktadan sonra gelecek değer
document.write(dolar.toFixed(3))

//toplam basamak sayısı
document.write('<br>')
document.write(dolar.toPrecision(2))



