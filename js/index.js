const typeWord =document.querySelector(".typing_word");
const cursor= document.querySelector(".cursor");
const arr = ["Developer", "Designer","Photographer"];
const typingDelay=150;
const  earsingDelay =100;
const newTextDelay= 1000;
let  arrIndex=0;
let index=0;

console.log("Demo");

function typing() {
	if (index <arr[arrIndex].length) {
		if (!cursor.classList.contains("typing")) 
				cursor.classList.add('typing');
				typeWord.textContent +=arr[arrIndex].charAt(index);
				index++;
				setTimeout(typing,typingDelay);
	}else{
		cursor.classList.remove('typing');
		setTimeout(earsing,newTextDelay);
	}
}

 function earsing() {
	 if (index>0) {
		 if (!cursor.classList.contains('typing')) 
			 cursor.classList.add('typing');
			 typeWord.textContent =arr[arrIndex].substring(0,index-1);
			 index--;
			 setTimeout(earsing,earsingDelay);
	 }else{
		 cursor.classList.remove('typing');
		 arrIndex++;
		 if(arrIndex >=arr.length) arrIndex=0;
		 setTimeout(typing,typingDelay+1100);
	 }
 }

 document.addEventListener("DOMContentLoaded",function () {
	 if (arr.length) setTimeout(typing,newTextDelay+250);
 });