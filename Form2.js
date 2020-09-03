class Form {
    constructor(){
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.greeting3 = createElement('h2');
   
    this.didyouknow = createButton('Did');
    this.didyouknow.style('color','red');
    
    this.Explore = createButton('Explore');
    this.Explore.style('color','red');

    this.UploadPost = createA("Photo.html","Upload","_blank");
    this.UploadPost.style('color','red');  
    this.UploadPost.style('background-color','white');

    this.ViewPosts = createA("ViewPost.html","View" , "_blank");
    this.ViewPosts.style('color','red');
    this.ViewPosts.style('background-color','white');

    this.feedback = createButton('Feed');
    this.feedback.style('color','red');

    this.more = createButton('Report');
    this.more.style('color','red');
    //this.myDiv = createDiv('Welcome to Go News!');
 
     
    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.greeting3.hide();
      this.didyouknow.hide();
      this.Explore.hide();
      this.ViewPosts.hide();
      this.feedback.hide();
      this.UploadPost.hide();
      this.more.hide();
    }
    show(){
      this.greeting.show();
      this.greeting2.show();
      this.greeting3.show();
      this.didyouknow.show();
      this.Explore.show();
      this.ViewPosts.show();
      this.feedback.show();
      this.UploadPost.show();
      this.more.show();
    }
    display(){
      //var userID = firebase.auth().currentUser.uid;
      //var playerCountRef = database.ref('Users/' + userId +'fName' );
    //playerCountRef.on("value",(data)=>{
      //fName = data.val();
    //})
  //  console.log(fName);


      this.greeting.html('Hi' +  " " + name );
      this.greeting.position(100,50);
      this.greeting.style('color',"blue");
      this.greeting.style('font-size','20px');
    
      this.greeting2.html('Dear'+  " " + name   + ' , this app is about our environment and  Global Warming and also about nearby Environmental updates  ');
      this.greeting2.position(50,150);
      this.greeting2.style('font-size','20px');
      this.greeting2.style('color',"blue");
      this.greeting3.html(' so the user can also create thier own posts to tell others about the  environmental condition of thier area');
      this.greeting3.position(50,200);
      this.greeting3.style('font-size','20px');
      this.greeting3.style('color',"blue");
         
      this.didyouknow.position(25,525);
      this.didyouknow.size(30,22);

      this.Explore.position(75,525);
      this.UploadPost.position(165,525);
      this.ViewPosts.position(245,525);
      this.feedback.position(305,525);
      this.more.position(365,525);
      fill('Black');
      if(gameState === "Home"){
      //  rect(20,705,850,100);
      }
      
     // this.myDiv.position(200, 200);
      
      
      //this.myDiv.style('font-size', mouseX + 'px'); 
            
      this.didyouknow.mousePressed(() =>{
        gameState = "didyouknow";
        this.didyouknow.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        

      })

      this.Explore.mousePressed(()=>{
        gameState = "Explore";
        
 
        this.Explore.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        

      })
   //   this.UploadPost.mousePressed(()=>{
    //    gameState = "UploadPost";
    //    window.location.href = 'Photo.html';
    //  })
     // this.ViewPosts.mousePressed(()=>{
      //   gameState = "ViewPost";
       //  window.location.href = "ViewPost.html";

      //})
      this.feedback.mousePressed(()=>{
        gameState  = "feedback";
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.feedback.hide();
      })
      this.more.mousePressed(()=>{
        gameState = "More";
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.more.hide();

      })
    }   
}








