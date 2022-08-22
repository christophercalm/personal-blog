---
date: 2022-08-22
title: Automated SMS with Twilio, Amazon ECR, and Amazon ECS 
---

### Motivation:

Remembering birthdays has been a singularly difficult task for me. Rather than improving myself and my memory, I decided to have technology fix my problem for me while, at the same time, learning about that mysterious world of ops and sysadmin. I also find automated SMS systems that aren't used for spam to be very interesting. In the short space of time that social media had taken over, but cellphones did not have a reliable internet connection, there were SMS gateways that allowed the user to interact with the internet. One was able to post on Facebook, tweet a tweet, or get answers to homework problems -- all without having an internet connection. In this spirit, I wanted to create a long running script that would periodically check if there were any upcoming birthdays on my list, and send me a message with their age and birthday if so.

### Stack Chosen:

I decided to go with the Twilio SMS service as they have a decent free tier that allows you to send messages to verified phone numbers with a small credit. With how many messages I was expecting, I knew that I wouldn't run out of credits any time soon. 

<img class="post-inline-image" src="https://i.imgur.com/ZwvqqB2.png" alt="Twilio Setup" />


The API was super easy to use and once I got my account SID and auth token and confirmed phone number, I was able to test on my machine pretty easily. I stored the credentials in environment variables as suggested. 


<img class="post-inline-image" src="https://i.imgur.com/1rRos5I.png" alt="Twilio Credentials" />


[https://www.twilio.com/docs/sms/quickstart/python](https://www.twilio.com/docs/sms/quickstart/python)

Below you can see how easy it is to send an SMS message through Twilio. 

``` python
import os
from twilio.rest import Client
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)
message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+15017122661',
                     to='+15558675310'
                 )

print(message.sid)
```

After creating a working script and Docker container for the script that you can find here: [https://github.com/christophercalm/sms-birthday-reminder](https://github.com/christophercalm/sms-birthday-reminder), I decided that I would need to think about possible hosting. The easiest solution would be to run the Docker container on my local Windows machine, but I knew the uptime for that would be low and I wanted to get my feet wet in AWS. 

The pure AWS solution that I found was to store my container in Elastic Container Registry and to run the container with Elastic Container Service. 

### ECR Setup

I used this guide to set up my ECR account and command line tools. I also got to have my first go at creating granular permissions with an IAM user instead of using the root account. 

[https://docs.aws.amazon.com/AmazonECR/latest/userguide/get-set-up-for-amazon-ecr.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/get-set-up-for-amazon-ecr.html) 


After installing the CLI, I needed to configure authentication which I was able to do by following the documentation here: [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds-create](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds-create)

After getting that set up. I followed the instructions here to create a repository and push it. 
[https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image](https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image).


### ECS Setup

Before pulling my container from ECR, I needed to add the Task Execution IAM role to my IAM user that would run the container. 

[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)


I opted to go for the ECS console walkthrough that you can find after going to the ECS homepage here: [https://aws.amazon.com/ecs/getting-started/](https://aws.amazon.com/ecs/getting-started) instead of using Amazon Copilot. This decision was made purely out of convenience as I didn't want to install another CLI tool on my machine. But for my purposes, it worked well. I would not say that it was intuitive to create a container that used an ECS repo, but after fiddling with the IAM permissions and finding the right repo url, I was able to do so with some help from this page [https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_ECS.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_ECS.html)

<img class="post-inline-image" src="https://i.imgur.com/uVGAF10.png" alt="ECS Container Setup" />

<img class="post-inline-image" src="https://i.imgur.com/ODts31D.png" alt="ECS Container Running" />

### Using EC2

In the end, after realizing that ECS was not available in the free tier, I eventually hosted my script on an Ubuntu 22.04 LTS container with EC2. This was relatively easy to setup, but as a bit of a note to my future self, the key generation tool works for the ubuntu user, not the root user when logging in via SSH. I simply pulled in the git repo and added my real data and env file. Then followed the commands in the Dockerfile to set up the cron job and python packages.

I changed the crontab entry to 

```
# must be ended with a new line "LF" (Unix) and not "CRLF" (Windows)
# will run at 6pm (Central = UTC - 5)
0 23 * * * cd /app && /usr/local/bin/python3 send-birthday-sms.py >/dev/null 2>&1 | logger -t python-sms
``` 

to log the script to the syslog instead of the Docker output file. Another thing that I noticed while creating the cronjob is that all containers and ec2 machines run with UTC as default, so I just adjusted my desired time. 

<img class="post-inline-image" src="https://i.imgur.com/Mka3mMc.png" alt="EC2 Setup" />
<img class="post-inline-image" src="https://i.imgur.com/hh9ONan.png" alt="EC2 Setup Storage" />

Although I didn't end up using the ECS and ECR stack permanently due to cost, I can see how they would be very useful for setting up services that auto-provision based on need and scale automatically.
