/*
 * find any div with a class or id containing the word 'comment'
 * find the immediate child <p> of each of the results
 * load a randomly selected, hard-coded, zen comment
 * TODO: generate a comment with a markov chain!
 */

function generateComment() {
    var zenComments = ['That is an interesting point', 'I respect your opinion',
    'I do not agree with your position, but I respect you as a person',
    'I had never considered it that way; thank you for the enlightenment',
    'Today can be a great day, if you let it','You need the dark in order to show the light.',
    'Look around. Look at what we have. Beauty is everywhere—you only have to look to see it.',
    'Just go out and talk to a tree. Make friends with it.',
    'There\'s nothing wrong with having a tree as a friend.',
    'The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.',
    'We don\'t make mistakes. We just have happy accidents.',
    'We don\'t know where it goes. We don\'t really care.', 'Any way you want to be, that\'s just right', 'Clouds are very, very free',
    'Don\'t let your dreams be dreams', 'Yesterday you said tomorrow, so just do it', 'Make your dreams come true',
    'some people dream of success while you\'re gonna wake up and work hard at it', 'Nothing is impossible', 'If you\'re tired of starting over, stop giving up',
    'You should get to the point where anyone else would quit, and you\'re not going to stop there'];

    return zenComments[Math.floor(Math.random() * zenComments.length)];
}

//this is tricky, because their's no standard for comments
//so look through all likely element classes for keywords
//right now it assumes a pretty semantic DOM
(function() {
    var comments  =  Array.prototype.slice.call(document.querySelectorAll('div')).map(
        function(comment) {
            if(comment.className.toLowerCase().indexOf('comment') > -1 ||
                comment.className.toLowerCase().indexOf('md') > -1) {
                //TODO: Assumes first child <p> is the comment text
                var immediateParagraphChild  = Array.prototype.slice.call(comment.querySelectorAll('p'))[0];
                if(immediateParagraphChild) {
                    immediateParagraphChild.innerText = generateComment();
                }
                else {
                    comment.innerText = generateComment();
                }
            }
        });
})();

