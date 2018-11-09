//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE
const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = process.env.PREFIX;
client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setPresence({
       status: "online",
       game: {
           name: "Protegiendo Servers",
           type: "PLAYING"
       }
   });
}); 
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "help")) {
message.channel.send({embed: {
      color: 0xff0606,
  author: {
      },
      title: "**LWH proyect**",
      fields: [{
          name: "🕵️‍| **__Comandos__**",
          value: ",say ,avatar ,Squads ,InfoSquads ,Detect ,kick"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "| Bot configurado por NotThiago |"    }
  }                     });   
    client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "say")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    let texto = args.join(" ");
if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
message.channel.send(texto);                  
}
  }
);  }
});

client.on('message', message => {
    if (message.content === ',avatar') {
      // Remove the "var" line; it isn't necessary.
      let embed = new Discord.RichEmbed()
      // Replace "message.member" with "message.author"
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "Squads")) {
message.channel.send({embed: {
      color: 0xff0606,
  author: {
      },
      title: "Squads Malisciosos",
      fields: [{
          name: "🕵️‍| **__Squads Maliciosos__**",
          value: "esquelesquad, dragonsquad, undersquad, parlosquad, opedsquad, deltasquad, zonesquad, zemsquad, polosquad, onlysquad, munsquad, nighsquad, firesquad, team-owl, zltsquad, rpt-dead y zpt. Esos son algunos de los Squads Que Conocemos :D"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "| Esperamos Que Te Hallan Servido |"    }
  }                     });   
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "InfoSquads")) {
message.channel.send({embed: {
      color: 0xff0606,
  author: {
      },
      title: "InfoSquads",
      fields: [{
          name: "🕵️‍| **__InfoSquads__**",
          value: "Entra a Esta Pagina:https://infosquadsmaliciosos.weebly.com/  AHI VERRAS TODO! "
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "| Esperamos Que Te Halla Servido |"    }
  }                     });   
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "Detectar")) {
message.channel.send({embed: {
      color: 0xff0606,
  author: {
      },
      title: "Raiders Detectados",
      fields: [{
          name: "🕵️‍| **__Raiders Detectados__**",
          value: " 336526331850391562 = 412482501894733825 = 333247696666361856 = 414470979570368512 = 330514623944196096 = 417070498321661993 = 329123217190944770 = 418857790698684416 = 329041457849696266 = 419547527063273472 = 287831727412609024 = 423386531785342977 = 276457403829059585 = 424382625369817097 = 274598571993464832 = 447593156859396098 = 257262568803008522 = 454265636668047362 = 254353214290395137 = 455150466964389898 = 242730576195354624 = 456966161079205899 = 224111479715135488 = Deleted User 2789fb82 458232814702166016 = Mickey 209557634989162498 = Wida 459489464956485632 = 3xPl0iTS 192363796650524681 = snake 461361634690990101 = AMON_40L 191283205784076289 = Deleted User bbf81c67 462358211236855848 = Kirito 372462381240156160"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "| Banealos! |"    }
  }                     });   
}
});
client.on("message", (message) => {
    if (message.content.startsWith(",kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayname + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
client.login('NTEwNDk5Nzc2NTQzMDY0MDc0.DsdPrg.9J0m1EDvxYRvaF92Qd3XMkVjtjQ');
