# Cihaz ayarlama için form 

Kodlar `src\pages\index.astro` içinde 82. satırdan itibaren `<script>` bölümünde.

Sonuç gönderilen GET isteği:

https://api.thingspeak.com/update?api_key=IQ24IXZ3A2ZXE04I&field8=QWQWQ

✅ Burada API KEY'i formda kullanıcının girdiği kutudan alacak. 

✅ ApiKey'leri thingspeak belirliyor ve 16 karakter. Veri düzeltme olarak 16 karakter esas alınabilir. 

✅ Alan araları W ile temsil olunuyor. Q alanın boş olduğunu gösteriyor. 

✅  Uyku zamanı dropdown menü . 15 - 30 - 45 ve 60 şeklinde. 

✅  DARA tuşu Radio button şeklinde olabilir. Basıldığında 1 basılmadığında 0 olur. 

✅ OFFSET değeri de 0 ile 150 arasında bir değer kabul eden bir kutu .

GÖNDER tuşuna basıldığında thingspeak sitesine şu mesaj gidecek. 

https://api.thingspeak.com/update?api_key=IQ24IXZ3A2ZXE04I&field8=15W1W20 

Açılımı şu: Uyku süresi 15 dakika , DARA ALINACAK (1) , OFFSET değeri de 20 

Bunu offline bir web sayfası olarak kaydediliyor.

Kullanıcı değerleri girip GÖNDER tuşuna basınca cihazla iyetişime geçecek. 