# Before you start  
Make sure you have the followings ready.  
If you don't want to do the chores, you can join Personium community and we can give you a demo user Cell so that you can skip this section.  

1. Slack workspace is available  
1. In Slack workspace, you have admin permission to add Hubot (you need the API token)  
![](images/slack-hubot-integration-token.png)  
1. Setup Hubot properly in [Heroku](https://www.heroku.com/)  
1. Add Hubot to channel "random".  

# Tutorial  
We assume you are already familiar with Cell Manager and some basic operations.  

1. Install the sample-slack-messenger.bar into your Cell.  
1. Download, modify and upload the following file.  
`{Installed box name}/Engine/__src/test_sendmessage.js with your bot token`  

    - Before:   

            var token = "xoxb-***"; // Please use your bot's token in Slack
            var defaultChannel = "random"; // Please specify your default channel

    - After (e.g. integration token is "xoxb-774262978895-DRd6joZPlAZB18TSxQP3HGqp"):  

            var token = "xoxb-774262978895-DRd6joZPlAZB18TSxQP3HGqp"; // Please use your bot's token in Slack
            var defaultChannel = "random"; // Please specify your default channel

1. Import [Restlet Client file](bin/RestletClient.json) to Chrome's Restlet Client.  

1. Configure the environment (test-slack-messenger) with proper information.  
> When you want to send to a specify user in Slack, you need the username.  
See "Where to find you Slack Username".  
> If you also want to send a Slack message to a certain channel, you need to invite Hubot to that channel.  
![](images/restlet-client-environments.png)  

1. Execute the Restlet request.  
1. Check your Slack message.  

## Where to find your Slack Username  
1. Click your profile photo  
1. Click Open account settings  
1. Scroll down to the bottom and click the expand button of the Username field  
1. Note the username
![](images/slack-username.png)

# Advances  
This Slack messaging funtion is used in [app-schedule-notifier](https://github.com/personium/app-schedule-notifier) to send notification when an event starts.  
