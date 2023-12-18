for(let i=1; i<=9; i++){

 let postlist = document.querySelector(".post_list");
 let post = document.createElement("div");
 post.className="post_list_wrap"
 post.innerHTML=`
 <div class="post_list_wrap">
     <img src="img/explore_img${i}.jpg" alt="x">
     <ul class="hover">
       <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
       <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
      </ul>
   </div>
 `;
 postlist.appendChild(post);
 
 };

for(let i=1; i<=9; i++){

  let reelslist = document.querySelector(".reels_list");
  let reels = document.createElement("div");
  reels.className="reels_list_wrap"
  reels.innerHTML=`
  <div class="reels_list_wrap">
      <img src="img/explore_img${i}.jpg" alt="x">
      <ul class="hover">
        <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
        <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
       </ul>
    </div>
  `;
  reelslist.appendChild(reels);
  
};

for(let i=1; i<=9; i++){

 let taglist = document.querySelector(".tag_list");
 let tag = document.createElement("div");
 tag.className="tag_list_wrap"
 tag.innerHTML=`
 <div class="tag_list_wrap">
     <img src="img/explore_img${i}.jpg" alt="x">
     <ul class="hover">
       <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
       <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
      </ul>
   </div>
 `;
 taglist.appendChild(tag);
 
};



/* p_click 을 클릭했을 때, t_click , r_click의 border-top값은 사라지고, p_click 의 border-top값이 나와야한다. p_click 을 클릭했을때, post_list 가 활성화 되고, tag_list, reels_list는 사라져야한다. */

 let Pclick = document.querySelector(".p_click");
 let Rclick = document.querySelector(".r_click");
 let Tclick = document.querySelector(".t_click");
 let Postlist = document.querySelector(".post_list");
 let reelslist = document.querySelector(".reels_list");
 let Tagtlist = document.querySelector(".tag_list");
 

function PclickClick(){
 Pclick.style.borderTop="3px solid #aaa";
 Tclick.style.borderTop="0";
 Rclick.style.borderTop="0";
 Postlist.style.display="flex";
 Tagtlist.style.display="none";
 reelslist.style.display="none";
}

Pclick.addEventListener('click',PclickClick);

function TclickClick(){
 Pclick.style.borderTop="0";
 Tclick.style.borderTop="3px solid #aaa";
 Rclick.style.borderTop="0";
 Postlist.style.display="none";
 Tagtlist.style.display="flex";
 reelslist.style.display="none";
};

Tclick.addEventListener('click',TclickClick);

function RclickClick(){
 Pclick.style.borderTop="0";
 Tclick.style.borderTop="0";
 Rclick.style.borderTop="3px solid #aaa";
 Postlist.style.display="none";
 Tagtlist.style.display="none";
 reelslist.style.display="flex";
};

Rclick.addEventListener('click',RclickClick);



