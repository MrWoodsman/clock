// function set(x) {
//     const h1 = document.getElementById('h1');
//     h1.style.transform = 'translateY('+x+'px)';
// }

function set() {
    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const m1 = document.getElementById('m1');
    const m2 = document.getElementById('m2');
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');
    const d = new Date();

    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    let hString = hours.toString();
    let mString = minutes.toString();
    let sString = seconds.toString();

    const ht1 = hString[0];
    const ht2 = hString[1];
    h1.style.transform = 'translateY('+ht1*-30+'px)';
    h2.style.transform = 'translateY('+ht2*-30+'px)';

    const mt1 = mString[0];
    const mt2 = mString[1];
    if(m1==null){
        m1.style.transform = 'translateY(0px)';
    } else {
        m1.style.transform = 'translateY('+mt1*-30+'px)';
    }
    m2.style.transform = 'translateY('+mt2*-30+'px)';

    const st1 = sString[0];
    const st2 = sString[1];
    if(sString.length == 2) {
        s1.style.transform = 'translateY('+st1*-30+'px)';
        s2.style.transform = 'translateY('+st2*-30+'px)';
    } else {
        s1.style.transform = 'translateY(0px)';
        s2.style.transform = 'translateY('+st1*-30+'px)';
    }

    // switch (hString[0]) {
    //     case "0":
    //         h1.style.transform = 'translateY(0px)';
    //         break;
    //     case "1":
    //         h1.style.transform = 'translateY(-30px)';
    //         break;
    //     case "2":
    //         h1.style.transform = 'translateY(-60px)';
    //         break;
    //     default:
    //       console.log("No value found");
    //   }

    // switch (hString[1]) {
    // case "0":
    //     h2.style.transform = 'translateY(0px)';
    //     break;
    // case "1":
    //     h2.style.transform = 'translateY(-30px)';
    //     break;
    // case "2":
    //     h2.style.transform = 'translateY(-60px)';
    //     break;
    // case "3":
    //     h2.style.transform = 'translateY(-90px)';
    //     break;
    // case "4":
    //     h2.style.transform = 'translateY(-90px)';
    //     break;
    // case "5":
    //     h2.style.transform = 'translateY(-90px)';
    //     break;

        
    // default:
    //     console.log("No value found");
    // }

}

function Update() {
    const d = new Date();
    console.log(d.getHours())
    set();
}
setInterval(Update, 1000);