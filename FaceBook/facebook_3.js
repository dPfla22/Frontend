var a;
function popup()
{
    let post = document.getElementById("post");
    let pop = document.getElementById("post_pop");
    post.style.display='block';
    pop.style.display='block';
}

window.onload=function(){
    const close = document.getElementById("close");
    const submit = document.getElementById("submit");
    close.onclick=function(){
        let post = document.getElementById("post");
        let pop = document.getElementById("post_pop");
        post.style.display='none';
        pop.style.display='none';
    }
submit.onclick=function(){
        let write = document.getElementById("post_write");    
        const contents=document.getElementById('contents');
        let upload=`<div class="contents_box">
        <div class="contents_user">
            <img id="box_user_img" src="./facebook_3_img/user_2.jpg" alt="user">
            <span class="box_user_name">
                예림
            </span>
            <img src="./facebook_3_img/etc.jpg" style="margin-left: 438px; width: 18px; height: 6px;">
        </div>
        <div class="contents_mid">
            ${write.value.replace(/\n/g,'<br/>')}
        </div>
        <div class="contents_bottom">
            <div  class="like" >
                <img src="./facebook_3_img/like.jpg" style="height:20px; width:20px;">
                <span>좋아요</span>
            </div>
            <div  class="comment" >
                <img src="./facebook_3_img/comment.jpg" style="height:20px; width:20px;">
                <span>댓글 달기</span>
            </div>
            <div  class="share" >
                <img src="./facebook_3_img/share.jpg" style="height:20px; width:20px;">
                <span>공유하기</span>
            </div>
        </div>
        </div>`;
        contents.insertAdjacentHTML('beforeend',upload);
        let post = document.getElementById("post");
        let pop = document.getElementById("post_pop");
        post.style.display='none';
        pop.style.display='none';
        write.value='';
    }
}