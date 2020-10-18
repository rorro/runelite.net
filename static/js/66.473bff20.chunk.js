(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[66],{701:function(e,n){e.exports={title:"1.4.23 Release",description:"Twitch plugin, POH incense burner timers, ignore loot tracker items, and banked clue item search",author:"Jordan",body:'<p>New Twitch plugin was added that allows you to connect your chat with some specific Twitch channel.\nAll messages received from this channel are sent in clan chat type with prefix [Twitch] and you\ncan reply to messages by prefixing your message with <code>//</code>.</p>\n<p><img src="/img/blog/1.4.23-Release/twitch.png" alt="twitch"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Player-owned-House" native="">Player-owned House plugin</a> now\ndisplays a timer for incense burners. The time per light is variable based on the lighter\'s\nFiremaking level, so it will display a green timer while it is guaranteed to remain lit, and a\nyellow timer for the estimated extra time. Thanks to <a href="https://github.com/deathbeam" native="">@deathbeam</a> and\n<a href="https://github.com/forsco" native="">@forsco</a> for this feature.</p>\n<p><img src="/img/blog/1.4.23-Release/poh-incense-burner-timers.gif" alt="POH incense burners"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="">Loot Tracker plugin</a> has a new\nconfiguration to ignore certain loot drops, which will dim these items and exclude their value from\nthe displayed loot value, and a toggle for whether they should appear in the loot tracker display\nat all. Thanks to <a href="https://github.com/psikoi" native="">@psikoi</a> for making this feature possible!</p>\n<p><img src="/img/blog/1.4.23-Release/loot-tracker-toggling-items.gif" alt="Loot Tracker: toggling items to be ignored">\n<img src="/img/blog/1.4.23-Release/loot-tracker-hiding-ignored-items.gif" alt="Loot Tracker: hiding ignored items">\n<img src="/img/blog/1.4.23-Release/loot-tracker-ignored-tooltip.png" alt="Loot tracker: tooltip of ignored items"></p>\n<p>Items required for clue steps are now automatically (and implicitly) tagged &quot;clue&quot;, and can be\nsearched for in the bank. Never waste time poring through your bank for the exact items you need\nagain! Thanks to <a href="https://github.com/raiyni" native="">@raiyni</a> for this feature.</p>\n<p><img src="/img/blog/1.4.23-Release/clue-tag-search.gif" alt="Searching the bank for clue items"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Recent clan chat listings with spaces in their names no longer become corrupted</li>\n<li>Multiple marks of grace can now be highlighted while training on rooftop agility courses</li>\n<li>Mounted capes now prioritize Teleport and Spellbook options in a player-owned house via the menu\nentry swapper plugin</li>\n<li>If set, XP globes now use the ingame skill goals for displaying completion progress</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (3):\n      Wait for process termination when sending notifications\n      config panel: add support for password fields\n      runelite-client: add Twitch chat plugin\n\nBrett (1):\n      Add idle notification for mixing ultracompost (#6052)\n\nChristopher O\'Hara (1):\n      Show hop-to option in clan chat menu when target player is a friend and their private chat is off\n\nJordan Atwood (1):\n      mta telekinetic room: Fix finish point comparison\n\nKasparRosin (1):\n      Replace Ardougne cloak with Explorer\'s ring in MES teleport description (#6158)\n\nLotto (3):\n      Change \'username\' to \'player name\' in usernameInTitle\n      puzzlesolver: break out -1 piece value into a constant\n      puzzlesolver: make exclusive use of PuzzleSolver\'s constants\n\nMax Weber (10):\n      runelite-api: Make MouseListener an interface, add MouseAdapter\n      Add JavaScriptCallback to allow java callbacks instead of cs2\n      Add ChatboxPanelManager to allow for more advanced chatbox inputs\n      fairyrings: Use ChatboxPanelManager\'s input\n      ChatboxTextInput: Assume end cursor when changing value\n      ChatboxTextInput: Don\'t divide by zero when clicking on an empty string\n      ChatboxTextMenuInput: return this from build\n      ChatboxTextInput: Fix blinking cursor\n      loottracker: Lazily rebuild panels\n      Limit amount of LootTrackerBoxes to 500\n\nRobin Withes (2):\n      Add tears of guthix rock obstacle to agility obstacles (#6096)\n      Add draynor stile obstacle to agility plugin (#6112)\n\nRon Young (6):\n      text: Add Jagex name formatter\n      clan chat plugin: Use Jagex name format\n      Add clue scroll service\n      Hookup clue scroll service dependency\n      Add fulfilledBy(int itemId) to item requirements\n      Add ability to search for current clue required items\n\nRuben Amendoeira (1):\n      Loot tracker - Add ability to ignore items (#5483)\n\nSebastiaan Vanspauwen (1):\n      agility plugin: highlight multiple marks\n\nTomas Slusny (16):\n      Make colon (&quot;:&quot;) enter chat in WASD mode\n      Make special attack counter respect ids and npc deaths\n      Remove positions from Timers plugin config\n      Merge common configs in Timers plugin\n      Remove position config from menu entry swapper\n      Add swap for &quot;Admire&quot; and &quot;Teleport/Spellbook&quot; for mounted capes (#5994)\n      Make HiScore lookup always deprioritized\n      Prevent tag tab scrolling to scroll bank interface\n      Add missing dot to &quot;She\'s small&quot; cryptic\n      Add POH incense burner timers\n      Swap also &quot;quick pass&quot; in Cerb lair\n      Add startGoalXp and endGoalXp to XpTrackerService\n      Use startGoalXp and endGoalXp for goals in XP globes\n      Keep WidgetOverlay always on UNDER_WIDGETS layer\n      Calculate total count/value from loot records instead of boxes\n      Prevent NPE in recent clan chats when var is null\n\nTyler Nichols (1):\n      mta plugin: remove pointless int cast\n\nWooxSolo (1):\n      Rename getUnknownSoundValues2\n</code></pre>\n'}}}]);
//# sourceMappingURL=66.473bff20.chunk.js.map