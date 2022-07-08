/**
 * Express.
 * 
 * 
 * JWT (JSON WEB TOKEN) : Object şifreleyip database'e göndermek için kullanılması şarttır.
 *                      güvenlik zaafiyeti açısından kesinlikle kullanılmalıdır.
 * 
 * 
 * JOI : Validation olarak kullanılır. Bu validasyonlar frontend'de ve mongodbde de kontrol edilebilir.
 *      flutter - nodejs - mongodb de aynı anda kontrol etmek çok daha sağlıklı olacaktır.
 *      Bu developera kalmış bir seçimdir.
 *      https://joi.dev/api/
 * 
 * 
 * Morgan : Gerekli post veya get requestleri attığımızda console'da güzel çıktılar vermemizi sağlar.
 *          https://www.geeksforgeeks.org/what-is-morgan-in-node-js/
 * 
 * Loadsh : Arrayler içerisinde bazı gerekli fonksiyonları kolaylıkla halledebilen bir modül. 
 *          https://zetcode.com/javascript/lodash/
 * 
 * 
 * Dotenv : Önemli sabitleri burada tutup kontrol ve yönetimi arttıran harika bir kütüphane
 * 
 * 
 * Helmet : Güvenlik için şart. Kullanımı basit ve anlaşılır. Kesinlikle kullanılmalıdır.
 *          https://helmetjs.github.io
 * 
 * HttpStatus : Http Status kodlarını temiz bir şekilde filtreleyen bir kütüphane.
 *              Kullanıldığında temiz iş yapan anlaşılırlığı arttıran bir nitelikte.
 *          https://www.npmjs.com/package/http-status
 * 
 * 
 * Winston : Log işlemleri için kesin gerekli olan bir kütüphane. 
 *          https://github.com/winstonjs/winston/tree/2.x
 * 
 * 
 * Crypto-js : Şifrelemeye yarar. 
 *  Bir SECRET_KEY oluştur ve crypto'la.
 *  Çıkan bu crypto'yu SECRET_KEY yap.
 *  Bu işlemi istediğin kadar tekrarla.
 *  (SECURITY IS EVERYTHING)
 * 
 *  Kullanıcı şifresini crypto'la ve dbye öyle kaydet.
 *  Kullanıcı tekrar giriş yaptığında girdiği şifreyi tekrar crypto'la ve db'deki 
 *    crypto'lu şifreyle karşılaştır.
 * 
 * 
 * 
 * 
 * 
 * 
 */