const Post1 = document.createElement('label');
Post1.textContent = 'Post 1 '
Post1.style.color = 'black';
Post1.style.display = 'block';
Post1.style.width = '200px';
Post1.style.height = '50px';
document.body.appendChild(Post1);

const picture = document.createElement('img');
picture.src = 'https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517_1280.png';
picture.height = 200;
picture.width = 200;    
document.body.appendChild(picture);

const label2 = document.createElement('label');
label2.textContent = 'Click the box to like the post, the label will show the number of likes.';
label2.style.display = 'block';
label2.style.marginTop = '10px';   
document.body.appendChild(label2);   


const label = document.createElement('label');
label.textContent = 'Click the box to like the post, the label will show the number of likes.';
label.style.display = 'block';
label.style.marginTop = '10px';
document.body.appendChild(label);





class Person {
    public name : string;
    public likes : number;
    
    constructor(name : string, likes : number){
        this.name = name;
        this.likes = likes;
    }    

    LikePost(): void {
        this.likes++;
        console.log(`Post liked! Total likes: ${this.likes}`);
    }

    UnlikePost(): void {
        this.likes--;
        console.log(`Post liked! Total likes: ${this.likes}`);
    }

   set setLikes (likes: number) {
        if (likes < 0) {
            throw new Error("Likes cannot be negative");
        }
        this.likes = likes;
    }    

}

const p1 = new Person("Zander", 30);

var Liked = false;


label2.addEventListener('click', () => {
    label2.style.color = 'blue';
    console.log('Label clicked');
    setTimeout(() => {
        label2.style.color = 'black'; 
        console.log('label is not clicked anymore');
    }, 400);

    if (!Liked) {
        p1.LikePost();
        Liked = true;
        label.textContent = `Post liked! Total likes: ${p1.likes}`;
      } else {
        p1.UnlikePost();
        Liked = false;
        label.textContent = `Post unliked! Total likes: ${p1.likes}`;
      }
        // const button = new Person('Post 1', 0);
        // button.LikePost();
        // label.textContent = `Post liked! Total likes: ${button.likes}`;
    //p1.LikePost();
    //label.textContent = `Post liked! Total likes: ${p1.likes}`;
    //Liked = true
});





label.textContent = `Post liked! Total likes: ${p1.likes}`;
