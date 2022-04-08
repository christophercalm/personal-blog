---
date: Last Modified
title: Running macOS on Virtualbox with Windows 10 
---

If you have ever wanted to give macOS a try but didn't have access to Apple hardware or just need to run an app quickly, there is a super neat script written by Jack here at https://github.com/myspaghetti that will enable you to install macOS without installing any paid tools or without downloading an untrusted image from somewhere online. I tried it and was pleasantly surprised by the performance and ease of install. I have not been able to fix iMessage but I have been told that some people have gotten it working by running the script on genuine mac and moving over the .vdi 

### Installation Steps:

- Install Virtualbox from [virtualbox](https://www.virtualbox.org/)

- Install latest [Oracle VM VirtualBox Extension Pack](https://www.virtualbox.org/wiki/Downloads)

- Install Cygwin https://www.cygwin.com/ This will let us install the tools that the script depends on. 
You will need to search for and install vim-common, unzip, and wget. If you forgot these just rerun the installer and search for the packages.

![Image of cygwin Settings](../../assets/images/macOS-on-Windows/cygwin.PNG)

- Open Cygwin Terminal and run:
  
  `curl https://github.com/myspaghetti/macos-virtualbox/blob/master/macos-guest-virtualbox.sh --output macos-guest-virtualbox.sh && ./macos-guest-virtualbox.sh`

  Follow printed instructions. I used the defaults and it ran fine but there should be troubleshooting options as well. You will have to pay attention to installation and press enter when certain screens in the installer are open. 

### Results:

Performance is pretty snappy. I was not able to get audio working but as a quick way to test an app for development or to try out macOS I think this was a great success. 

![Image of cygwin Settings](../../assets/images/macOS-on-Windows/virtualbox.PNG)

