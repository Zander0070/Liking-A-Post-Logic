var Post1 = document.createElement('label');
Post1.textContent = 'Post 1 ';
Post1.style.color = 'black';
Post1.style.display = 'block';
Post1.style.width = '200px';
Post1.style.height = '50px';
document.body.appendChild(Post1);
var picture = document.createElement('img');
picture.src = 'https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517_1280.png';
picture.height = 200;
picture.width = 200;
document.body.appendChild(picture);
var label2 = document.createElement('label');
label2.textContent = 'Click the box to like the post, the label will show the number of likes.';
label2.style.display = 'block';
label2.style.marginTop = '10px';
document.body.appendChild(label2);
var label = document.createElement('label');
label.textContent = 'Click the box to like the post, the label will show the number of likes.';
label.style.display = 'block';
label.style.marginTop = '10px';
document.body.appendChild(label);
var Person = /** @class */ (function () {
    function Person(name, likes) {
        this.name = name;
        this.likes = likes;
    }
    Person.prototype.LikePost = function () {
        this.likes++;
        console.log("Post liked! Total likes: ".concat(this.likes));
    };
    Person.prototype.UnlikePost = function () {
        this.likes--;
        console.log("Post liked! Total likes: ".concat(this.likes));
    };
    Object.defineProperty(Person.prototype, "setLikes", {
        set: function (likes) {
            if (likes < 0) {
                throw new Error("Likes cannot be negative");
            }
            this.likes = likes;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person("Zander", 30);
var Liked = false;
label2.addEventListener('click', function () {
    label2.style.color = 'blue';
    console.log('Label clicked');
    setTimeout(function () {
        label2.style.color = 'black';
        console.log('label is not clicked anymore');
    }, 400);
    if (!Liked) {
        p1.LikePost();
        Liked = true;
        label.textContent = "Post liked! Total likes: ".concat(p1.likes);
    }
    else {
        p1.UnlikePost();
        Liked = false;
        label.textContent = "Post unliked! Total likes: ".concat(p1.likes);
    }
    // const button = new Person('Post 1', 0);
    // button.LikePost();
    // label.textContent = `Post liked! Total likes: ${button.likes}`;
    //p1.LikePost();
    //label.textContent = `Post liked! Total likes: ${p1.likes}`;
    //Liked = true
});
label.textContent = "Post liked! Total likes: ".concat(p1.likes);
