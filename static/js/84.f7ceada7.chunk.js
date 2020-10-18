(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[84],{719:function(e,n){e.exports={title:"1.5.13 Release",description:"Item charge infoboxes, PM recipient cycling, and high-level agility obstacle highlighting",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Item-Charges" native="">Item Charges plugin</a> now has an option\nto display infoboxes for equipped charged items. Thanks to <a href="https://github.com/Hydrox6" native="">@Hydrox6</a>\nfor adding this feature!</p>\n<p><img src="/img/blog/1.5.13-Release/item-charge-infoboxes.gif" alt="Equipped teleport item infoboxes"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Chat-History" native="">Chat History plugin</a> can now cycle\nthrough private message senders. By hitting Tab, you can easily keep chatting with all of your\nfriends! Thanks to <a href="https://github.com/TheStonedTurtle" native="">@TheStonedTurtle</a> for writing this feature.</p>\n<p><img src="/img/blog/1.5.13-Release/pm-cycling.gif" alt="Private Message sender cycling"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Agility" native="">Agility plugin</a> will now highlight shortcuts\norange if you do not meet the agility level requirement to cross them. Thanks to\n<a href="https://github.com/MrGroggle" native="">@MrGroggle</a> for adding this feature.</p>\n<p><img src="/img/blog/1.5.13-Release/agility-shortcut-level-colors.png" alt="Agility high-level obstacle highlighting"></p>\n<p>The Item Prices plugin now has an\noption to display profit from casting High Alchemy on an item</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The Object Markers plugin properly\nhighlights some objects which could not previously be highlighted, such as mounted glory amulets\nand wall paintings</li>\n<li>Our custom chatbox text input now wraps long lines, such as heavily-tagged items in the\nBank Tags plugin</li>\n<li>You can now configure the outline color of the current hovered tile in the Tile Indicators\nplugin</li>\n<li>Tooltips for the new Kourend quests and X Marks the Spot quest have been added to the World Map\nplugin. Additionally, the tree tooltips\nfor the Yew Trees in Rimmington have been updated since Veos\'s arrival.</li>\n<li>Challenge Mode raids now have their time tracked in the Chambers of Xeric\nplugin, and can have their kill count\nlooked up via the Chat Commands plugin\nusing the <code>!kc</code> command followed by <code>cox cm</code>, <code>xeric cm</code>, <code>chambers cm</code>, <code>olm cm</code>, or <code>raids cm</code>.\nAdditionally, the Screenshot plugin\nhas learned to take screenshots of Challenge Mode raids upon completion.</li>\n<li>The Wiki plugin now adds a skill guide lookup menu option to skills in your stats tab</li>\n<li>Falador teleport has had its magic XP corrected in the <a href="https://github.com/runelite/runelite/wiki/Skill-Calculator" native="">Skill Calculator\nplugin</a></li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 18 contributors this release!</p>\n<pre><code>Adam (13):\n      api: add method to find instanced tiles in the scene\n      xptracker: limit how often the same players are looked up\n      xptracker: treat players with rank -1 as unranked\n      http service: use gson instead of jackson for json serialization\n      http service: use spring datasource configuration\n      http service: add loottracker controller test\n      http service: use http-api gson instance\n      config service: split into service and controller\n      config controller: add test\n      http service: fix overwriting all default message converters\n      client: change Counter infobox to store count as an integer\n      item prices: add high alch profit to overlay\n      client: only enable developer mode if launcher version isn\'t set\n\nDennis (1):\n      gpu: remove unnecessary texture bind\n\nDesetude (1):\n      Use xdg-open for link browsing on Linux\n\nHarry Semple (1):\n      agility plugin: color shortcuts you don\'t have the level to use differently\n\nHydrox6 (1):\n      Add infoboxes to item charges plugin\n\nJaysc (1):\n      Make color of hovered tile highlight configurable\n\nMax Weber (5):\n      mixins: Fix DecorativeObject ConvexHulls\n      DevTools: draw both DecorativeObject Renderables\n      mixins: Include game crash string in log\n      mixins: rename gameDraw to renderWidgetLayer\n      runelite-api: Add missing widget types\n\nMinghan Li (1):\n      Add new Kourend quests to world map plugin (#7864)\n\nNokkasiili (1):\n      Add X Marks the Spot quest to world map plugin (#7877)\n\nRobert (1):\n      Add support for third floor timer to Raids plugin (Challenge Mode) (#7871)\n\nRon Young (4):\n      ChatboxTextInput: rename this.cursor to this.cursorStart\n      ChatboxTextInput: support line wrapping\n      ChatboxTextInput: support moving between lines with up/down keys\n      Limit wiki input lines to 1\n\nTheStonedTurtle (2):\n      Add PM Target Cycling to Chat History plugin\n      Add Chat History config options\n\nTomas Slusny (15):\n      Add .getBounds() to LayoutableRenderableEntity\n      Use new LayoutableRenderableEntity#getBounds in InfoboxOverlay\n      Export ItemCompositionCache\n      Reset item composition cache on menu shift click change\n      Normalize CoX CM naming from boss long and chat message\n      Use default PanelComponent size in Cooking plugin\n      Make party stats overlay consistent with other overlays\n      Log only exception message on feed lookup failures\n      Null-check cache when getting items in http service\n      Log infobox removal only if infobox was removed\n      Support new Hydra slayer helmet in clue scroll plugin\n      Add version information to Discord tooltip\n      Check for area update on Discord plugin startup\n      Do not use default smallImageKey for Rich Presence\n      Remove dodgy charges variable from item charges plugin\n\nUsernamerino (1):\n      Add chat command shorthand for challenge mode raids killcount\n\nWill Thomas (2):\n      screenshot plugin: Add Challenge Mode raid support\n      wiki plugin: Add skill guide lookup\n\nYani (1):\n      Update Rimmington yew tree location after Veos moved (#7889)\n\nmabel5 (1):\n      Added decoration objects to object markers\n\ntheGeekPirate (1):\n      Correct Falador teleport XP in Skill Calc (#7943)\n</code></pre>\n'}}}]);
//# sourceMappingURL=84.f7ceada7.chunk.js.map