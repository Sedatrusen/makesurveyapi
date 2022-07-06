# MakeSurvey

1. # **WEB API YAPIM AŞAMALARI**

1. ## **Proje oluşturulması**
`     `Sistemimizin çalışma prensibi yazılan adrese göre sistemimizde bulunan anketi yazdırıp cevap isteniyor. Adres şablonu /surveys/kullanıcıid/anketismi. Gelen kullanıcı id ve anket ismi ile anketi belirleyip yazdırıyoruz. Alınan cevabı kullanıcı idsine göre kaydediyoruz.

Öncelikle Node.js platformu üzerinde nuxt.js projesi oluşturuyoruz. 

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.060.png)

*Şekil 54 Nuxt.js projesi oluşturma*

Şekildeki kodu konsola yazdığımızda birkaç soru soruyor. Soruları cevapladıktan sonra boş bir proje oluşturulmuş oluyor.  
1. ## **Firebase eklenmesi**
Bu boş proje içerinde ilk önce firebase sistemimizi tanıtıyoruz.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.061.png)

*Şekil 55 Firebase ekleme*

Şekildeki kod bloğu sayesinde firebase sistemini web apimıza ekliyoruz.

1. ## **Adres Yolunun Belirlenmesi**
Nuxt.js sayesinde adres şablonunu belirlemek çok kolaylaşıyor. Klasör sistemiyle otomatik adres belirleniyor.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.062.png)

*Şekil 56 Adres yolunun belirlenmesinin klasör sistemi*

` `Şekildeki gibi bir klasör sistemi yapıyoruz. Böylece nuxt nasıl bir adres şablonumuz olduğunu anlayıp otomatik ayarlıyor. Burada dinamik bir adres oluşturuyoruz. Kullanıcı id ve anket ismine göre adresler belirleniyor.
1. ## **Store oluşturulması**
` `Vuex sayesinde store oluşturuyoruz. Store içerisinde 3 adet state belirliyoruz. Bunlar sorular, cevaplar ve detaylar.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.063.png)

*Şekil 57 State’ler*

Gelen adrese göre çalışacak actionları yazıyoruz. Bunlar soru ekleme ve cevap kaydetme.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.064.png)

*Şekil 58 Soru ekleme actionu*

Soru ekleme actionunda gelen adresten alınan kullanıcı idsi ve anket ismi ile firebase sistemimizden anket sorularını ve detaylarını alıyor.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.065.png)

*Şekil 59 Kaydet actionu*

Şekildeki kaydet actionu ise kullanıcıdan aldığı cevapları sisteme yüklememizi sağlıyor.
1. ## **Sayfa oluşturulması** 
Vue’nin bir özelliği olan v-for döngüsü sayesinde dinamik bir sayfa oluşturduk. Kullanıcının kaç sorusu olursa olsun sayfaya yazmamızı sağlar. Vue’nin bir mekaniği olan v-model sayesinde hangi soruya cevap verildiğini dinamik olarak öğreniyoruz.

![](Aspose.Words.fea9e3b5-880d-441c-b546-da54c98eab66.066.png)

*Şekil 60 V-for döngüsü*

Şekilde görünen kod bloğu v-for döngünün yazılış şeklini gösteriyor. Buradaki item vuex sayesinde firebase sistemimizden çekiliyor ve sayfamıza ulaştırılıyor. 
