======================================================

# Description 

======================================================

This is a football game where you can dribble the ball across the field using mouse clicks and shoot the ball to the goal. To score a goal, you have to avoid the keeper. If the  ball touches the keeper it will be blocked 

### Hosted link:

https://interactive-footbal-game.netlify.app/

======================================================

# Tech stack 

======================================================

- HTML 
- CSS
- JavaScript

======================================================

# v1

======================================================

I found the following issues within the game that need to be resolved:
1. The checkElements function doesn't accurately detect if the elements  are touching - it returns "missed" at the first shot
2. As a result, I was unable to properly execute the resetBall() function after a miss because the game would not work. It also prevents the program from accurately detecting a block.
3. The game is not responsive to various screen sizes - when adjusted the .football also  repositions due to the absolute positioning.


======================================================

# v2

======================================================


The following updates were made:

1. Added difficulty levels medium (adds a  defender to the field) and hard (adds a second defender to the field)
2. Added alerts for when the ball is blocked by the keeper or scored 
3. Removed the "missed" touch event
4. Added an original position which is the center for the ball to go to after every shot taken

