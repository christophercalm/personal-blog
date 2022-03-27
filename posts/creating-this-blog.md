---
date: Last Modified
title: Creating this Blog. 
---

## Why and How I Created a Blog with Netlify

- [Why and How I Created a Blog with Netlify](#why-and-how-i-created-a-blog-with-netlify)
  - [Motivation and Expectations:](#motivation-and-expectations)
  - [Stack Chosen:](#stack-chosen)
  - [How to Replicate:](#how-to-replicate)
  - [Conclusions:](#conclusions)


### Motivation and Expectations:

I would like to share my experience and a bit of motivation for creating this blog. Recently I have been reading quite a few articles on HackerNews which are primarily intellectually stimulating and technical articles. However, what has been holding me back is not wanting to get acquainted with a new CMS or having to write html by hand. Not that it is super difficult, but it is not something that I particularly enjoy. 

I expected to have to install tons of software or create some website with some inferior wysiwyg online editor or have to write the html and css by hand. However, I have found that in 2022 creating this sort of blog is incredibly easy if you go the path that I have taken. 

### Stack Chosen:

I went with [11.ty](https://www.11ty.dev/) for the static site generator because I am more familiar with the JS ecosystem and it had all the features that I could possibly want for this blog. For hosting, I considered github pages but I saw that [Netlify](https://www.netlify.com/) had some great free hosting and url names. 

With these two options, I can write a blog post in markdown, push or merge it to master, and netlify will take care of all of the build steps for me without having to fiddle with some wordpress on a Linux VPS as I have done in the past. 

So without further ado, here are the steps that I used to create this blog. 

### How to Replicate:

1. **Finding a base template for 11.ty:**
   
   For this I simply found a template that I liked the look of and thought would suit my needs. I found mine personally on the [starter project page](https://www.11ty.dev/docs/starter/) and went with [eleventy-blog-mnml](https://github.com/arpitbatra123/eleventy-blog-mnml). There should be commands for you to run in the package.json file and in the README. I then forked this repo into my github account. This part is important for deployment later on. 

2. **Customizing for my needs:**
   
   For this I changed some of the scss files that I didn't like. For example, I didn't like that all of the words were lowercase so I found the scss file `styles\homepage.scss` and changed the p styling. I also deleted the example posts and added my own favicon.

3. **Deployment to Netlify:** 

    For this part I created an account at Netlify with my github credentials (be careful here, you should be able to restrict access to just your blog repo instead of the default all repos). I then created a new project with the import an existing project option. Be sure that your package.json settings match the build settings on netlify. 


    ![Image of Netlify Settings](../../assets/images/netlify-configuration.png)


    Mine were correct right out of the box. After that just click "deploy site" and you should be good to go if your post is in the branch that you set to deploy. 

### Conclusions:

Creating a blog in a dev friendly way where I have complete control of styling and content but don't have to mess with a bunch of apache or nginx settings has come a long way from when I first tried creating one in 2011 with a VPS and LAMP server with Wordpress. I have really enjoyed creating this blog and it only took me about an hour from start to finish once I had decided on a tech stack.

I appreciate the organic nature of a blog and I am really excited about the opportunities that I think that it will provide me. 



