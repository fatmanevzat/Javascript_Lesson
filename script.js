
document.write("<p>merhaba</p>")
alert("sayfada uyari");

//burası header için yazıldı
//console.log    ("Merhaba from");
//console.log("ggggg");

//alert("Sayfada uyarı mesajı")
//window.alert("Sayfada uyarı mesajı")

var firstNameMelek= "Melek";
let lastNameMelek= "Türk";
const age = 47;

// console.log("Melek 46 yaşında");
console.log(firstNameMelek , age , "yaşinda");


//Pascal Case
let FirstName = "ali";  // geçerli

//Camel Case
let firstName = "Mehmet";  //tavsiye
const lastName = "Türk";  //tavsiye
var ageMehmet = 56;

//Snake Case
let first_name = "Mehmet";  //geçerli

//Kebap Case
//let first-name = "Mehmet"  // CSS'de kullanıyoruz

console.log(FirstName, firstName ,first_name);

var ageMehmet = 47;  // yukarıda olmasına rağmen değiştirdi
 firstName = "Mustafa" // yukarıda let olduğu için tekrar atanabilir
//lastName = "Demir"  // yukarıda const olduğu için tekrar atanamaz
console.log(firstName, lastName, ageMehmet);


let team1="şahin", team2="doğan", team3="kartal", team4="atmaca"
console.log(team1 + team2 + team3, team4)
console.log("merha"   +   "ba");
console.log(age + 5);  // 52
console.log(age + "5");  // 475

// String 
let dataString1 = "Merhaba"
let dataString2 = 'Merhaba' + " " + age + " " + "yaşindaki" + " " + firstName;
let dataString3 = `Merhaba ${age} yaşindaki ${firstName}`
console.log(dataString2)
console.log(dataString3)

// Number
let numberValue1 = 5;
let numberValue2 = 5.5;
console.log(numberValue1+numberValue2 ) // 10.5
console.log(numberValue1,numberValue2 )  // 5 5.5

//Boolean
let isMarried = true;  // false;
let ageIsOver18 = false; 

//undefined
let telefon;
console.log(telefon)

//Null
let nullValue = "";
console.log(nullValue)

function nameFunc(params) {
    let test = "fonksiyon içi";
    console.log(test);
    console.log(firstName) // local scope , global scope'a erişebilir.
}
nameFunc()

//console.log(test); // test local scope olduğu için çalışmaz
