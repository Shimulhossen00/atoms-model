
    
var fun = setInterval(() => {
    var disheight = document.querySelector(".mainbox");
    var height = disheight.style.top = innerHeight /  2  + -300 /2 + "px";



    var diswidth = document.querySelector(".mainbox");
    var width =  innerWidth / 2 ;
    var x = width - 150;
    diswidth.style.left = x + "px";



    var disheight = document.querySelector(".text");
    var height = disheight.style.top = innerHeight /  2  + -100 /2 + "px";
    var diswidth = document.querySelector(".text");
    var width =  innerWidth / 2 ;
    var x = width - 14;
    diswidth.style.left = x + "px";


    //ring1 height and width

    var disheight = document.querySelector(".ring1");
    var height = disheight.style.top = innerHeight /  2  + -450 /2 + "px";
    var diswidth = document.querySelector(".ring1");
    var width =  innerWidth / 2 ;
    var x = width - 225;
    diswidth.style.left = x + "px";

    var disheight = document.querySelector(".ring2");
    var height = disheight.style.top = innerHeight /  2  + -450 /2 + "px";
    var diswidth = document.querySelector(".ring2");
    var width =  innerWidth / 2 ;
    var x = width - 225;
    diswidth.style.left = x + "px";


    var disheight = document.querySelector(".ring3");
    var height = disheight.style.top = innerHeight /  2  + -450 /2 + "px";
    var diswidth = document.querySelector(".ring3");
    var width =  innerWidth / 2 ;
    var x = width - 225;
    diswidth.style.left = x + "px";


    var disheight = document.querySelector(".ring4");
    var height = disheight.style.top = innerHeight /  2  + -450 /2 + "px";
    var diswidth = document.querySelector(".ring4");
    var width =  innerWidth / 2 ;
    var x = width - 225;
    diswidth.style.left = x + "px";


    

    


}, 100);

//.fringmolname, .fringname, .fringelectron h1middlename
// obj array
const obj = [".obj1",".obj2",".obj3",".obj4",".obj5",".obj6",".obj7",".obj8",".obj9",
    ".obj10",".obj11",".obj12",".obj13",".obj14",".obj15",".obj16",".obj17",".obj18",
    ".obj19",".obj20",".obj21",".obj22",".obj23",".obj24",".obj25",".obj26",".obj27",
    ".obj28",".obj29",".obj30",".obj31",".obj32",".obj33",".obj34",".obj35",".obj36",
    ".obj37",".obj38",".obj39",".obj40",".obj41",".obj42",".obj43",".obj44",".obj45",
    ".obj46",".obj47",".obj48",".obj49",".obj50",".obj51",".obj52",".obj53",".obj54",
    ".obj55",".obj56",".obj57",".obj58",".obj59",".obj60",".obj61",".obj62",".obj63",
    ".obj64",".obj65",".obj66",".obj67",".obj68",".obj69",".obj70",".obj71",".obj72",
    ".obj73",".obj74",".obj75",".obj76",".obj77",".obj78",".obj79",".obj80",".obj81",
    ".obj82",".obj83",".obj84",".obj85",".obj86",".obj87",".obj88",".obj89",".obj90",
    ".obj91",".obj92",".obj93",".obj94",".obj95",".obj96",".obj97",".obj98",".obj99",
    ".obj100",".obj101",".obj102",".obj103",".obj104",".obj105",".obj106",".obj107",".obj108",
    ".obj109",".obj110",".obj111",".obj112",".obj113",".obj114",".obj115",".obj116",".obj117",".obj118"

];

for(let i = 0;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}


// close section
function boxclose(){

document.querySelector(".table").style.display = "block";

document.querySelector(".hy").style.display = "none";
}


function h(){
    document.querySelector(".fringelectron").innerHTML = "1";
    document.querySelector(".fringmolname").innerHTML = "H";
    document.querySelector(".fringname").innerHTML = "Hydrogen";
    document.querySelector(".fringmass").innerHTML = "1.008";
    document.querySelector(".h1middlename").innerHTML = "H";
    for(let i = 0;i < 1;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 1;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
    document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}
function he(){
    document.querySelector(".fringelectron").innerHTML = "2";
    document.querySelector(".fringmolname").innerHTML = "He";
    document.querySelector(".fringname").innerHTML = "Helium";
    document.querySelector(".fringmass").innerHTML = "4.0023";
    document.querySelector(".h1middlename").innerHTML = "He";
    for(let i = 0;i < 2;i++){
    document.querySelector(obj[i]).style.display = "block";
}
for(let i = 2;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
    document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}

function Li(){
    document.querySelector(".fringelectron").innerHTML = "3";
    document.querySelector(".fringmolname").innerHTML = "Li";
    document.querySelector(".fringname").innerHTML = "Lithium";
    document.querySelector(".fringmass").innerHTML = "6.94";
    document.querySelector(".h1middlename").innerHTML = "Li";
    for(let i = 0;i < 3;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 3;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Be4(){
    document.querySelector(".fringelectron").innerHTML = "4";
    document.querySelector(".fringmolname").innerHTML = "Be";
    document.querySelector(".fringname").innerHTML = "Berillium";
    document.querySelector(".fringmass").innerHTML = "9.0122";
    document.querySelector(".h1middlename").innerHTML = "Be";
     for(let i = 0;i < 4;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 4;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function B5(){
    document.querySelector(".fringelectron").innerHTML = "5";
    document.querySelector(".fringmolname").innerHTML = "B";
    document.querySelector(".fringname").innerHTML = "Boron";
    document.querySelector(".fringmass").innerHTML = "10.81";
    document.querySelector(".h1middlename").innerHTML = "B";
     for(let i = 0;i < 5;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 5;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function C6(){
    document.querySelector(".fringelectron").innerHTML = "6";
    document.querySelector(".fringmolname").innerHTML = "C";
    document.querySelector(".fringname").innerHTML = "Carbon";
    document.querySelector(".fringmass").innerHTML = "12.011";
    document.querySelector(".h1middlename").innerHTML = "C";
     for(let i = 0;i < 6;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 6;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function N7(){
    document.querySelector(".fringelectron").innerHTML = "7";
    document.querySelector(".fringmolname").innerHTML = "N";
    document.querySelector(".fringname").innerHTML = "Nitrogen";
    document.querySelector(".fringmass").innerHTML = "14.007";
    document.querySelector(".h1middlename").innerHTML = "N";
     for(let i = 0;i < 7;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 7;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function O8(){
    document.querySelector(".fringelectron").innerHTML = "8";
    document.querySelector(".fringmolname").innerHTML = "O";
    document.querySelector(".fringname").innerHTML = "Oxygen";
    document.querySelector(".fringmass").innerHTML = "15.999";
    document.querySelector(".h1middlename").innerHTML = "O";
     for(let i = 0;i < 8;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 8;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function F9(){
    document.querySelector(".fringelectron").innerHTML = "9";
    document.querySelector(".fringmolname").innerHTML = "F";
    document.querySelector(".fringname").innerHTML = "Fluorin";
    document.querySelector(".fringmass").innerHTML = "18.998";
    document.querySelector(".h1middlename").innerHTML = "F";
     for(let i = 0;i < 9;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 9;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ne10(){
    document.querySelector(".fringelectron").innerHTML = "10";
    document.querySelector(".fringmolname").innerHTML = "Ne";
    document.querySelector(".fringname").innerHTML = "Neon";
    document.querySelector(".fringmass").innerHTML = "20.180";
    document.querySelector(".h1middlename").innerHTML = "Ne";
     for(let i = 0;i < 10;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 10;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Na11(){
    document.querySelector(".fringelectron").innerHTML = "11";
    document.querySelector(".fringmolname").innerHTML = "Na";
    document.querySelector(".fringname").innerHTML = "sodium";
    document.querySelector(".fringmass").innerHTML = "22.990";
    document.querySelector(".h1middlename").innerHTML = "Na";
     for(let i = 0;i < 11;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 11;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Mg12(){
    document.querySelector(".fringelectron").innerHTML = "12";
    document.querySelector(".fringmolname").innerHTML = "Mg";
    document.querySelector(".fringname").innerHTML = "Magnesium";
    document.querySelector(".fringmass").innerHTML = "24.305";
    document.querySelector(".h1middlename").innerHTML = "Mg";
     for(let i = 0;i < 12;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 12;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Al13(){
    document.querySelector(".fringelectron").innerHTML = "13";
    document.querySelector(".fringmolname").innerHTML = "Al";
    document.querySelector(".fringname").innerHTML = "Aluminium";
    document.querySelector(".fringmass").innerHTML = "26.982";
    document.querySelector(".h1middlename").innerHTML = "Al";
     for(let i = 0;i < 13;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 13;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Si14(){
    document.querySelector(".fringelectron").innerHTML = "14";
    document.querySelector(".fringmolname").innerHTML = "Si";
    document.querySelector(".fringname").innerHTML = "Silicon";
    document.querySelector(".fringmass").innerHTML = "28.085";
    document.querySelector(".h1middlename").innerHTML = "Si";
     for(let i = 0;i < 14;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 14;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function P15(){
    document.querySelector(".fringelectron").innerHTML = "15";
    document.querySelector(".fringmolname").innerHTML = "P";
    document.querySelector(".fringname").innerHTML = "Phosphorus";
    document.querySelector(".fringmass").innerHTML = "30.974";
    document.querySelector(".h1middlename").innerHTML = "P";
     for(let i = 0;i < 15;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 15;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function S16(){
    document.querySelector(".fringelectron").innerHTML = "16";
    document.querySelector(".fringmolname").innerHTML = "S";
    document.querySelector(".fringname").innerHTML = "sulfer";
    document.querySelector(".fringmass").innerHTML = "32.06";
    document.querySelector(".h1middlename").innerHTML = "S";
     for(let i = 0;i < 16;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 16;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Cl17(){
    document.querySelector(".fringelectron").innerHTML = "17";
    document.querySelector(".fringmolname").innerHTML = "Cl";
    document.querySelector(".fringname").innerHTML = "sulfer";
    document.querySelector(".fringmass").innerHTML = "35.45";
    document.querySelector(".h1middlename").innerHTML = "Cl";
     for(let i = 0;i < 17;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 17;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ar18(){
    document.querySelector(".fringelectron").innerHTML = "18";
    document.querySelector(".fringmolname").innerHTML = "Ar";
    document.querySelector(".fringname").innerHTML = "Argon";
    document.querySelector(".fringmass").innerHTML = "39.948";
    document.querySelector(".h1middlename").innerHTML = "Ar";
     for(let i = 0;i < 18;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 18;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ka19(){
    document.querySelector(".fringelectron").innerHTML = "19";
    document.querySelector(".fringmolname").innerHTML = "Ka";
    document.querySelector(".fringname").innerHTML = "potassium";
    document.querySelector(".fringmass").innerHTML = "39.948";
    document.querySelector(".h1middlename").innerHTML = "Ka";
     for(let i = 0;i < 19;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 19;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ca20(){
    document.querySelector(".fringelectron").innerHTML = "20";
    document.querySelector(".fringmolname").innerHTML = "Ca";
    document.querySelector(".fringname").innerHTML = "Calcium";
    document.querySelector(".fringmass").innerHTML = "40.078";
    document.querySelector(".h1middlename").innerHTML = "Ca";
     for(let i = 0;i < 20;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 20;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Sc21(){
    document.querySelector(".fringelectron").innerHTML = "21";
    document.querySelector(".fringmolname").innerHTML = "Sc";
    document.querySelector(".fringname").innerHTML = "Scandium";
    document.querySelector(".fringmass").innerHTML = "44.956";
    document.querySelector(".h1middlename").innerHTML = "Sc";
     for(let i = 0;i < 21;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 21;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ti22(){
    document.querySelector(".fringelectron").innerHTML = "22";
    document.querySelector(".fringmolname").innerHTML = "Ti";
    document.querySelector(".fringname").innerHTML = "Titanium";
    document.querySelector(".fringmass").innerHTML = "47.867";
    document.querySelector(".h1middlename").innerHTML = "Ti";
     for(let i = 0;i < 22;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 22;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function V23(){
    document.querySelector(".fringelectron").innerHTML = "23";
    document.querySelector(".fringmolname").innerHTML = "V";
    document.querySelector(".fringname").innerHTML = "Vanadium";
    document.querySelector(".fringmass").innerHTML = "50.942";
    document.querySelector(".h1middlename").innerHTML = "V";
     for(let i = 0;i < 23;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 23;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Cr24(){
    document.querySelector(".fringelectron").innerHTML = "24";
    document.querySelector(".fringmolname").innerHTML = "Cr";
    document.querySelector(".fringname").innerHTML = "Chromium";
    document.querySelector(".fringmass").innerHTML = "51.996";
    document.querySelector(".h1middlename").innerHTML = "Cr";
     for(let i = 0;i < 24;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 24;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Mn25(){
    document.querySelector(".fringelectron").innerHTML = "25";
    document.querySelector(".fringmolname").innerHTML = "Mn";
    document.querySelector(".fringname").innerHTML = "Manganese";
    document.querySelector(".fringmass").innerHTML = "54.983";
    document.querySelector(".h1middlename").innerHTML = "Mn";
     for(let i = 0;i < 25;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 25;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Fe26(){
    document.querySelector(".fringelectron").innerHTML = "26";
    document.querySelector(".fringmolname").innerHTML = "Fe";
    document.querySelector(".fringname").innerHTML = "Iron";
    document.querySelector(".fringmass").innerHTML = "55.933";
    document.querySelector(".h1middlename").innerHTML = "Fe";
     for(let i = 0;i < 26;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 26;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Co27(){
    document.querySelector(".fringelectron").innerHTML = "27";
    document.querySelector(".fringmolname").innerHTML = "Co";
    document.querySelector(".fringname").innerHTML = "Cobalt";
    document.querySelector(".fringmass").innerHTML = "58.933";
    document.querySelector(".h1middlename").innerHTML = "Co";
     for(let i = 0;i < 27;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 27;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ni28(){
    document.querySelector(".fringelectron").innerHTML = "28";
    document.querySelector(".fringmolname").innerHTML = "Ni";
    document.querySelector(".fringname").innerHTML = "Nickle";
    document.querySelector(".fringmass").innerHTML = "58.693";
    document.querySelector(".h1middlename").innerHTML = "Ni";
     for(let i = 0;i < 28;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 28;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Cu29(){
    document.querySelector(".fringelectron").innerHTML = "29";
    document.querySelector(".fringmolname").innerHTML = "Cu";
    document.querySelector(".fringname").innerHTML = "Cupper";
    document.querySelector(".fringmass").innerHTML = "63.546";
    document.querySelector(".h1middlename").innerHTML = "Cu";
     for(let i = 0;i < 29;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 29;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Zn30(){
    document.querySelector(".fringelectron").innerHTML = "30";
    document.querySelector(".fringmolname").innerHTML = "Zn";
    document.querySelector(".fringname").innerHTML = "Zinc";
    document.querySelector(".fringmass").innerHTML = "65.38";
    document.querySelector(".h1middlename").innerHTML = "Zn";
     for(let i = 0;i < 30;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 30;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ga31(){
    document.querySelector(".fringelectron").innerHTML = "31";
    document.querySelector(".fringmolname").innerHTML = "Ga";
    document.querySelector(".fringname").innerHTML = "Gallium";
    document.querySelector(".fringmass").innerHTML = "69.723";
    document.querySelector(".h1middlename").innerHTML = "Ga";
     for(let i = 0;i < 31;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 31;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ge32(){
    document.querySelector(".fringelectron").innerHTML = "32";
    document.querySelector(".fringmolname").innerHTML = "Ge";
    document.querySelector(".fringname").innerHTML = "Germanium";
    document.querySelector(".fringmass").innerHTML = "72.630";
    document.querySelector(".h1middlename").innerHTML = "Ge";
     for(let i = 0;i < 32;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 32;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function As33(){
    document.querySelector(".fringelectron").innerHTML = "33";
    document.querySelector(".fringmolname").innerHTML = "As";
    document.querySelector(".fringname").innerHTML = "Arsenic";
    document.querySelector(".fringmass").innerHTML = "74.922";
    document.querySelector(".h1middlename").innerHTML = "As";
     for(let i = 0;i < 33;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 33;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Se34(){
    document.querySelector(".fringelectron").innerHTML = "34";
    document.querySelector(".fringmolname").innerHTML = "Se";
    document.querySelector(".fringname").innerHTML = "Selinium";
    document.querySelector(".fringmass").innerHTML = "78.971";
    document.querySelector(".h1middlename").innerHTML = "Se";
     for(let i = 0;i < 34;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 34;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Br35(){
    document.querySelector(".fringelectron").innerHTML = "35";
    document.querySelector(".fringmolname").innerHTML = "Br";
    document.querySelector(".fringname").innerHTML = "Bromium";
    document.querySelector(".fringmass").innerHTML = "79.904";
    document.querySelector(".h1middlename").innerHTML = "Br";
     for(let i = 0;i < 35;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 35;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Kr36(){
    document.querySelector(".fringelectron").innerHTML = "36";
    document.querySelector(".fringmolname").innerHTML = "Kr";
    document.querySelector(".fringname").innerHTML = "Krypton";
    document.querySelector(".fringmass").innerHTML = "83.798";
    document.querySelector(".h1middlename").innerHTML = "Kr";
     for(let i = 0;i < 36;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 36;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Rb37(){
    document.querySelector(".fringelectron").innerHTML = "37";
    document.querySelector(".fringmolname").innerHTML = "Rb";
    document.querySelector(".fringname").innerHTML = "Rubidium";
    document.querySelector(".fringmass").innerHTML = "85.68";
    document.querySelector(".h1middlename").innerHTML = "Rb";
     for(let i = 0;i < 37;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 37;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Sr38(){
    document.querySelector(".fringelectron").innerHTML = "38";
    document.querySelector(".fringmolname").innerHTML = "Sr";
    document.querySelector(".fringname").innerHTML = "Strontium";
    document.querySelector(".fringmass").innerHTML = "87.62";
    document.querySelector(".h1middlename").innerHTML = "Sr";
     for(let i = 0;i < 38;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 38;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Y39(){
    document.querySelector(".fringelectron").innerHTML = "39";
    document.querySelector(".fringmolname").innerHTML = "Y";
    document.querySelector(".fringname").innerHTML = "Yttrium";
    document.querySelector(".fringmass").innerHTML = "88.906";
    document.querySelector(".h1middlename").innerHTML = "Y";
     for(let i = 0;i < 39;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 39;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Zr40(){
    document.querySelector(".fringelectron").innerHTML = "40";
    document.querySelector(".fringmolname").innerHTML = "Zr";
    document.querySelector(".fringname").innerHTML = "Zirconium";
    document.querySelector(".fringmass").innerHTML = "91.224";
    document.querySelector(".h1middlename").innerHTML = "Zr";
     for(let i = 0;i < 40;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 40;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Nb41(){
    document.querySelector(".fringelectron").innerHTML = "41";
    document.querySelector(".fringmolname").innerHTML = "Nb";
    document.querySelector(".fringname").innerHTML = "Niobium";
    document.querySelector(".fringmass").innerHTML = "92.906";
    document.querySelector(".h1middlename").innerHTML = "Nb";
     for(let i = 0;i < 41;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 41;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Mo42(){
    document.querySelector(".fringelectron").innerHTML = "42";
    document.querySelector(".fringmolname").innerHTML = "Mo";
    document.querySelector(".fringname").innerHTML = "Molybdenum";
    document.querySelector(".fringmass").innerHTML = "95.95";
    document.querySelector(".h1middlename").innerHTML = "Mo";
     for(let i = 0;i < 42;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 42;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Tc43(){
    document.querySelector(".fringelectron").innerHTML = "43";
    document.querySelector(".fringmolname").innerHTML = "Tc";
    document.querySelector(".fringname").innerHTML = "Technetium";
    document.querySelector(".fringmass").innerHTML = "98";
    document.querySelector(".h1middlename").innerHTML = "Tc";
     for(let i = 0;i < 43;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 43;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ru44(){
    document.querySelector(".fringelectron").innerHTML = "44";
    document.querySelector(".fringmolname").innerHTML = "Ru";
    document.querySelector(".fringname").innerHTML = "Runthenium";
    document.querySelector(".fringmass").innerHTML = "101.01";
    document.querySelector(".h1middlename").innerHTML = "Ru";
     for(let i = 0;i < 44;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 44;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Rh45(){
    document.querySelector(".fringelectron").innerHTML = "45";
    document.querySelector(".fringmolname").innerHTML = "Rh";
    document.querySelector(".fringname").innerHTML = "Rhodium";
    document.querySelector(".fringmass").innerHTML = "102.91";
    document.querySelector(".h1middlename").innerHTML = "Rh";
     for(let i = 0;i < 45;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 45;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Pd46(){
    document.querySelector(".fringelectron").innerHTML = "46";
    document.querySelector(".fringmolname").innerHTML = "Pd";
    document.querySelector(".fringname").innerHTML = "Palladium";
    document.querySelector(".fringmass").innerHTML = "106.42";
    document.querySelector(".h1middlename").innerHTML = "Pd";
     for(let i = 0;i < 46;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 46;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ag47(){
    document.querySelector(".fringelectron").innerHTML = "47";
    document.querySelector(".fringmolname").innerHTML = "Ag";
    document.querySelector(".fringname").innerHTML = "Silver";
    document.querySelector(".fringmass").innerHTML = "107.87";
    document.querySelector(".h1middlename").innerHTML = "Ag";
     for(let i = 0;i < 47;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 47;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Cd48(){
    document.querySelector(".fringelectron").innerHTML = "48";
    document.querySelector(".fringmolname").innerHTML = "Cd";
    document.querySelector(".fringname").innerHTML = "Cadmium";
    document.querySelector(".fringmass").innerHTML = "112.41";
    document.querySelector(".h1middlename").innerHTML = "Cd";
     for(let i = 0;i < 48;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 48;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function In49(){
    document.querySelector(".fringelectron").innerHTML = "49";
    document.querySelector(".fringmolname").innerHTML = "Cd";
    document.querySelector(".fringname").innerHTML = "Indium";
    document.querySelector(".fringmass").innerHTML = "114.82";
    document.querySelector(".h1middlename").innerHTML = "Cd";
     for(let i = 0;i < 49;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 49;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Sn50(){
    document.querySelector(".fringelectron").innerHTML = "50";
    document.querySelector(".fringmolname").innerHTML = "Sn";
    document.querySelector(".fringname").innerHTML = "Tin";
    document.querySelector(".fringmass").innerHTML = "118.71";
    document.querySelector(".h1middlename").innerHTML = "Sn";
     for(let i = 0;i < 50;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 50;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Sb51(){
    document.querySelector(".fringelectron").innerHTML = "51";
    document.querySelector(".fringmolname").innerHTML = "Sb";
    document.querySelector(".fringname").innerHTML = "Antimony";
    document.querySelector(".fringmass").innerHTML = "121.76";
    document.querySelector(".h1middlename").innerHTML = "Sb";
     for(let i = 0;i < 51;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 51;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Te52(){
    document.querySelector(".fringelectron").innerHTML = "52";
    document.querySelector(".fringmolname").innerHTML = "Te";
    document.querySelector(".fringname").innerHTML = "Tellurium";
    document.querySelector(".fringmass").innerHTML = "127.60";
    document.querySelector(".h1middlename").innerHTML = "Te";
     for(let i = 0;i < 52;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 52;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function I53(){
    document.querySelector(".fringelectron").innerHTML = "53";
    document.querySelector(".fringmolname").innerHTML = "I";
    document.querySelector(".fringname").innerHTML = "Iodin";
    document.querySelector(".fringmass").innerHTML = "126.90";
    document.querySelector(".h1middlename").innerHTML = "I";
    for(let i = 0;i < 53;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 53;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Xe54(){
    document.querySelector(".fringelectron").innerHTML = "54";
    document.querySelector(".fringmolname").innerHTML = "Xe";
    document.querySelector(".fringname").innerHTML = "Xenon";
    document.querySelector(".fringmass").innerHTML = "131.29";
    document.querySelector(".h1middlename").innerHTML = "Xe";
    for(let i = 0;i < 54;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 54;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Cs55(){
    document.querySelector(".fringelectron").innerHTML = "55";
    document.querySelector(".fringmolname").innerHTML = "Cs";
    document.querySelector(".fringname").innerHTML = "Caesium";
    document.querySelector(".fringmass").innerHTML = "132.91";
    document.querySelector(".h1middlename").innerHTML = "Cs";
    for(let i = 0;i < 55;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 55;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ba56(){
    document.querySelector(".fringelectron").innerHTML = "56";
    document.querySelector(".fringmolname").innerHTML = "Ba";
    document.querySelector(".fringname").innerHTML = "Barium";
    document.querySelector(".fringmass").innerHTML = "132.91";
    document.querySelector(".h1middlename").innerHTML = "Ba";
    for(let i = 0;i < 56;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 56;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Hf72(){
    document.querySelector(".fringelectron").innerHTML = "72";
    document.querySelector(".fringmolname").innerHTML = "Hf";
    document.querySelector(".fringname").innerHTML = "Hafnium";
    document.querySelector(".fringmass").innerHTML = "178.49";
    document.querySelector(".h1middlename").innerHTML = "Hf";
    for(let i = 0;i < 57;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 57;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ta73(){
    document.querySelector(".fringelectron").innerHTML = "73";
    document.querySelector(".fringmolname").innerHTML = "Ta";
    document.querySelector(".fringname").innerHTML = "Tantalum";
    document.querySelector(".fringmass").innerHTML = "180.95";
    document.querySelector(".h1middlename").innerHTML = "Ta";
    for(let i = 0;i < 73;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 73;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function W74(){
    document.querySelector(".fringelectron").innerHTML = "74";
    document.querySelector(".fringmolname").innerHTML = "W";
    document.querySelector(".fringname").innerHTML = "Tungesten";
    document.querySelector(".fringmass").innerHTML = "18.95";
    document.querySelector(".h1middlename").innerHTML = "W";
    for(let i = 0;i < 74;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 74;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Re75(){
    document.querySelector(".fringelectron").innerHTML = "75";
    document.querySelector(".fringmolname").innerHTML = "Re";
    document.querySelector(".fringname").innerHTML = "Rhenium";
    document.querySelector(".fringmass").innerHTML = "186.21";
    document.querySelector(".h1middlename").innerHTML = "Re";
    for(let i = 0;i < 75;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 75;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Os76(){
    document.querySelector(".fringelectron").innerHTML = "76";
    document.querySelector(".fringmolname").innerHTML = "Os";
    document.querySelector(".fringname").innerHTML = "Osmium";
    document.querySelector(".fringmass").innerHTML = "190.23";
    document.querySelector(".h1middlename").innerHTML = "Os";
    for(let i = 0;i < 76;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 76;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ir77(){
    document.querySelector(".fringelectron").innerHTML = "77";
    document.querySelector(".fringmolname").innerHTML = "Ir";
    document.querySelector(".fringname").innerHTML = "Iridium";
    document.querySelector(".fringmass").innerHTML = "192.22";
    document.querySelector(".h1middlename").innerHTML = "Ir";
    for(let i = 0;i < 77;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 77;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Pt78(){
    document.querySelector(".fringelectron").innerHTML = "78";
    document.querySelector(".fringmolname").innerHTML = "Pt";
    document.querySelector(".fringname").innerHTML = "Platinum";
    document.querySelector(".fringmass").innerHTML = "195.08";
    document.querySelector(".h1middlename").innerHTML = "Pt";
    for(let i = 0;i < 78;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 78;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Au79(){
    document.querySelector(".fringelectron").innerHTML = "79";
    document.querySelector(".fringmolname").innerHTML = "Au";
    document.querySelector(".fringname").innerHTML = "Gold";
    document.querySelector(".fringmass").innerHTML = "196.97";
    document.querySelector(".h1middlename").innerHTML = "Au";
    for(let i = 0;i < 79;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 79;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Hg80(){
    document.querySelector(".fringelectron").innerHTML = "80";
    document.querySelector(".fringmolname").innerHTML = "Hg";
    document.querySelector(".fringname").innerHTML = "Mercury";
    document.querySelector(".fringmass").innerHTML = "200.59";
    document.querySelector(".h1middlename").innerHTML = "Hg";
    for(let i = 0;i < 80;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 80;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ti81(){
    document.querySelector(".fringelectron").innerHTML = "81";
    document.querySelector(".fringmolname").innerHTML = "Ti";
    document.querySelector(".fringname").innerHTML = "Thallium";
    document.querySelector(".fringmass").innerHTML = "204.38";
    document.querySelector(".h1middlename").innerHTML = "Ti";
    for(let i = 0;i < 81;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 81;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Pb82(){
    document.querySelector(".fringelectron").innerHTML = "82";
    document.querySelector(".fringmolname").innerHTML = "Pb";
    document.querySelector(".fringname").innerHTML = "Lead";
    document.querySelector(".fringmass").innerHTML = "207.2";
    document.querySelector(".h1middlename").innerHTML = "Pb";
    for(let i = 0;i < 82;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 82;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Bi83(){
    document.querySelector(".fringelectron").innerHTML = "83";
    document.querySelector(".fringmolname").innerHTML = "Bi";
    document.querySelector(".fringname").innerHTML = "Bismuth";
    document.querySelector(".fringmass").innerHTML = "208.98";
    document.querySelector(".h1middlename").innerHTML = "Bi";
    for(let i = 0;i < 83;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 83;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Po84(){
    document.querySelector(".fringelectron").innerHTML = "84";
    document.querySelector(".fringmolname").innerHTML = "Po";
    document.querySelector(".fringname").innerHTML = "Polonium";
    document.querySelector(".fringmass").innerHTML = "209";
    document.querySelector(".h1middlename").innerHTML = "Po";
    for(let i = 0;i < 84;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 84;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function At85(){
    document.querySelector(".fringelectron").innerHTML = "85";
    document.querySelector(".fringmolname").innerHTML = "At";
    document.querySelector(".fringname").innerHTML = "Astanine";
    document.querySelector(".fringmass").innerHTML = "210";
    document.querySelector(".h1middlename").innerHTML = "At";
    for(let i = 0;i < 85;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 85;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Rn86(){
    document.querySelector(".fringelectron").innerHTML = "86";
    document.querySelector(".fringmolname").innerHTML = "Rn";
    document.querySelector(".fringname").innerHTML = "Radon";
    document.querySelector(".fringmass").innerHTML = "222";
    document.querySelector(".h1middlename").innerHTML = "Rn";
    for(let i = 0;i < 86;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 86;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Fr87(){
    document.querySelector(".fringelectron").innerHTML = "87";
    document.querySelector(".fringmolname").innerHTML = "Fr";
    document.querySelector(".fringname").innerHTML = "Francium";
    document.querySelector(".fringmass").innerHTML = "223";
    document.querySelector(".h1middlename").innerHTML = "Fr";
    for(let i = 0;i < 87;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 87;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ra88(){
    document.querySelector(".fringelectron").innerHTML = "88";
    document.querySelector(".fringmolname").innerHTML = "Ra";
    document.querySelector(".fringname").innerHTML = "Radium";
    document.querySelector(".fringmass").innerHTML = "226";
    document.querySelector(".h1middlename").innerHTML = "Ra";
    for(let i = 0;i < 88;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 88;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Rf104(){
    document.querySelector(".fringelectron").innerHTML = "104";
    document.querySelector(".fringmolname").innerHTML = "Rf";
    document.querySelector(".fringname").innerHTML = "Ruthefordium";
    document.querySelector(".fringmass").innerHTML = "267";
    document.querySelector(".h1middlename").innerHTML = "Rf";
    for(let i = 0;i < 104;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 104;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Db105(){
    document.querySelector(".fringelectron").innerHTML = "105";
    document.querySelector(".fringmolname").innerHTML = "Db";
    document.querySelector(".fringname").innerHTML = "DUbnium";
    document.querySelector(".fringmass").innerHTML = "268";
    document.querySelector(".h1middlename").innerHTML = "Db";
    for(let i = 0;i < 105;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 105;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Sg106(){
    document.querySelector(".fringelectron").innerHTML = "106";
    document.querySelector(".fringmolname").innerHTML = "Sg";
    document.querySelector(".fringname").innerHTML = "Seaborgium";
    document.querySelector(".fringmass").innerHTML = "269";
    document.querySelector(".h1middlename").innerHTML = "Sg";
    for(let i = 0;i < 106;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 106;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Bh107(){
    document.querySelector(".fringelectron").innerHTML = "107";
    document.querySelector(".fringmolname").innerHTML = "Bh";
    document.querySelector(".fringname").innerHTML = "Bohrium";
    document.querySelector(".fringmass").innerHTML = "270";
    document.querySelector(".h1middlename").innerHTML = "Bh";
    for(let i = 0;i < 107;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 107;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Hs108(){
    document.querySelector(".fringelectron").innerHTML = "108";
    document.querySelector(".fringmolname").innerHTML = "Hs";
    document.querySelector(".fringname").innerHTML = "Hassium";
    document.querySelector(".fringmass").innerHTML = "277";
    document.querySelector(".h1middlename").innerHTML = "Hs";
    for(let i = 0;i < 108;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 108;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Mt109(){
    document.querySelector(".fringelectron").innerHTML = "109";
    document.querySelector(".fringmolname").innerHTML = "Mt";
    document.querySelector(".fringname").innerHTML = "Meitnerium";
    document.querySelector(".fringmass").innerHTML = "278";
    document.querySelector(".h1middlename").innerHTML = "Mt";
    for(let i = 0;i < 109;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 109;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Ds110(){
    document.querySelector(".fringelectron").innerHTML = "110";
    document.querySelector(".fringmolname").innerHTML = "Ds";
    document.querySelector(".fringname").innerHTML = "Darmstadium";
    document.querySelector(".fringmass").innerHTML = "281";
    document.querySelector(".h1middlename").innerHTML = "Ds";
    for(let i = 0;i < 110;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 110;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Rg111(){
    document.querySelector(".fringelectron").innerHTML = "111";
    document.querySelector(".fringmolname").innerHTML = "Rg";
    document.querySelector(".fringname").innerHTML = "Roentgenium";
    document.querySelector(".fringmass").innerHTML = "282";
    document.querySelector(".h1middlename").innerHTML = "Rg";
    for(let i = 0;i < 111;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 111;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Cn112(){
    document.querySelector(".fringelectron").innerHTML = "112";
    document.querySelector(".fringmolname").innerHTML = "Cn";
    document.querySelector(".fringname").innerHTML = "Copernicium";
    document.querySelector(".fringmass").innerHTML = "285";
    document.querySelector(".h1middlename").innerHTML = "Cn";
    for(let i = 0;i < 112;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 112;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Nh113(){
    document.querySelector(".fringelectron").innerHTML = "113";
    document.querySelector(".fringmolname").innerHTML = "Nh";
    document.querySelector(".fringname").innerHTML = "Nihonium";
    document.querySelector(".fringmass").innerHTML = "286";
    document.querySelector(".h1middlename").innerHTML = "Nh";
    for(let i = 0;i < 113;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 113;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Fi114(){
    document.querySelector(".fringelectron").innerHTML = "114";
    document.querySelector(".fringmolname").innerHTML = "Fi";
    document.querySelector(".fringname").innerHTML = "Flerovium";
    document.querySelector(".fringmass").innerHTML = "289";
    document.querySelector(".h1middlename").innerHTML = "Fi";
    for(let i = 0;i < 114;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 114;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Mc115(){
    document.querySelector(".fringelectron").innerHTML = "115";
    document.querySelector(".fringmolname").innerHTML = "Mc";
    document.querySelector(".fringname").innerHTML = "Moscovium";
    document.querySelector(".fringmass").innerHTML = "290";
    document.querySelector(".h1middlename").innerHTML = "Mc";
    for(let i = 0;i < 115;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 115;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Lv116(){
    document.querySelector(".fringelectron").innerHTML = "116";
    document.querySelector(".fringmolname").innerHTML = "Lv";
    document.querySelector(".fringname").innerHTML = "Livermorium";
    document.querySelector(".fringmass").innerHTML = "293";
    document.querySelector(".h1middlename").innerHTML = "Lv";
    for(let i = 0;i < 116;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 116;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}

document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";
}
function Ts117(){
    document.querySelector(".fringelectron").innerHTML = "117";
    document.querySelector(".fringmolname").innerHTML = "Ts";
    document.querySelector(".fringname").innerHTML = "Tennessine";
    document.querySelector(".fringmass").innerHTML = "294";
    document.querySelector(".h1middlename").innerHTML = "Ts";
    for(let i = 0;i < 117;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 117;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}
function Os118(){
    document.querySelector(".fringelectron").innerHTML = "118";
    document.querySelector(".fringmolname").innerHTML = "Og";
    document.querySelector(".fringname").innerHTML = "Oganesson";
    document.querySelector(".fringmass").innerHTML = "294";
    document.querySelector(".h1middlename").innerHTML = "Og";
    for(let i = 0;i < 118;i++){
    document.querySelector(obj[i]).style.display = "block";
}
    for(let i = 118;i < 118;i++){
    document.querySelector(obj[i]).style.display = "none";
}
document.querySelector(".table").style.display = "none";
    document.querySelector(".hy").style.display = "block";

}