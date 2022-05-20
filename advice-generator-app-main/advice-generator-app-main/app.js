document.getElementById('dice').addEventListener('click', loadAdvice);

window.onload = () => {
    loadAdvice();
}

function loadAdvice() {
    fetch('https://api.adviceslip.com/advice').then((res) => res.json()).then((data) => {
                const adviceData = data.slip;
                //console.log(adviceData) 
                output = `
                <div id="header">advice #${adviceData.id}</div>
                <div id="content">
                <p><span>"</span> ${adviceData.advice} <span>"</span></p>
                </div>
                `;
                 document.getElementById('content').innerHTML = output;
            }).catch(error => {
                console.log(error);
            })
}


// .then((advice) => {
//                     output += `
//                     <div id="header">advice ${advice.slip.id}</div>
//                     <div id="content">
//                     <p>${advice.slip.advice}</p>
//                     </div>
//                     `; 
//                 });