# WORKSHOP NUMBER 7

•	Build a simulation of a real or imagined entity or environment.
•	Experiment with random walks and/or particle systems in your sketch.
•	Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

https://92386682.github.io/Workshop_Task_7/

## Initial plan (written before coding)
Beginning by browsing peers repositories, I eventually found a workshop_2 task created by SiennaBienna that created “cheese-like” images by overlaying white circles onto 4 manually coloured squares. My idea to build from this, and respond to the workshop task, was to simulate the circles within each of the squares, never leaving the boundaries.
 

## Process
Beginning by forking Sienna’s repository, and examining the code, I commented out the functions and my understanding of them. Then, working from the workshop tutorial, I introduced object constructors to take the place of cheeseArtist, manually placing the rectangles to take the place of the ones introduced by the function
![72](https://github.com/user-attachments/assets/57f165b0-20f3-470d-8acb-dba993abba2d)

Enabling portions of the forked code, and seeing if they could be integrated easily
![73](https://github.com/user-attachments/assets/7640ef54-c087-4fcc-8810-e970c7e76351)

Eventually, unfortunately, most of the code was rewritten, as it allowed for easier integration into the animation (movement) function and allowed for a more streamlined final product. Portions of the function were recycled, but it was fairly cut n paste-y.
![74](https://github.com/user-attachments/assets/72c5fde3-d7c5-4462-84d8-665dc6e608f9)

Note that instead of defining each individual rectangle as x/y coordinates with the floating bubbles being confined to that space, I achieved a similar end result with a combination of noStroke() and matching the negative space RGB value to the bubbles themselves. The actual functionality of this is shown below, with noStroke() commented out. At the end, coming back to review, I changed the y variable slightly to
`` this.y = this.y - random (1, -1.1);``
Allowing for a very gradual "falling" effect if the code was viewed for long enough
![78](https://github.com/user-attachments/assets/9dc0ab06-d80c-4031-b79d-d5ea934a7e5c)

Most of this task was a direct continuation of the workshop, and no major problems were encountered.

## Possible development (beyond this task)
More deeply developed movement dynamics, collision mechanics to “pop” bubbles that intersect via their x/y values.
