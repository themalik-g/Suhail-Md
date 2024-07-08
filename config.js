const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/themalik-g";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.website=process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a64f459e3fdb724e09421.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆: 𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕" 


global.devs = "923263429027" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923263429027","923257853673";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/a64f459e3fdb724e09421.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_19_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidDRrL1NYTXRpcnZXTFNHSXZOSkZKQXJrYVNUYXVsSDE1d1BYVGsxb1Bodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODczNDAzMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNEMTY2NkU5MThFNzA3OUY3OUIyQkUyNDFDRDA4MjQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0MDM1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4NzM0MDMwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0RCMzNGQ0I5MjM1NkM2MDIxQ0ZDOTcyRkE3MzU5QURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzQwMzYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpvOUladVBLUjRPaURWNmFYOF9KdWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk1ZjYwNDUtZDc4My00ODQyLTlmOTEtYjQ2ZTFlYjZjM2NmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTg4LFxuICAgICAgMTMzLFxuICAgICAgNDYsXG4gICAgICAxMTEsXG4gICAgICAxODgsXG4gICAgICAzMSxcbiAgICAgIDI1NSxcbiAgICAgIDEzMSxcbiAgICAgIDIzOSxcbiAgICAgIDI0LFxuICAgICAgMjA5LFxuICAgICAgMTIsXG4gICAgICAxMzYsXG4gICAgICAxMTMsXG4gICAgICAxMDUsXG4gICAgICAxMjIsXG4gICAgICA3OCxcbiAgICAgIDI0OSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjUxLFxuICAgICAgMTI5LFxuICAgICAgMTcwLFxuICAgICAgMjM2LFxuICAgICAgMTQsXG4gICAgICA5MSxcbiAgICAgIDkxLFxuICAgICAgMjMsXG4gICAgICAxMjMsXG4gICAgICA4MixcbiAgICAgIDE0MCxcbiAgICAgIDIzOSxcbiAgICAgIDQwLFxuICAgICAgMTMxLFxuICAgICAgMjE3LFxuICAgICAgMTU1LFxuICAgICAgMTQ5LFxuICAgICAgODgsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQ0ZDSFMzTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg3MzQwMzAxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgzNDc3NDcwOTE2NzE1OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwifkR1YSDwn6aLXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBLdGVNRUVQNmVxYlFHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTRFBJcWFkQUZiWmJVdUtpM3VicnZUTFVJR3BzNkt3TlVOYWN2bUFoUUFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpqWlhwVmNIcTUwSFloL2dORkZza3JqSjlpZnc4Qm5RejhEOHBQVUkwaFZ1bWJBS1BHOHJnODRqSnZNWGJWRStDbW8veFZxVS9DQWNXOTV4Qzh6b0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkUwc1lucjc4MjVpa2JKVWFPVGRsd3lxQVV0N2JNWG9PMWhiMzVza0xTVnpIdzNtbklHU2NJcVFKZ0FsUXUyYlV2MUR5SkQzeHgrMUhia3NrNThLcWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI4NzM0MDMwMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQwMzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2dVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZ1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJheFg5ZGF2eXNFTjA3OHgrY0Rkc1dzSzFjbnRrNjJFNDM4K1NrdnBQMDlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODIyMzc3MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆: 𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🄼🄴🄷🅃🄰🄱",
  packname: process.env.PACK_NAME || "🤍",
  botname : process.env.BOT_NAME  || "𝗠𝗮𝗹𝗶𝗸'𝘀 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹 𝗕𝗼𝘁",
  ownername:process.env.OWNER_NAME|| "𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕 🤍",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "kzr1tt3.mongodb.net/?retrywrites=true&w=majority",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
