// Text
const myTags = [
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
    'WRITE', 'WRITE', 'WRITE',
];

// Funtion
var tagCloud = TagCloud('.content', myTags, {
    radius: 250,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

// Rondam color
var colors = ['#CE5A67','#fff', '#C7DCA7', '#9BCDD2', '#FFA559', '#DEBACE', '#CFD2CF', '#DBDFFD', '#DAE5D0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;