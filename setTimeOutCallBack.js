let val = '';
let text = document.createElement('div'); 
text.classList.add('mid'); 
document.body.append(text);
console.log(val);

setTimeout(function(){
    setTimeout(function (){
        setTimeout(function(){
            setTimeout(function(){
                setTimeout(function(){
                    setTimeout(function(){
                        setTimeout(function(){
                            setTimeout(function(){
                                setTimeout(function(){
                                    setTimeout(function(){
                                        setTimeout(function(){
                                            val = "Happy Independence Day";
                                            text.innerHTML = `<h1>${val}</h1>`;
                                        },1000)
                                        val = "1";
                                        text.innerHTML = `<h1>${val}</h1>`;
                                    },1000)
                                    val = "2";
                                    text.innerHTML = `<h1>${val}</h1>`;
                                },1000)
                                val = "3";
                                text.innerHTML = `<h1>${val}</h1>`;
                            },1000)
                            val = "4";
                            text.innerHTML = `<h1>${val}</h1>`;
                        },1000)
                        val = "5";
                        text.innerHTML = `<h1>${val}</h1>`;
                    },1000)
                    val = "6";
                    text.innerHTML = `<h1>${val}</h1>`;
                },1000)
                val = "7";
                text.innerHTML = `<h1>${val}</h1>`;
            },1000)
            val = "8";
            text.innerHTML = `<h1>${val}</h1>`;
        },1000)
        val = "9";
        text.innerHTML = `<h1>${val}</h1>`;
    },1000);
    val = "10";
    text.innerHTML = `<h1>${val}</h1>`;
},1000);