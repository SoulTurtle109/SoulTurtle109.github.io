let data = [
  {
    gif:"resources/spring.gif",
    loading_img:"resources/spring_loading.png",
    desc:"Plateau is my most ambitious project. It is a life simulation video game that uniquely uses a sidescrolling platformer perspective. The game is built in C# using the MonoGame (XNA) framework.<br><br>My goal with this project was to make an entire video game entirely by myself. All work that has gone into this project - code, art, design - was all done completely independently by me. Even the (simple) font was made by me.<br><br>Click the grey circles above for more information - left to right is the ideal order. If it doesn't load right away, I'm sorry about that - it means you clicked onto the Projects page too fast, so my sneaky preloading of the gifs isn't ready yet! So please be patient while it finishs loading, and then your viewing experience should be perfectly smooth.<br><br>You can also check out other projects at the link below (though you should really check out Plateau first, it's the most impressive of the bunch).",
    loaded: false
  },
  {
    gif:"resources/move.gif",
    loading_img:"resources/move_loading.png",
    desc:"Plateau uniquely hybridizes elements of both life simulation and platforming games. Although the gameplay is focused mostly on life simulation, the game world is traversed through platforming movement.<br><br>In this clip, you can see the character walking, jumping, rolling, and gliding as I traverse a cavern in the game. One of my design goals with this game was to make movement as expressive and fun as possible, as slowly walking around a large game world is often a boring part of life simulation games.<br><br>At points in this clip, the player rolls, which increases movement speed but prevents jumping. The player also glides, which provides superior horizontal movement by reducing the effect of gravity on the character. There are also some uses of groundpound boosting, where performing a jump right after landing from a groundpound improves the jump's height. You can also see the use of antigravity machines that exist within the world.<br><br>Some game elements besides the player also respect gravity - you can see, for example, small rock effects pop up when the player groundpounds or rolls.<br><br>The game's physics system was created entirely by me, as MonoGame by default does not have a 2D physics engine. ",
    loaded: false
  },
  {
    gif:"resources/tools.gif",
    loading_img:"resources/tools_loading.png",
    desc:"This clip shows off some interaction between the player and the game world. At the start, the player shakes some trees to obtain fruit and insect items. You can also see some simple leaf effects that fall once the tree is shaken. Oh, and it's also raining!<br><br>Next, the player chops some wood and mines a rock using their axe and pickaxe tools. Like many games, Plateau uses a hotbar system, where the currently selected item can be used to interface with the game world. The mouse scrollwheel (or number keys) can be used to switch the active hotbar item.<br><br>Plateau's world includes a large number of items to collect, harvest, and gather, each of which have many uses within the game. It is, at its heart, a game about collecting and processing items.<br><br>Just in case you didn't notice it before, the very first clip shows the player hoeing the ground, sowing some seeds, and watering some crops. Although Plateau does not emphasize farming mechanics as much as some other games in the genre, it is still a key part of the gameplay loop.",
    loaded: false
  },
  {
    gif:"resources/craft.gif",
    loading_img:"resources/craft_loading.png",
    desc:"Like many other life simulation games, Plateau features robust inventory and crafting systems.<br><br>At the start of this clip, you can see some manipulation of items in the inventory as the character opens a chest and move some items to their bag. Item manipulation is modeled off of games such as Minecraft, including the ability to split stacks and quickly move items between containers by holding shift. There are also tooltips that show when hovering the cursor over items.<br><br>Next, the character opens the crafting menu and crafts a Furnace. Then, they place that Furnace using Edit Mode. Like many games, Plateau uses a grid-based system for many things in the world.<br><br>You can also see in this clip a peek at the Scrapbook, Plateau's built in tutorial system. As players unlock features, they also unlock scrapbook pages which teach them how to use new machines and items they've acquired.<br><br>As MonoGame has no built in interface library, these interfaces were designed and programmed entirely by me, without the use of any external libraries.",
    loaded: false
  },
  {
    gif:"resources/explores3.gif",
    loading_img:"resources/explores3_loading.png",
    desc:"This clip shows me exploring one of the game's areas, a gigantic tree (home to many nature spirits) and the volcanic caves surrounding it. Plateau features a small but diverse collection of areas to explore, each with different gimmicks and items to discover.<br><br>This area includes trampolines which gives the player a boost in a certain direction. Other areas include swimmable water, drafts of air which slowly cause the player to rise while gliding and antigravity.<br><br>There are also a number of non-player characters within the game, such as the nature spirits shown in this clip. You can talk to them too, though this isn't shown here.",
    loaded: false
  },
  {
    gif:"resources/summer.gif",
    loading_img:"resources/summer_loading.png",
    desc:"By now, you've probably noticed that Plateau offers a number of options for character customization.<br><br>Haircut, hair color, skin color, and facial hair are fully customizable. I believe that inclusion is a critical part of life simulation games which cast the player as their main character (and indeed, all games), so Plateau features no gender-locked outfits or hairstyles, as well as a wide variety of skin tones.<br><br>Clothing can also be customized modularly - any shirt can be paired with any pants, which can be paired with any hat, any outerwear, any shoes, and so on. Additionally, each piece of clothing can be dyed one of 16 color variations.<br><br>This clip also shows a quick transition between areas, as well as Plateau's beach locale.",
    loaded: false
  },
  {
    gif:"resources/explores1.gif",
    loading_img:"resources/explores1_loading.png",
    desc:"Here, I explore another of the game's areas. This Eastern-style location is the first of four 'stratums' that the player can explore as they make progress in the game. These stratums, which are located on on Arc Mountain, can be accessed using the cable car from Nimbus Town.<br><br>This location features air currents which allow the character to glide upwards, as well as ancient temples to explore. Like all stratums, there are a number of items which can only be obtained here.<br><br>Partway through the clip, the player also harvests from some beehives. Beehives are one of over thirty interactable 'machines' which can be placed in the world, all of which have unique behavior. Some other examples of machines are furnaces, clay ovens, compost bins, looms, workbenches, glassblowers, terrariums, and even cloning machines.<br><br>Plateau revels in offering new things to explore to players, which is primarily achieved through the Shrine system. By offering certain set combinations of items to shrines scattered throughout the world (you can see one briefly in this clip - it's the crumbled and mossy stone structure which kind of look like tombstones at the left edge of the wheat field), the player unlocks the ability to create new machines, decorative items, and clothing. New areas also unlock once a certain number of shrines are completed. Completing every Shrine - which will require interacting with all of the game's systems - is the one of the ultimate goals of the game and the game's main progression mechanism.",
    loaded: false
  },
  {
    gif:"resources/autumn.gif",
    loading_img:"resources/autumn_loading.png",
    desc:"This clip shows off a sunset in Nimbus Town. The sky and cloud colors transition gradually as time passes, slowly shifting from blue to orange in the evening, then from orange to purple at night (see the next clip for an example).<br><br>One of the shrines mentioned in the previous dot is also visible here, on the left once the character has reached the top of the plateau. There are a total of 50 shrines dotted throughout Plateau's world, each with two stages to complete and a major new unlock after each stage.<br><br>I also show off a bit more of Plateau's decorating system here, with the player placing down a campfire and two stools after clearing some space. In order to decorate the game world, the player must switch to Edit Mode, which places a grid overlay into the screen and enables the placement of objects. Although I physically click on the interface buttons here, there are also keyboard controls for each menu.",
    loaded:false
  },
  {
    gif:"resources/winter.gif",
    loading_img:"resources/winter_loading.png",
    desc:"Nimbus Town features heavily in the gameplay and story of Plateau. With over a dozen residents to befriend and a number of different buisinesses to patronize, Nimbus offers a number of key services to the player. Shown in this clip is a cafe, bookstore, and the town hall.<br><br>This clip also shows off a bit more of Plateau's day-night cycle, weather system, and simple lighting.<br><br>If you made it this far, thanks for checking out Plateau! It's been my passion project for several years now - I started it as a college sophomore, and I'm still working on it to this day. I've learned a lot while working on it, and it continues to grow alongside me today.",
    loaded:false
  }
]

for(i in data) {
  let preload = new Image();
  preload.index = i;
  preload.src = data[i]["gif"];
  preload.onload = function() {
    data[this.index]["loaded"] = true;
    console.log(`loaded ${this.index}`);
    updateGifAndText(activeButton);
  }
}
