var codes = [6036, 7845, 4335];

var kamal = ['Arey thuppas edhava', 'Hey bhai nuvvva', 'Manaki endhuku bhai ivvanni, gammuna game adukundham padha', 'Epudu pothunnav bhai USA ki', 'bhai bhai bhai bhai bhai bhai bhai bhai bhai', 'Bhai edhaina pani chusko bhai', 'Inkendhi bhai visheshalu','Keeema roti epudu tindham bhai', 'Pappu bhai', 'duke nakichey bhai gift ga', 'Bhai bussiness pedadham bhai','Bhai edhaina trip podham bhai', 'Bhai tirupathi podham bhai','Kamal Sagar Rathod',' one two three kamal bhai kantri', 'Dawat eepudu isthunnav aithey','Neeku e text vachidhi antey dawat iyyali bhai nuvvu','Night out chedham bhai', 'idhantha vadhu bhai medchal lo welding shop pedadham'];

var pavan = ['Arey thuppas edhava','Aaa borra taginchu first ivvanni tarvatha', 'Anna namasthey', 'Mansion House gold', 'Pavan anna Por Tozhil movie chudu crazy untadhi', 'Degree certifcate apply chedhama anna', 'Aniversary dawat epudu mari', 'Phone pakkana petti pani chusko anna', 'Inka car nadapava nerchukova epudu anna'];

var sumanth = ['Arey thuppas edhava','Hi chotu', 'Dawat epudu isthav chotu. Job dawat,Promtion dawat, birthday dawat.', 'Sumanth bodybuilder', 'Sawarama tintava sumanthu', 'Keema kichidi ki podham chotu', 'Emaindhira trip annav', 'Chotu srisailam podham chotu dam gates open ainaka bike ride', 'Easri pakka vastha taaza tiffins', 'poi pani chusko ra fulka'];



// console.log(true_false);

// const input1 = document.querySelector('#input');
const input1 = $('#input');
const code1 = document.querySelector('#code');
const btn = document.getElementById('btn');
const out1 = document.getElementById('text');



function fun1() {
    var name_code = Number(code1.value);
    console.log(name_code);
    var true_false = codes.includes(name_code);
    console.log(true_false);
    console.log(code1.value);
    if (true_false) {
        if (name_code === 6036) {


            var length = kamal.length;
            var random_num = Math.floor(Math.random() * length);
            // console.log(code[random_num]);
            // out1.innerHTML = code[random_num];
            // out1.innerHTML = input1.value;
            // console.log(typeof name_code);



            setTimeout(function () {
                out1.innerHTML = kamal[random_num];
            }, 300);
            $(".text-box").fadeOut();
            setTimeout(function () {
                $(".text-box").fadeIn();
            }, 200);


        }
        else if (name_code === 7845) {


            var length = pavan.length;
            var random_num = Math.floor(Math.random() * length);
            // console.log(code[random_num]);
            // out1.innerHTML = code[random_num];
            // out1.innerHTML = input1.value;
            // console.log(typeof name_code);

            console.log(code1.value);
            out1.innerHTML = pavan[random_num];
            $(".text-box").fadeOut();
            setTimeout(function () {
                $(".text-box").fadeIn();
            }, 200);


        }
        else if (name_code === 4335) {


            var length = sumanth.length;
            var random_num = Math.floor(Math.random() * length);
            // console.log(code[random_num]);
            // out1.innerHTML = code[random_num];
            // out1.innerHTML = input1.value;
            // console.log(typeof name_code);

            console.log(code1.value);
            out1.innerHTML = sumanth[random_num];
            $(".text-box").fadeOut();
            setTimeout(function () {
                $(".text-box").fadeIn();
            }, 200);


        }
    }
    else {
        out1.innerHTML = "Enter the code that is given to you, Thank you for visiting.";
        $(".text-box").fadeOut();
        setTimeout(function () {
            $(".text-box").fadeIn();
        }, 300);

    }
}

btn.addEventListener('click', fun1);


