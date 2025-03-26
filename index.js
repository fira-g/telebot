import express from "express"
import TelegramBot from "node-telegram-bot-api"
import dotenv from "dotenv"
import { findIds } from "./items.js"
dotenv.config()

const app = express()
const port = process.env.PORT
const token = process.env.TOKEN
const url = process.env.URL

const bot = new TelegramBot(token)
bot.setWebHook(`${url}/telegram`)


// Express route to handle incoming updates
app.post("/telegram", (req, res) => {
  bot.processUpdate(req.body);
  console.log("yes")
  res.sendStatus(200); // Acknowledge receipt
});
//📎📝📌🎧❤️🔥🙏🏾🎯😢📊📥📤📨📚✝🛐✅⬆️⬇️➡️⬅️🔴🟠🟡🟢🔵🟣⚫️⚪️🟤🔺🔻🔸🔹🔶🔷♥️♦️🏁🚨💻📲📱⌚️🎙⏳⌛️⚒🛠


const homePage = (chatId,message)=>{
    bot.sendMessage(chatId,message, {
        reply_markup: {
            keyboard : [["📚 Books 📚" , "🎧 Audio 🎧"]],
            resize_keyboard:true
        }
    })
}

const audioPage = async(chatId,message)=>{
    await bot.sendMessage(chatId,message, {
        reply_markup: {
            keyboard : [["Eschatology(ye zemen ftsame)"], ["Dispensation" , "5tu Frdoch"] , ["3tu Wegenoch", "Yesetitu_Zer"],["🔙 Back","🔝 Main Menu"]],
            resize_keyboard:true
        }
    })
}

const yeSetituZerPage = async (chatId,message)=>{
    await bot.sendMessage(chatId,message, {
        reply_markup: {
            keyboard : [["YZ-1","YZ-2","YZ-3"],["🔙 Back","🔝 Main Menu"]],
            resize_keyboard:true
        }
    })
}

const dispensationPage = async (chatId,message)=>{
    await bot.sendMessage(chatId,message, {
        reply_markup: {
            keyboard : [["Dispensation-1"],["Dispensation-2"],["Dispensation-3"],["🔙 Back","🔝 Main Menu"]],
            resize_keyboard:true
        }
    })
}

const frdochPage = async (chatId,message)=>{
    await bot.sendMessage(chatId,message, {
        reply_markup: {
            keyboard : [["F-1","F-2","F-3"],["🔙 Back","🔝 Main Menu"]],
            resize_keyboard:true
        }
    })
}

try {
        let prevText;
        bot.on('message', async (msg)=>{
            const chatId = msg.chat.id
            const myId = process.env.MY_ID
            let text = msg.text
            const name = msg.from.first_name
            console.log(text)

            if(text === "🔙 Back"){
                if(prevText==="/start"){
                    homePage(chatId,"🔝 Main Menu")
                }else{
                    text = prevText
                    prevText = null;
                } 
            }
                
            if(text === "/start"){
                const message = `Hello ${name}, Welcome to the bot ❤️.`
                await homePage(chatId,message)
                
                prevText = text
                
            }
            else if(text==="📚 Books 📚"){
                //const message = "🔷🔸Spritual Books 🔸🔷"
                prevText = "/start"
                await bot.sendMessage(chatId,"⌛️ Books are being added please come back later. ⚒")
    
            }
            else if(text==="🎧 Audio 🎧"){
                const message = "🔷🔸Sermons In Audio 🔸🔷"
                await audioPage(chatId,message)
                prevText = "/start"
                
            }
            else if(text === "Dispensation"){
                dispensationPage(chatId,"♦️ Select the parts you want ♦️")
                prevText = "🎧 Audio 🎧"
            }
            else if(text === "Dispensation-1"){
                const messageIds = findIds("Dispensation-1")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "Dispensation-2"){
                const messageIds = findIds("Dispensation-2")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "Dispensation-3"){
                const messageIds = findIds("Dispensation-3")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }

            else if(text === "Eschatology(ye zemen ftsame)"){
                const messageIds = findIds("Eschatology(ye zemen ftsame)")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            
            else if(text === "5tu Frdoch"){
                frdochPage(chatId,"♦️ Select the parts you want ♦️")
                prevText = "🎧 Audio 🎧"
            }
            else if(text === "F-1"){
                const messageIds = findIds("F-1")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "F-2"){
                const messageIds = findIds("F-2")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "F-3"){
                const messageIds = findIds("F-3")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "3tu Wegenoch"){
                const messageIds = findIds("3tu Wegenoch")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "Yesetitu_Zer"){
                yeSetituZerPage(chatId,"♦️ Select the parts you want ♦️")
                prevText = "🎧 Audio 🎧"
            }
            else if(text === "YZ-1"){
                const messageIds = findIds("YZ-1")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "YZ-2"){
                const messageIds = findIds("YZ-2")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }
            else if(text === "YZ-3"){
                const messageIds = findIds("YZ-3")
                await bot.copyMessages(chatId,myId,messageIds)
                await bot.sendMessage(chatId,"Brought to you with ❤️")
            }

            
            else if(text === "🔝 Main Menu"){
                homePage(chatId,"🔝 Main Menu")
            }
            else if(text!=="🔙 Back"){
                await bot.sendMessage(chatId,"⏳ Couldn't understand what you meant ⌛️\nTry to use the buttons🙏🏾")
            }
        })
    }    
 catch (error) {
    console.log(error.message)
}   


app.get("*", (req,res)=>{
    res.send("This is just a server for a telegram bot")
})

app.listen(port, ()=>{
    console.log(`listening on port : ${port}`)
})