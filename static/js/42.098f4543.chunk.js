(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[42],{677:function(e,n){e.exports={title:"1.4.0 Release",description:"Obsidian theme, 05/10 interface styles, and screen markers",author:"Adam",body:'<p>The new Obsidian theme has been released, which re-skins the client UI and most\nof the plugin panel intefaces. Thanks to <a href="https://github.com/psikoi" native="">@psikoi</a>\nwho has been working on this for the last month.</p>\n<p><img src="/img/blog/1.4.0-Release/obsidian1.png" alt="obsidian1"></p>\n<p><img src="/img/blog/1.4.0-Release/obsidian2.png" alt="obsidian2"></p>\n<p><img src="/img/blog/1.4.0-Release/obsidian3.png" alt="obsidian3"></p>\n<p><img src="/img/blog/1.4.0-Release/obsidian4.png" alt="obsidian4"></p>\n<p>An interface style plugin was added to allow switching the 2005 or 2010 game\nframes.</p>\n<p><img src="/img/blog/1.4.0-Release/2005.png" alt="2005"></p>\n<p><img src="/img/blog/1.4.0-Release/2010.png" alt="2010"></p>\n<p>A screenmarker plugin was added to mark areas on the screen.</p>\n<p><img src="/img/blog/1.4.0-Release/marker.png" alt="screenmarker"></p>\n<p>Support for level goals has been added, that loads the XP/level goals from the\nVanilla goals interface and displays it in XP tracker.</p>\n<p><img src="/img/blog/1.4.0-Release/goals.png" alt="goals"></p>\n<p>The world map plugin now shows all teleport locations, and detailed requirements\nfor all agility obstacles.</p>\n<p><img src="/img/blog/1.4.0-Release/tele.png" alt="tele"></p>\n<p><img src="/img/blog/1.4.0-Release/shortcut.png" alt="shortcut"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix agility plugin to not show obstacles in Vespula\'s raid room</li>\n<li>Fix impling plugin incorrectly showing imps after a world hop (1.3.9.1)</li>\n<li>Add Corsair Cove fishing spots to fishing plugin</li>\n<li>Add Gu\'Tanoth bridge obstacles to agility plugin</li>\n<li>Improve performance of stretched fixed mode by utilizing volatile images</li>\n<li>Check inventory for required emote clue items too</li>\n<li>Add gem rocks to mining calculator</li>\n<li>Fix plugin toolbar tooltips</li>\n<li>Fix low detail mode sometimes causing game sounds to not load</li>\n<li>Change the anti-drag plugin to only work with shift held</li>\n<li>Fix slayer bracelet charges not updating when there is only one charge left</li>\n<li>Add commas to ground item quantities</li>\n<li>Add Burgh de Rott fishing spots to fishing plugin</li>\n<li>Fix bounds for west bookcases in the Kourend Library (1.3.9.1)</li>\n<li>Add teak garden bench to construction calculator</li>\n<li>A notification and timer were added to the agility plugin for the agility\narena</li>\n<li>XP boosts for bones have been corrected in the skill calculator</li>\n<li>Farming, fishing, herblore, and hunter have been expanded on in the skill\ncalculator</li>\n</ul>\n<p>Additionally there were clue fixes from user35557, Jouni Pikkarainen, and Jordan\nAtwood.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 26 contributors this release!</p>\n<pre><code>Abex (1):\n      interfacestyles: Run on game thread (#3129)\n\nAdam (21):\n      Update substance to 8.0.02\n      Bump to 1.4.0-SNAPSHOT\n      runescape-api: add sprite related imports for interface style plugin\n      runelite-api: add sprite override api\n      runelite-api: add widget positioned event\n      Add interface styles plugin\n      runelite-client: fix usage of npc despawn event\n      agility plugin: limit obstacles to agility pyramid regions\n      modelviewer: begin work on tile shapes\n      Revert &quot;Delay setting of low detail mode&quot;\n      low detail plugin: apply low detail on startup if on login screen\n      runelite-mixins: fix hasHintArrow\n      runelite-api: expand hint arrow api\n      Revert &quot;Fix early stop of player lookup in HiScores (#3035)&quot;\n      hiscore panel: wrap lookup in a runnable exception logger\n      hiscore panel: clear tooltips when clearing levels\n      hiscore panel: pass result to detailsHtml and remove reduncant null check\n      hiscore panel: remove duplicate getExperience\n      runelite-client: add detached overlay position\n      runelite-client: add screen markers plugin\n      screen marker panel: fix toggling hide/show\n\nAlex Kolpa (5):\n      Clear plugin skill tracking on reset\n      Add agility arena notifier\n      Add agility arena timer\n      Don\'t show experience progress for unranked skills\n      Change AgilityArenaTimer contact to GitHub account (#3121)\n\nJoel (1):\n      Add missing Corsair Cove fishing spots (#3096)\n\nJordan Atwood (2):\n      Add puzzle box indicator to Drunken Dwarf clue\n      Add Gu\'Tanoth bridge obstacles\n\nJouni Pikkarainen (1):\n      Fixed typo in a cryptic clue solution\n\nLevi Schuck (2):\n      Fix til next level time for low xp amounts\n      Switch to safer division method without floats Use custom formatter since LocalTime.toString rolls over the amount of days.\n\nLotto (5):\n      entityhider: don\'t hide npcs by default\n      client: use Image instead of BufferedImage\n      stretchedfixedmode: use volatile image instead of buffered image\n      emoteclues: change symbols to \u2713 and \u2717\n      emoteclues: display when item is in inventory\n\nMagic fTail (2):\n      Fix edgeville monastery emote clue scroll (#2909)\n      Add missing Port Sarim and Ape Toll fishing spots (#2837)\n\nMax Weber (5):\n      Cleanup FarmingTracker panels\n      Add VarC events\n      Allow get/setVarbitValue to operate on arbitrary varp sets\n      devtools: Replace Var tracker with Var Inspector\n      varinspector: Lazily initialize var arrays\n\nMorgan Lewis (4):\n      WorldMap: Add teleport destinations for spells and jewellery\n      WorldMapPointManager: Fix concurrent modification exception\n      WorldMap: Add agility shortcut level requirements\n      WorldMap: Fix jewellery item name loading bugs\n\nRheon-D (1):\n      Fix friend note not displaying due to color tags\n\nRuben (3):\n      Restore Plugin Toolbar Button Tooltips (#2833)\n      Add Gem rocks to mining calculator plugin (#2907)\n      Add mouse hover changes to various ui elements\n\nRuben Amendoeira (22):\n      Restyled the client frame\n      Added custom components + moved/rewrote some\n      Grand Exchange Plugin redesign\n      Hiscore Plugin redesign\n      Kourend Library Plugin slight design tweak\n      News Feed Plugin slight design tweak\n      Notes Plugin slight design tweak\n      Configs slight design tweak\n      Exp trackers plugin redesign\n      Info panel redesign\n      Farming plugin panel redesign\n      Plugin side toolbar design tweak\n      Skilling Calculators Plugin design tweak\n      SetOpaque performance fix\n      Fix Config search bar focus\n      Moved the new text selection colors globally\n      Removed unused styling on JComboBox\n      Fixed exp tracker pop-up in the progress bar\n      Recolour config names to white\n      Expanded SkillIconManager to include smaller versions\n      Added/Changed custom UI components\n      Skill Calc plugin redesign\n\nSeth (1):\n      impling plugin: fix impling list not clearing on hopping worlds\n\nSoyChai (1):\n      Friend notes plugin: Add documentation and increase code readability (#2714)\n\nTomas Slusny (7):\n      Delay setting of low detail mode\n      Change Anti-Drag plugin to work only with SHIFT\n      Fix access levels in XpStateSingle\n      Add Varps for player experience goals\n      Add support for player experience goals to tracker\n      Add support for preferredSize to OverlayRenderer\n      Change ScreenMarkers to use OverlayRenderer\n\nUnknown (1):\n      Change string to match for slayer bracelet\n\nWilliam Metcalf (1):\n      Add commas to ground item quantities\n\nWooxSolo (1):\n      Add RSTileMixin.getGroundItems and RSNPCMixin.getTransformedComposition\n\nXavier Bergeron (1):\n      Fix early stop of player lookup in HiScores (#3035)\n\nraqes (1):\n      Fix 2005 interface container alignment, add scrollbar and spellbooks\n\nshmeeps (1):\n      Add Burgh de Rott fishing spots to fishing overlays (#3132)\n\ntrimbe (1):\n      Fix bounds for west bookcases in Kourend library (#2875)\n\nuser35557 (1):\n      Clue Scrolls: fix dark warrior fortress clue coordinates (#3083)\n\nwa1id (1):\n      Add teak garden bench to construction calculator.\n</code></pre>\n'}}}]);
//# sourceMappingURL=42.098f4543.chunk.js.map