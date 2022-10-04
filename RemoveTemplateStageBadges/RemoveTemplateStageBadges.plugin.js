/**
* @name RemoveTemplateStageBadges
* @displayName RemoveTemplateStageBadges
* @description Remove annoying notifications (template sync, opening of the stage channel), "beta", circle and premium badges in various settings
* @author AntiSlang
* @authorId 416883189735227393
* @version 1.0.0
* @invite FkVByMbDu9
* @source https://github.com/AntiSlang/BetterDiscordPlugins/tree/main/RemoveTemplateStageBadges
* @updateUrl https://github.com/AntiSlang/BetterDiscordPlugins/tree/main/RemoveTemplateStageBadges/RemoveTemplateStageBadges.plugin.js
*/

 const fs = require("fs");
 const path = require("path");
 const request = require("request");
 
 const config = {
     "info": {
         "name": "RemoveTemplateStageBadges",
         "authors": [{
             "name": "AntiSlang",
             "discord_id": "416883189735227393",
             "github_username": "AntiSlang"
         }],
         "version": "1.0.0",
         "description": "Remove annoying notifications (template sync, opening of the stage channel), \"beta\", circle and premium badges in various settings",
         "github": "https://github.com/AntiSlang",
         "github_raw": "https://raw.githubusercontent.com/AntiSlang/BetterDiscordPlugins/tree/main/RemoveTemplateStageBadges/RemoveTemplateStageBadges.plugin.js"
     },/*
     "changelog": [
         { "title": "Updates!", "items": ["Removed deprecated DiscordAPI use", "Bug fixes"] },
     ],*/
     "main": "RemoveTemplateStageBadges.js"
 };
 
 module.exports = !global.ZeresPluginLibrary ? class {
     constructor() {
         this._config = config;
     }
 
     load() {
         BdApi.showConfirmationModal("Library plugin is needed",
             `ZeresPluginLibrary is missing. Please click Download Now to install it.`, {
             confirmText: "Download",
             cancelText: "Cancel",
             onConfirm: () => {
                 request.get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", (error, response, body) => {
                     if (error) {
                         return electron.shell.openExternal("https://github.com/rauenzi/BDPluginLibrary");
                     }
                     fs.writeFileSync(path.join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body);
                 });
             }
         });
     }
 
     start() { }
 
     stop() { }
 
 } : (([Plugin, Library]) => {
     const {
         PluginUpdater,
     } = Library;
 
     return class HideStreamPreview extends Plugin {
         load() {
         }
 
         unload() {
         }
 
         onStart() {
             PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/AntiSlang/BetterDiscordPlugins/tree/main/RemoveTemplateStageBadges/RemoveTemplateStageBadges.plugin.js");
         }
 
         onStop() {
         }
 
         observer(e) {
             this._hideStreamPreview();
         }
 
         _hideStreamPreview() {

            var beta_tags = document.querySelectorAll('.betaTag-2eEO-r');
                beta_tags.forEach((beta_tag) => {
                    beta_tag.style.display = "none";
                }
            )




            var text_badges = document.querySelectorAll('.textBadge-1fdDPJ');
            text_badges.forEach((text_badge) => {
                text_badge.style.display = "none";
                }
            )




            let textBadge_2 = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("textBadge-1fdDPJ"))
            )
            
            if (textBadge_2 != null) {
                textBadge_2.style.display = "none";
            }




            let container = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("container-2Y4CWj"))
            )
            
            if (container != null) {
                container.style.display = "none";
            }




            let container_2 = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("container-2Y4CWj"))
            )
            
            if (container_2 != null) {
                container_2.style.display = "none";
            }




            let element = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("tooltipPointer-3L49xb"))
            )
                 
            while (element && !element.classList.contains("tooltip-14MtrL")) {
                 element = element.parentElement;
            }

            if (element != null) {
                 element.style.display = "none";
            }




            let dot = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("dot-e8DTw_"))
            )

            if (dot != null) {
                dot.style.display = "none";
            }




            let premiumLabel = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("premiumLabel-3HPvdB"))
            )
            
            if (premiumLabel != null) {
                premiumLabel.children[0].style.display = "none";
            }




            let messageFilterBetaTag = Array.from(document.getElementsByTagName('div')).find(div =>
                (div.className.includes("messageFilterBetaTag-3fpO6C"))
            )
            
            if (messageFilterBetaTag != null) {
                messageFilterBetaTag.style.display = "none";
            }
         }
 
     };
 
 })(global.ZeresPluginLibrary.buildPlugin(config));