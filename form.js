function bearMode(){
    if(document.getElementById('checkBox').checked){
        document.getElementById('self_pic').src = 'images/bearEmote.png';
    } else {
        document.getElementById('self_pic').src = 'images/self.jpg';
    }
}