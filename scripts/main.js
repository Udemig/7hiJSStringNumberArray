//Bağlantı Kontrolu
//console.log('Script Bağlandı ')

//====Karşılaştırma Operatörleri Devam=====//

// "<" (Küçük) Operatörü soldaki değüerin sağdan büyük olup olamdığını kotrnol eder

let ogrenci1 = 15;
let ogrenci2 = 20;

document.write(
  "Birinci Öğrenci İkinci Öğrenciden küçükmü?  ",
  ogrenci1 < ogrenci2
);

// ">=" Büyük veya eşit olup olmadığını kıyaslar

let sepetTutar = 300;
let ucretsizKargoSarti = 300;
let saticiSayisi = 1;
let kampanyaliUrun = false;
document.write("<br>");
document.write(
  "Müşterini sepet tutarı Ücretsiz Kargo için yeterli mi? ",
  sepetTutar >= ucretsizKargoSarti
);

//=====Mantıksal Operatörler=====//
// "&&" VE operatörü her iki koşulunda olması gerektiğini kontrol eder
document.write("<br>");
document.write(
  "(Ve şartlı) N11 Müşterini sepet tutarı Ücretsiz Kargo için yeterli mi? ",
  sepetTutar >= ucretsizKargoSarti && saticiSayisi === 1
);

// "||"  her iki şarttan birinin sağlanıp sağlanmadığını kontrol eder

document.write("<br>");
document.write(
  "(Veya şartlı) Hepsiburada Müşterini sepet tutarı Ücretsiz Kargo için yeterli mi? ",
  sepetTutar >= ucretsizKargoSarti || kampanyaliUrun === true
);

//=====String Ifadeler ve Kullanılan Operatörler

//String = Yazı ile yazılan ifadeler metinelr

let isim = "Ahmet Çelik'in babası Hasan ";
let isim2 = 'Ahmet Çelik"in babasi "Hasan" ';
let selamlamaMetni = 'Udemige Hoş Geldiniz "Ahmet" ';
document.write("<br>");
document.write(selamlamaMetni);
document.write("<br>");
document.write("Öğrenci Adı: ", isim);

document.write("<br>");
let toplamEgitmen = 15;
let egitmen = new String(toplamEgitmen); //let egitmen='Hasan'
//console.log(toplamEgitmen)

// \n bu ifadeden sonraki string ifade alt satıra geçer
let karsilamaMetni =
  "Ahmet Çelik in babasi Mehmet\n=Udemige Hoş Geldiniz Ahmet ";
//console.log(karsilamaMetni);
// "length" string ifadenin uzunluğunu ölçer
document.write("Karşılama Metninin karakter Sayısı: ", karsilamaMetni.length);

document.write("<br>");
//slice ile 2 değer arasındaki ifadeyi alma
document.write("Öğrencinin Babası: ", karsilamaMetni.slice(22, 28));

let kullaniciAdi = "Hasan";
let kullaniciSodayi = "Çelik";

document.write("<br>");

//baştan başlayarak karakter alır
document.write(
  "Kullanıcı Avatar ilk iki Harf  ",
  kullaniciAdi.slice(0, 1) + kullaniciSodayi.slice(0, 1)
);

//slice ile metnin sonundan karakter alma

document.write("<br>");
let isimYildiz = "*".repeat(kullaniciAdi.length - 2);
let soyIsimYıldız = "*".repeat(kullaniciSodayi.length - 2);
document.write(
  "Bekleyen Hasta ",
  kullaniciAdi.slice(0, 1) +
    isimYildiz +
    kullaniciAdi.slice(-1).toUpperCase() +
    "   " +
    kullaniciSodayi.slice(0, 1) +
    soyIsimYıldız +
    kullaniciSodayi.slice(-1).toUpperCase()
);

// toUpperCase() girilen string ifadeyi büyük harf yapar
document.write("<br>");
document.write(kullaniciAdi.toUpperCase());
//toLowerCase() girlen metini küçük harf yapar

document.write("<br>");
document.write(kullaniciAdi.toLowerCase());

// replace() içerği değişitir

document.write("<br>");
document.write(karsilamaMetni.replace("Ahmet", "Hasan"));

// replaceAll() tüm istenilen değeri değiştiri
document.write("<br>");
document.write(karsilamaMetni.replaceAll("Ahmet", "Hasan"));

// concat() metinleri birleştirme için kullanılır

let avatarIsimBasHarf = kullaniciAdi.slice(0, 1); //H
let avatarSoyIsimBasHarf = kullaniciSodayi.slice(0, 1); //Ç
let avatar = "";
document.write("<br>");
document.write(
  "Concatlı avatar: ",
  avatar.concat(avatarIsimBasHarf, avatarSoyIsimBasHarf)
);

let boslukluIsim = "            Hasan        ";
document.write("<br>");
//Baştan itibaren boşluları siler
document.write("İsim", boslukluIsim.trimStart());

//sondan boşluk silme
document.write("<br>");
document.write("İsim", boslukluIsim.trimEnd(), "Soyisim");

let ad = "Mehmet";
let soyad = "Can";
let avatar2 = "";

// charAt() istenilen sıradaki karatekeri bulur
document.write("<br>");
document.write("İsmin Dördün harfi ", ad.charAt(4));

document.write("<br>");
document.write(avatar2.concat(ad.charAt(0), soyad.charAt(0)));

document.write("<br>");

let urunBilgisi = "Sepetinizdeki telefon kampanyalı telefon değildir";
//split() verilen karaktere göre parçalar getirir (Metni Diziye Çevirir)
document.write("Split :  ", urunBilgisi.split(" "));
document.write("<br>");
//metin içinde hangi sırada olduğunu gösterir baştan itibaren kontrol eder
document.write(urunBilgisi.indexOf("telefon"));

document.write("<br>");

// search metodu sırasını getirir

document.write(urunBilgisi.search("telefo"));

document.write("<br>");

//match()

document.write(urunBilgisi.match("Se"));

//includes Var mı yokmu kontrol eder

let sepet = "Macbook Iphone araba elma  armut Iphone ekmek";
document.write("<br>");
document.write(sepet.includes("Iphone", 10));

//=====Literal Template=====//

let adim = "Hasan";
let soyadim = "Çelik";
document.write("<br>");
document.write("Adım Soyadım:  ", adim + soyadim);
document.write("<br>");
document.write("Benim adım " + adim + " soyadım ise " + soyadim);
//backtick ` `
document.write("<br>");
document.write(`Benim adım ${adim} soyadım ise ${soyadim}`);

//=====Sayısal İşlemler=====//

let duzSayi = 959595959595959595564;
let deneme = "hasan";
document.write("<br>");
document.write(`Duz Sayi:  ${duzSayi}`);

//isNaN() sayı değilmi içine sayı grilirse false verir

document.write("<br>");
document.write(`duzSayi ${isNaN(duzSayi)} `);

//Sayıları Yazıya Çevirme

let stringDuzSayi = duzSayi.toString();
document.write("<br>");
document.write(typeof stringDuzSayi);

document.write("<br>");
let stringDuzSayi2 = new String(duzSayi);
document.write("<br>");
console.log(stringDuzSayi2);
document.write('<br>')

let stringDuzSayi3=''+duzSayi
document.write(typeof(stringDuzSayi3))


//Yazıları Sayıya çevirme
let anlikFiyat='12.545852'
document.write('<br>')
document.write(anlikFiyat)
//Girilen metinsel ifadeyi sayıya çevirir
let anlikFiyatNumber=new Number(anlikFiyat)
document.write('<br>')
document.write(anlikFiyatNumber)
document.write('<br>')
//parseInt tam sayıya çevirir
document.write(`Tam Sayı hali : ${parseInt(anlikFiyatNumber)} `)
document.write('<br>')
//parseFloat virgüllü değer gösterrir
document.write(`Virgllu Değer ${parseFloat(anlikFiyatNumber)}`)
