const videoList = [
  {
    id: 1,
    title: "Haydarpaşa Gar'ı; koca bir ümidi, hafızayı ve zamanı içinde taşır.",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/Cs3aiUfkpkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>',
  },
  {
    id: 2,
    title: "Haydarpaşa ve Sirkeci Garları İstanbullularındır.",
    src: ' width="425" height="210" src="https://www.youtube.com/embed/MDk0I-ezVwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>',
  },
  {
    id: 3,
    title: "HAYDARPAŞA KAZISI TARİHE IŞIK TUTUYOR",
    src: 'width ="425" height="210" src="https://www.youtube.com/embed/IWKWtozKtyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
  {
    id: 4,
    title: "Haydarpaşa Garı'nın Tarihi ve Son Hali",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/Z-vJqYjtBNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
  {
    id: 5,
    title: "Kadıköy'de rayların altından çıkan İstanbul tarihi - DW Türkçe",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/j98HzHZHfsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
  {
    id: 6,
    title: "HAYDARPAŞA GARI NE ZAMAN AÇILACAK? SON DURUMU...",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/EnuHeoulgB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
  {
    id: 7,
    title: "Ayla Çelik - Bağdat (Beyazıt Öztürk Düet Versiyon)",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/xl63OdwuoAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
  {
    id: 8,
    title: "Candan Erçetin Kırık Kalpler Duragında",
    src: 'width="425" height="210" src="https://www.youtube.com/embed/Cj7Y6yHA098" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen',
  },
];

const videoPage = document.querySelector(".video-pages");

window.addEventListener("DOMContentLoaded", function () {
  let displayList = videoList.map(function (item) {
    return `
      <div class="videos">
        <iframe class="videos-single"
         ${item.src}
        ></iframe>
        <p class = "video-text">
          ${item.title}
        </p>
      </div>
`;
  });
  displayList = displayList.join("");
  videoPage.innerHTML = displayList;
});

const kitapList = [
  {
    id: 1,
    author: "  MUTLU BİNARK & GANİ ÇULHA & I. KOCABIYIK",
    name: " ZAMAN VE UZAM İÇİNDE HAYDARPAŞA GARI GÖRSEL VE SÖZLÜ TANIKLIK",
    src: "./img/book-img/Zaman_Ve_Uzam_Icinde.jpg",
    desc: "Haydarpaşa Garı hem yolun sonu hem de başlangıç noktasıdır. Farklı tren hatlarını kullanan yolcuların hedeflerine ulaşmasında Gar, buluşma noktasıdır. Haydarpaşa Garı, sadece demiryolu taşımacılığına olanak sağlayan iç avlu ile bu avlu zemininde ve liman alanında gerçekleşen olaylar, geçenler, gidenler ile değil, avluyu çevreleyen tarihi binası, bu yapı içerisinde hizmet veren TCDD personeli ile farklı öykülere sahiptir. Bir yapının öyküsü, yapıya dokusunu veren yaşam öyküleri ile birlikte işlenmelidir. Bu nedenle, bu çalışmada, içindeki ve içinden geçen yaşam öykülerinin yirmi dört saat ile sınırlandırılmasıyla, Haydarpaşa Gar binasının ve demiryollarının toplumsal hafızadaki yer alışı ortaya çıkartılmaya çalışıldı ve böylece yanıbaşımızdaki 'yapı ile onun öykülerine' kulak vermek amaçlandı. Bir konuda çok sayıda ve farklı sözlü tanıklıkların derlenmesi, Stephen Caunce'nin belirttiği üzere, ' ... bütün bu tanıklıklar ya da en azından bu tanıklıkların büyük bir bölümü arasındaki ortak çizgiyi yakalama ve tamamen kişisel tavırları ve inançları bulup, gerekiyorsa ayıklama olanağı sunar' (2001: 25). Bu çalışmada da otuz kişinin sözlü tanıklığına başvuruldu. Görüşmeye katılan herkese çalışmanın amacı ve malzemelerin kullanım şekli hakkında bilgi verildi. Görüşmeler sırasında kimliğinin yazılı malzemede açıklanmamasını veya ses kaydının kullanılmamasını isteyenlerin bu talepleri yazım aşamasında yerine getirildi. Görüşmeye katılanlardan çalışma konusu olan mekân ile ilgili görsel malzemeleri paylaşmaları da istendi. BTS 1 No'lu Şube'den mekânda gerçekleşen sendikal eylemler ve diğer toplumsal eylemlerle ilgili görsel malzeme desteği temin edildi. Sözlü tanıklıklarda gündeme gelen olaylar yazılı malzemelerin taraması, özellikle gazete arşivi taraması ile eşleştirildi ve desteklendi...",
  },
  {
    id: 2,
    author: "Derleme",
    name: "Haydarpaşa Kitabı: Kent, Mekan, Mücadele",
    src: "./img/book-img/Kent_Mekan_Mucadele.jpg",
    desc: "Haydarpaşa Garı, Türkiye’de kentleşme dinamiklerinin farklı boyutlarını bir arada düşünebilmeye olanak sağlayan az sayıdaki mekânlardan biridir. Bu anlamıyla da yalnızca Kadıköy veya İstanbul için değil, tüm Türkiye için tarihsel, kültürel ve sosyolojik anlamda özgünlükler taşır.Kadıköy Belediyesi’nin kent araştırmaları merkezi olan Kadıköy Akademi bünyesinde hazırlanan ve Akademi Serisi’nin ilk yayını olan Haydarpaşa Kitabı: Mekan, Kent, Mücadele ile Haydarpaşa’ya dair özgün ve derinlikli makaleler bir araya getiriliyor. Kitapta, mimarlık tarihi, kültürel ve endüstriyel miras, kentsel politika, ekonomi-politik, kentsel ulaşım ve planlama, mekânsal kimlik, sinema ve sanat çalışmaları, akustik ekoloji ve ses peyzajı/çevresi, kentsel toplumsal hareketler ve emek mücadelesi alanından araştırma ve analizler, demiryolcuların ve sendikacıların tanıklıkları ile bir arada sunuluyor.Bir sanat eseri, bir mimari yapı, bir demiryolu mirası, bir direniş mekânı, seslerin buluştuğu bir yer, mahalle mekânı, film karesi ve daha birçok farklı formda Haydarpaşa hikâyelerini barındıran çalışma, Gar’ın imkanlarını da kayıt altına alıyor...",
  },
  {
    id: 3,
    author: "Murat Batmankaya",
    name: "MARMARA'DA BİR BALIK OLARAK HAYDARPAŞA",
    src: "./img/book-img/Marmarada_Bir_Balık.jpg",
    desc: "Haydarpaşa Garı'ndan dolu dolu vagonlarla İstanbul'a giren her tren biraz daha değiştirir şehrin çehresini. Hayatın ritmini arttırması, hızlı kara yolu araçlarının, otobüslerin ağırbaşlı trenlerin yerini almaya başlamasıyla yolcuları da değişir Haydarpaşa Garı'nın. Artık gideceği yere bir an önce ulaşmak isteyenlerin değil, belki daha da çok yolculuk sürecini yaşamak isteyenlerin seçeneğine dönüşür trenler. Yalnız ve yorgun bireylerin... Bununla birlikte trenler yalnızlık, kenara itilmişlik, ya da bilinçli bir kaçışın, romaneskini hep korudu. Haydarpaşa ise görkemli binasının suskun yüzüyle nasıl da denk düşer bu kaçışlara. Bulunduğu yere ait değilmiş gibi, tedirgin durmaz mı suyun kenarında. Boğaz''ın dokusuna en aykırı bina da o değil midir? Kendini toplum içinde tedirgin, yalnız duyanların, yerini yadırgayanların dilinden de en iyi o anlayacak, kaçış yollarını o açacaktır.",
  },
  {
    id: 4,
    author: "Haydarpaşa Dayanışması",
    name: "Yaşayan Haydarpaşa",
    src: "./img/book-img/Yasayan_Haydarpasa.webp",
    desc: "Haydarpaşa’nın şehre sunduğu farklı pratiklere, kişisel, kolektif ve politik belleğe açılan kitap, Mücadelenin Belleği, Paylaştığımız Her Şey, Haydarpaşa Anlatıları ve Öyküleri, Haydarpaşa’dan Şiirler başlıklı olmak üzere dört bölümden oluşuyor. Kitap, Haydarpaşa Garı’ndaki kent hakkı ve emek mücadelesine, mekânın politik belleğine, kişisel anılara, deneyimlere, demiryolculuk kültürüne ve dostluklara açılan tanıklıkları bir araya getirmeyi amaçlıyor. Aslında hem kolektif hem de son derece tekil olabilen Haydarpaşa’ya dair paylaştığımız belleğin, doğrudan bu belleği kuranlar tarafından yazıldığı bir kitap bu. Yani burada üçüncü kişilerin anlatılarından ziyade; bizzat aktörlerin, öznelerin anlatımlarını görüyoruz. Farklı mesleklerden ve yerlerden gelen ve bu kitapta Haydarpaşa ortak paydasında buluşan 66 yazar bulunuyor. Çocukluğunu Haydarpaşa’da geçirenlerin, ailesi demiryolcu olanların, demiryolcu emekçilerinin, Haydarpaşa’da dans edenlerin, fotoğraf çekenlerin, ilk bestesini Haydarpaşa’da yapanların, Gar’a öyküler ve şiirler yazanların, Haydarpaşa’dan yolculuklara gidip, yolculuklardan gelenlerin… Yani yaşamının bir bölümünde yolu Haydarpaşa’yla kesişmiş ve buna özel bir anlam yüklemiş kişilerin anlatıları yer alıyor.",
  },
  {
    id: 5,
    author: "BAŞAR ÖZTÜRK",
    name: "HAYDARPAŞA'NIN SON MEMURU ",
    src: "./img/book-img/Haydarpasanın_Son_Memuru.jpg",
    desc: "ilerledikçe, her şeye başladığımız o yeşil mezarlığa aşkımızı gömeceğimizi biliyordum. “Aşkımızı gömmek ve mezarlık…” Sözcüklerin, hislerin ve mekânların tuhaf denk gelişini düşündüm Aysel ile yürürken. Yanımda yürüyen bu güzel kadının, terk edilişim karşısında gösterdiğim kayıtsızlığa nasıl sinir olduğunu görüyordum.1908 yılında hizmete açılan Haydarpaşa Garı’nın yakın zamanda geçirdiği dramatik dönüşümü, bundan böyle trensiz ve insansız bırakılacağı projeyi odağına alıyor Başar Öztürk. Haydarpaşa’nın Son Memuru romanı, İstanbul’un, Avrasya’nın tarihi binası Haydarpaşa Garı’nın ve çalışanlarının sesi soluğu oluyor.Gara avukat olarak atanan Efes; Baba Ali, Aysel ve diğer karakterler eşliğinde hayatına yeni anlamlar, yeni ve değerli yaşantılar eklerken, gar binasının dönüşüm projesi ile zor günler yaşayacaktır. Bu değişimin kendi iç dünyasına yansıyan hüznüyle yaşadığı endişe, Efes’te tutunamama haline dönüşür. Bir yandan Aysel ile kurmayı düşledikleri yuvaları, mesleki sorumluluğu ve Haydarpaşa’ya sahip çıkabilme telaşı ama en çok da geçmişinden getirdiği içli, düşünceli yapısı ile Efes, diğer yanda da Haydarpaşa’nın ve memur-işçi ev sahiplerinin yaşadıkları hazin hikâyesi ve sendikal mücadelelerle sosyo-politik roman kimliği de kazanıyor Haydarpaşa’nın Son Memuru",
  },
  {
    id: 6,
    author: "ARİF ATILGAN",
    name: "GEÇMİŞTEN GÜNÜMÜZE HAYDARPAŞA",
    src: "./img/book-img/Gecmisten_Gunumuze_Haydarpasa.jpg",
    desc: "Kadıköylü yazar-mimar Arif Atılgan’ın farklı yönleriyle Haydarpaşa’yı kaleme aldığı son kitabı “Geçmişten Günümüze Haydarpaşa”, K-İletişim Yayınları tarafından yayımlandı. Kitabında Haydarpaşa denildiğinde genellikle akıllara gar binası ve çevresinin geldiğine değinen Atılgan; “Halbuki Haydarpaşa tarihte Yeldeğirmeni’ni, limanın üzerinde kalan İngiliz Mezarlığı’nı ve çevresini, İbrahimağa ve Acıbadem’i içerisine alan büyük bir alanın adıdır” diyor.İstanbul’un kent kültürü ve kent hafızası üzerinde eşsiz bir öneme sahip olan Haydarpaşa’dan Pendik’e kadar olan bölgenin Kadıköy olarak anıldığını da dile getiren Arif Atılgan; “Kadıköylüler, Avrupa Yakası’na geçtiklerinde İstanbul’a gidiyorum derlerdi. İşte o Kadıköy’ün simgesi, Haydarpaşa Gar Binası idi. 100 yılı aşkın bir zamandır Kadıköy’ü bekler adeta o bina. Bu binalar, kentlerin hafızalarıdır ve kentleri değerli kılan da onlardır” mesajı veriyor. HAYDAR BABA TÜRBESİ’NDEN GAR LOKANTASI’NA… Atılgan’ın “Geçmişten Günümüze Haydarpaşa” adlı kitabında, Haydarpaşa ve çevresine ait önemli mekanların yanı sıra insan hikayeleri de bulunuyor. Yola Haydarpaşa’nın tarihini anlatarak çıkan yazar; ilk istasyon binasından kayık ve vapur iskelelerine, Haydar Baba Türbesi’nden Gar Lokantası’na kadar keyifli bir harita sunuyor. K-İletişim Yayınları tarafından yayımlanan kitap, 192 sayfadan oluşuyor. Kitap içeriğinde Haydarpaşa ile birlikte bölgeden eski ve yeni fotoğraflar da yer alıyor.",
  },
  {
    id: 7,
    author: "HAYDAR ERGÜLEN",
    name: "TRENLER KALKAR HAYDARPAŞA'DAN",
    src: "./img/book-img/Trenler_Kalkar_Haydarpasadan.jpg",
    desc: "Muavin olduk, otobüsü Cümleten İyi Yolculuklar diyerek uğurladık. Şimdi de Hareket Memuru olduk, gar müdürü, kondüktör, istasyon şefi olacak halimiz yok ya, baktık Trenler Kalkar Haydarpaşa'dan geliyor, hemen bir cem kurduk. Almanya'dan, İtalya'dan, Suriye'den, Hindistan'dan, Moğolistan'dan, Erzurum'dan, Ankara'dan, Eskişehir'den, Haydarpaşa'dan, en çok da rüyalardan, anılardan, aşklardan, yalnızlıklardan, ayrılıklardan, kavuşmalardan gelir de geçermiş tren. İçimizdeki gurbete gider orada beklermiş bizim gelmemizi. Biz de nedense oyalanırmışız, nasılsa tren Türkçenin en uzun kelimesi diye... Oysa tren birazdan Haydarpaşa'dan kalkacak, iskeleye bir vapur yanaşacakmış, kim bilir orada bizi hangi vazife bekliyormuş, miço olmak mı, çımacılık mı, Edip Bey'in 'mavi bir suyun düşünü uyutur' dediği bir tayfa olmak mı, yoksa 'deniz' olmak mı? Uzatmayalım, yol verelim tren kitabına, yolculuk başlasın 21 yazarın tren yazılarına ve düşlerimizde vardığımız her gar Haydarpaşa olsun diyelim bu sefer de, her seferde...",
  },
  {
    id: 8,
    author: "ZEKİ ARIKAN",
    name: "HAYDARPAŞA'DAN İZMİR'E TARİH SÖYLEŞİLERİ",
    src: "./img/book-img/haydarpasadan_Izmire.jpg",
    desc: "Prof. Dr. Zeki Arıkan “Tarih Söyleşileri” bağlamında üçüncüsü olan bu kitapta topladığı yazılarında hem güncel olaylara değiniyor, hem de 1940 ve sonrasında Türkiye’nin kültür hayatının temelini atan bazı aydınlarımızın çalışmalarını, hayatlarını, kişiliklerini renkli bir üslupla anlatıyor.Köy Enstitülerinin kurucusu Hasan Âli Yücel''in başlattığı çok yönlü aydınlanma hareketiyle 1940''lı yılların Türkiye’sinin nasıl Rönesans’ın eşiğine geldiğini, Arıkan’ın yazılarında değindiği Doğan Kuban, Orhan Burian, Vedat Günyol, Şerafettin Turan, Fuat Köprülü ve öğrencileri Mustafa Akdağ, Halil İnalcık gibi aydınlanmacılardan, Köy Enstitüsü çıkışlı yazar ve şairlerden (ör. Mehmet Başaran) kavrıyor ve mutluluk duyuyoruz. O dönemde aydınlarımız tarafından üretilen eserlerin; önemli dünya yapıtlarının Türkçeye hızla kazandırılmasının, yayımlanan dergilerin (Yücel, Ufuklar gibi) Türkiye’nin kültür hayatında nasıl büyük bir değişime yol açtığını mutlulukla izlerken, bu güzel çalışmaların daha sonra nasıl yok edildiğini, karalandığını görerek sarsılıyoruz...",
  },
  {
    id: 9,
    author: "ZEKİ ARIKAN",
    name: "Kurtuluş Yıllarında Haydarpaşa Sendikası",
    src: "./img/book-img/Kurtulus_Yillarinda_Haydarpasa_Sendikasi.jpg",
    desc: "Bu çalışmanın konusu spesifik olarak, Haydarpaşa’da 1950 yılından başlayarak ilk demiryolu sendikalarının çıkışı ve 1964 yılında ilk işkolu sözleşmesinin bağıtlanmasına kadar geçen 14 yıl içinde yaşanan sürecin bugüne akatarılabilmesidir. Genel olarak ise bu çalışma 1947-1963 dönemini kapsar. 1947’de ilk sendika yasasının yürürlüğe girmesiyle bütün işkollarında sendikaların kurulup yaygınlaştığı bir süreç başlamış, 1963’te ise 1961 Anayasası ile tanınan toplu pazarlık ve grev hakkının –olabildiğince kısıtlanarak da olsa- yasayla düzenlenmesi ve toplu pazarlık düzeninin başlamasıyla çalışma ilişkilerinde yeni bir döneme girilmiş; Haydarpaşa Sendikası Başkanının ifadesiyle, 'sendikalar rüştüne ermiştir.'",
  },
  {
    id: 10,
    author: "FUAT SEVİMAY",
    name: "Haydar Paşa’nın Evi",
    src: "./img/book-img/Haydar_Pasa’nin_Evi.webp",
    desc: "Annesiyle gezmeye çıkan çocuğun macerası İstanbul’un simgelerinden Haydarpaşa Garı’ndan başlar. Küçük çocuk buranın Haydar Paşa’nın evi olduğunu düşünür. Acaba bu kadar kocaman bir yerde yaşayan, bahçesinde trenleri olan Haydar Paşa nasıl biridir? Haydar Paşa’nın Evi 2012’de Ankara Mimarlar Odası “Kentimi Okuyorum Çocuk Kitapları Yarışması” Birincilik Ödülü’ne değer görülmüştü. Gözde Eyce’nin illüstrasyonlarını yaptığı kitap 7 yaş üstü çocuklara hitap ediyor.",
  },
];

const kitapPage = document.querySelector(".kitap-page-main-container");

window.addEventListener("DOMContentLoaded", function () {
  let displayKitapList = kitapList.map(function (item) {
    return `<div class="kitap-page-small-container">
              <img
                width="150"
                height="150"
                src=${item.src}
                alt=""
              />
              <div class= "kitap-page-small-container-text">  
              <h4>
              ${item.name}
              <hr>
              </h4>
              <h4>${item.author}</h4>
              <hr>
              <p >
              ${item.desc}
              
              </p>
              <p class = "kitap-page-small-container-devami">devamını oku...</p>
              </div>
            </div>`;
  });
  displayKitapList = displayKitapList.join("");
  kitapPage.innerHTML = displayKitapList;
});

/*-----------foto page carousel----------*/

let BigImgButtonLeft = document.getElementById("BigImgButtonLeft");
let BigImgButtonRight = document.getElementById("BigImgButtonRight");
let BigFoto = document.querySelector(".bigFoto");

let i = 0;
let time = 5000;
const imgList = [
  "hay_1.jpg",
  "hay_2.jpg",
  "hay_3.jpg",
  "hay_4.jpg",
  "hay_5.jpg",
  "hay_6.jpg",
  "hay_7.jpg",
  "hay_8.jpg",
  "hay_9.jpg",
  "hay_10.jpg",
  "hay_11.jpg",
  "hay_12.jpg",
  "hay_13.jpg",
  "hay_14.jpg",
  "hay_15.jpg",
  "hay_16.jpg",
  "hay_17.jpg",
  "hay_18.jpg",
  "hay_19.jpg",
  "hay_20.jpg",
  "hay_21.jpg",
  "hay_22.jpg",
  "hay_23.jpg",
  "hay_24.jpg",
  "hay_25.jpg",
  "hay_26.jpg",
  "hay_27.jpg",
];

BigImgButtonLeft.addEventListener("click", function () {
  carouselMinus();
});
BigImgButtonRight.addEventListener("click", function () {
  carouselPlus();
});
let currentItem;
function carouselPlus() {
  if (i < imgList.length - 1) {
    i++;
    currentItem = i;
    console.log(currentItem);
  } else {
    i = 0;
  }
  BigFoto.src = "./img/foto_high/" + imgList[i];
}
function carouselMinus() {
  if (i == currentItem) {
    i--;
    console.log(currentItem);
  } else {
    i = 0;
  }
  BigFoto.src = "./img/foto_high/" + imgList[i];
}
