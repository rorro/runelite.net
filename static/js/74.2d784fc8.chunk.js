(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[74],{709:function(e,n){e.exports={title:"1.5.4 Release",description:"World switcher ping, equipment bonus overlay, and vengeance active indicator",author:"Adam",body:'<p>The world switcher plugin now shows the ping to each game world.</p>\n<p><img src="/img/blog/1.5.4-Release/ping.png" alt="ping"></p>\n<p>The item stats plugin will now show equipment stats when hovering over items.</p>\n<p><img src="/img/blog/1.5.4-Release/itemstats.gif" alt="itemstats"></p>\n<p>The timers plugin now shows an additional infobox for when vengence is active\nalongside the existing vengence cooldown timer.</p>\n<p><img src="/img/blog/1.5.4-Release/veng.png" alt="venge"></p>\n<p>The idle notifier now has a notification for when your special attack regenerates\nto a configurable percent.</p>\n<p>The camera zoom plugin now allows reducing the outer zoom limit, as well as the\nusual extending of it, by setting the limit negative.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The hiscore plugin can now show unranked levels, if the player is on the\nhiscores</li>\n<li>Add Xeric\'s aid and revitalisation potions to itemstats plugin</li>\n<li>Fix slayer plugin tracking Commander Zilyana tasks</li>\n<li>Add Deadman Mode Tournament hiscore support to the hiscore plugin and opponent info hitpoints lookup</li>\n<li>Fix the bounty hunter interface to be movable again</li>\n<li>Add wyvern staircase to agility plugin</li>\n<li>Correct Oak Armchair level requirement in Construction Skill Calc</li>\n<li>Fix grounditems &quot;only show loot&quot; option to work correctly with multi-tile NPCs</li>\n<li>Fix itemstats papaya fruit health restore</li>\n</ul>\n<p>The requirements for the GPU plugin have been slighly reduced to OpenGL 4.2 with\nthe <code>GL_ARB_compute_shader</code> and <code>GL_ARB_shader_storage_buffer_object</code>\nextensions.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>Adam (17):\n      hiscore panel: support hiscore results with no rank\n      world hopper: add world ping\n      world switcher: fix race with fetching worlds while pinging\n      status bars overlay: avoid resizing prayer icon each frame\n      herbiboar plugin: only check trails when in herbiboar region\n      overlay manager: use EnumMap for overlay layers\n      client: add Range config annotation\n      http service: optimize session queries\n      http-service: set session table engine to MEMORY\n      http-service: set kc table engine to MEMORY\n      idle notifier: add spec regen notifier\n      client: fix logback config to log messages from threads\n      sesssion controller: create sessions when pinging unknown sessions\n      Increase session ping time to 10 minutes\n      config panel: change spinner change listener to a focus listener to reduce change spam\n      api: expose IterableHashTable\n      api: expose chat messages hashtable\n\nAustin Crinklaw (1):\n      Add Xeric\'s aid and revitalisation potions to itemstats plugin\n\nJake Wilson (1):\n      slayer task: change \'Zilyana\' to \'Commander Zilyana\'\n\nJordan Atwood (4):\n      WorldType: Make PVP_WORLD_TYPES final\n      Add DMM Tournament world type\n      Handle Deadman Tournament world type in plugins\n      timers plugin: Update SDMM teleblock handling\n\nKamiel (1):\n      Make whole bounty hunter widget moveable (#6886)\n\nKyle Goodale (1):\n      perspective: use Path2D for construction instead of area in get2DGeometry\n\nMax Weber (3):\n      runelite-api: move WidgetType into n.r.api.widgets\n      runelite-api: Fix various incorrect or misleading javadocs\n      runelite-client: Write logs to log directory instead of cwd\n\nMaxBartlett (1):\n      Added wyvern cave stairs to agility plugin obstacles (#6900)\n\nSamuel Beresford (1):\n      Correct Oak Armchair level requirement in Construction Skill Calc\n\nTheStonedTurtle (1):\n      ground items: fix &quot;only show loot&quot;\n\nTomas Slusny (3):\n      Try to enable compute shaders on GL 4.2\n      Use GLSL 420 with extensions in comp_unordered\n      item stats: add support for equipment stats\n\nTwiglet1022 (2):\n      Fix freeze on disabling GPU plugin\n      Allow lowering of outer zoom limit in the camera zoom plugin\n\nTyler Hardy (1):\n      timer plugin: add vengeance active indicator\n\nZeahProduct (1):\n      itemstats: fix papaya fruit health restore\n\nforsco (1):\n      Fix bounty hunter widget name (#6893)\n</code></pre>\n'}}}]);
//# sourceMappingURL=74.2d784fc8.chunk.js.map