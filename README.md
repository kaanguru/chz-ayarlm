https://daisyui.com/components/

İstediğim sonuç şu: 

https://api.thingspeak.com/update?api_key=IQ24IXZ3A2ZXE04I&field8=QWQWQ

Burada API KEY'i formda kullanıcının girdiği kutudan alacak. 

ApiKey'leri thingspeak belirliyor ve 16 karakter. Veri düzeltme olarak 16 karakter esas alınabilir. 

Burada Q ve W olması beni etkilemiyor çünki ben kanal 8'e yazdırılan veriyi ele alıyorum. 

Alan araları W ile temsil olunuyor. Q alanın boş olduğunu gösteriyor. 

Uyku zamanı dropdown menü olabilir. 15 - 30 - 45 ve 60 şeklinde. Böylece error check gerekmez. 
Zor oluyorsa elle de girilebilir. 15 ile 60 arası değer olmak  zorunda. 

DARA tuşu Radio button şeklinde olabilir. Basıldığında 1 basılmadığında 0 olur. 
Kanal mesajına 1 veya 0 olarak yazar. 

OFFSET değeri de 0 ile 150 arasında bir değer kabul eden bir kutu olacak.
Mesaja o girilen değer girecek. 

GÖNDER tuşuna basıldığında thingspeak sitesine şu mesaj gidecek. 

https://api.thingspeak.com/update?api_key=IQ24IXZ3A2ZXE04I&field8=15W1W20 

Açılımı şu: Uyku süresi 15 dakika , DARA ALINACAK (1) , OFFSET değeri de 20 

Bunu offline bir web sayfası olarak kaydedeceğim. 

Kullanıcı değerleri girip GÖNDER tuşuna basınca cihazla iyetişime geçecek. 