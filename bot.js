const status = [],
      config = require("./config.json"),
      auth = {
        token: config.token
      },

      Discord = require('discord.js'),
      client = new Discord.Client(),
      webshot = require('webshot');

      client.on('ready', () => {
          console.log("Connected as: " + client.user.username + "\nBot ID: " + client.user.id);
          //client.user.setPresence({ status: 'online', });
      });


    client.on('message', async function(message) {

        var send = (content, options) => {
            return message.channel.send(content, options);
          };

          if (message.content.startsWith(config.prefix)) {
              var args = message.content.split(" ");
              var command = args.splice(0,1).join(" ");
              args = args.filter(l => l.length).join(" ");

            switch (command.replace(config.prefix, '')) {
              case 'webshot':
              case 'ws':
                  webshot(args, "webshot.png", err => {
                      if (err)
                          send('There was an error, <@!'+message.author.id+'>. Please try `'+message.content+'` again later.', error);
                      else
                          send('<@!'+message.author.id+'> took a webshot of `'+args+'`:', {files: ['webshot.png']});
                  });
                  break;
                }
            }
        });

    client.login(auth.token);
