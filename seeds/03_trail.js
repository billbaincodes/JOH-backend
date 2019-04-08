exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trail")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trail").insert([
        {
          id: 1,
          name: "Herman Lake",
          park_id: 1,
          trailhead_id: 1,
          description: `Herman Lake is a glacial lake featuring beautiful wildflowers during the late spring and early summer months. The trail begins at the Herman Gulch trailhead, which is located about one hour west of downtown Denver. The trailhead is located directly off the highway in a paved parking lot and is accessible with any vehicle. The out and back hike stretches roughly 8 miles and gains nearly 2,000 feet. The Herman Gulch trailhead also offers access to Mount Parnassus. Mount Parnassus is a high mountain summit in the Front Range of the Rocky Mountains of North America. The 13,580-foot thirteener is located in Arapaho National Forest, 5.4 miles west-northwest of the Town of Silver Plume in Clear Creek County, Colorado, United States. Mount Parnassus sits east of the Continental Divide in the Front Range of the Rocky Mountains. The summit is located near Interstate 70. The higher Bard Peak, at 13,647 feet, sits nearby, and the closest major town is Silver Plume, Colorado. It is also in close proximity to Woods Mountain, Mount Sniktau, Engelmann Peak, Robeson Peak, and Pettingell Peak. This level of variety and challenge makes Herman Gulch a great spot for families and peak baggers alike.`,
          distance: 7.94,
          elevation: 1901,
          lake: true,
          river: true,
          mtn: true,
          flower: true,
          waterfall: false,
          redrock: false,
          price: 0,
          thumbURL: "https://i.imgur.com/R7IT2MD.jpg"
        },
        {
          id: 2,
          name: "Alberta Falls",
          park_id: 2,
          trailhead_id: 2,
          description: `One of the busiest spots in one of Colorado's most crowded parks makes this trail an easy skip for those seeking isolation. For everyone else, the breathtaking views, dramatic landscapes and unique features make this trail worth braving the crowds. The trail starts at Bear Lake, an easy and short walk that is highly recommended, before following a river through mountain ravines and ultimately arriving at Alberta Falls, the crown jewel of the hike. Rocky Mountain National Park is an American national park located approximately 76 mi northwest of Denver International Airport in north-central Colorado, within the Front Range of the Rocky Mountains. The park is situated between the towns of Estes Park to the east and Grand Lake to the west. The eastern and westerns slopes of the Continental Divide run directly through the center of the park with the headwaters of the Colorado River located in the park's northwestern region. The main features of the park include mountains, alpine lakes and a wide variety of wildlife within various climates and environments, from wooded forests to mountain tundra.`,
          distance: 2.11,
          elevation: 428,
          lake: false,
          river: true,
          mtn: true,
          flower: false,
          waterfall: true,
          redrock: false,
          price: 35,
          thumbURL: "https://i.imgur.com/mDQK9Lr.jpg"
        },
        {
          id: 3,
          name: "Broome Hut",
          park_id: 1,
          trailhead_id: 3,
          description: `Broome Hut, also called Second Creek Trail, is a short, steep and beautiful hike located in Arapaho National Forest. The hike starts at the Second Creek Trailhead, near mile marker 240 on I-40 going through Berthoud Pass. Parking is limited, but available directly off of I-40 so this trail is highly accessible to most vehicles, even in some winter months. Beginning in a dense pine forest, you will rapidly ascend beyond the tree line and will quickly be able to enjoy incredible mountain views in every direction. You’ll also be treated to some wildflowers during spring/summer, but I think overlooking the snowy basin simply can not be beat. Once you reach the Hut, which is open to public use during the day, you have a chance to rest, warm up and use a public bathroom. You can even stay the night if you make appropriate reservations. The Hut acts as a nexus for a few other nearby trails in case you want to keep exploring, or even make your way to Winter Park.`,
          distance: 1.82,
          elevation: 681,
          lake: false,
          river: false,
          mtn: true,
          flower: true,
          waterfall: false,
          redrock: false,
          price: 0,
          thumbURL: "https://i.imgur.com/uTPSefu.jpg"
        },
        {
          id: 4,
          name: "Paint Mines",
          park_id: 1,
          trailhead_id: 3,
          description: `Evoking the sedimentary hills of Badlands National Park, the Paint Mines offer an incredibly unique hiking experience. The variety of rock formations as well as distinct coloring make this hike a hidden gem. The trail starts in unassuming hillside, before revealing the bizarre and alien formations that define the experience. Despite it being the only comparable geographic feature for hundreds of miles, the Paint Mines does not see a large amount of foot traffic. I arrived at around 8:45am to only one other car in the parking lot and only saw a handful of other hikers during my entire visit. The combination of easy access, non-existent crowds and truly one of a kind features make this hike an easy recommendation.`,
          distance: 3.03,
          elevation: 314,
          lake: false,
          river: false,
          mtn: false,
          flower: false,
          waterfall: false,
          redrock: true,
          price: 0,
          thumbURL: "https://i.imgur.com/OGA5Vih.jpg"
        },
      ]);
    });
};
