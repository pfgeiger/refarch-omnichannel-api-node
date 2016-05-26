module.exports = function(app) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */
  var itemData = [
        {
            "name":"Dayton Meat Chopper",
            "description":"Punched-card tabulating machines and time clocks were not the only products offered by the young IBM. Seen here in 1930, manufacturing employees of IBM\'s Dayton Scale Company are assembling Dayton Safety Electric Meat Choppers. These devices, which won the Gold Medal at the 1926 Sesquicentennial International Exposition in Philadelphia, were produced in both counter base and pedestal styles (5000 and 6000 series, respectively). They included one-quarter horsepower models, one-third horsepower machines (Styles 5113, 6113F and 6213F), one-half horsepower types (Styles 5117, 6117F and 6217F) and one horsepower choppers (Styles 5128, 6128F and 6228F). Prices in 1926 varied from $180 to $375. Three years after this photograph was taken, the Dayton Scale Company became an IBM division, and was sold to the Hobart Manufacturing Company in 1934.",
            "img":"images/items/meat-chopper.jpg",
            "img_alt":"Dayton Meat Chopper",
            "price":4599.99,
            "rating":0
        },
        {
            "name":"Hollerith Tabulator",
            "description":"This equipment is representative of the tabulating system invented and built for the U.S. Census Bureau by Herman Hollerith (1860-1929). After observing a train conductor punching railroad tickets to identify passengers, Hollerith conceived and developed the idea of using punched holes to record facts about people. These machines were first used in compiling the 1890 Census. Hollerith\'s patents were later acquired by the Computing-Tabulating-Recording Co. (which was renamed IBM in 1924) and this work became the basis of the IBM Punched Card System. Hollerith\'s tabulator used simple clock-like counting devices. When an electrical circuit was closed (through a punched hole in a predetermined position on the card), each counter was actuated by an electromagnet. The unit\'s pointer (clock hand) moved one step each time the magnet was energized. The circuits to the electromagnets were closed by means of a hand-operated press type card reader. The operator placed each card in the reader, pulled down the lever and removed the card after each punched hole was counted.",
            "img":"images/items/hollerith-tabulator.jpg",
            "img_alt":"Hollerith Tabulator",
            "price":10599.99,
            "rating":0
        },
        {
            "name":"Computing Scale",
            "description":"In 1885 Julius Pitrat of Gallipolis, Ohio, patented the first computing scale. Six years later, Edward Canby and Orange Ozias of Dayton, Ohio, purchased Pitrat\'s patents and incorporated The Computing Scale Company as the world\'s first computing scale vendor. And four years after that, The Computing Scale Company introduced the first automatic computing scale, shown here. In 1911, the Computing Scale Company merged with the International Time Recording Company and Tabulating Machine Company to form the Computing-Tabulating-Recording Company, a business that was renamed IBM in 1924.",
            "img":"images/items/computing-scale.jpg",
            "img_alt":"Computing Scale",
            "price":699.99,
            "rating":0
        },
        {
            "name":"Tape Controlled Card Punch",
            "description":"IBM hired engineer-inventor Charles Doty in 1925, and he first worked as a secretary at the company’s main office at 50 Broad Street in Manhattan before transferring to the engineering laboratory at 225 Varick Street. Doty went on to write the specifications for a tape-to-card converter for engineers in IBM\’s development laboratory in Endicott, N.Y. The first such machine consisted of a keypunch to which relays had been added to convert the code of the paper tape to the code of the punched cards, along with an attached paper-tape reading device. The engineering model was delivered and placed into testing on May 12, 1941, just three months after getting the green light for development. During the summer of 1941, the United States Army Air Corps received the first 10 units of the machine seen here, which was then known as the IBM 40 Tape Controlled Card Punch. Following delivery to the Air Corps, the Army’s Quartermaster Department, Signal Corps and other military organizations used the IBM 40, and its counterpart IBM 57 card-to-tape punch, for defense work during World War II. Commercial installations of both machines were also made at the New York, New Haven & Hartford Railroad; RCA; Bethlehem Steel; Vanity Fair; Western Electric; Merrill Lynch; Harris Upsham and others.",
            "img":"images/items/tape-controlled-punch.jpg",
            "img_alt":"Tape Controlled Card Punch",
            "price":1299.99,
            "rating":0
        },
        {
            "name":"Electric Card Collator",
            "description":"The IBM 77 electric punched card collator performed many card filing and pulling operations. As a filing machine, the Type 77 fed and compared simultaneously two groups of punched cards: records already in file and records to be filed. These two groups were merged in correct numerical or alphabetical sequence. When operated for the purpose of pulling cards, the Type 77 made it possible for one group of cards to pull corresponding cards from another group. Introduced in 1937, the IBM 77 collator rented for $80 a month. It was capable of handling 240 cards a minute, and was 40.5 inches long and 51 inches high. IBM withdrew the Type 77 from marketing on November 27, 1957.",
            "img":"images/items/electric-card-punch.jpg",
            "img_alt":"IBM 77 Electric Punched Card Collator",
            "price":3899.99,
            "rating":0
        },
        {
            "name":"Collator",
            "description":"The 85 collator performed many card filing and selection operations. It simultaneously could feed two sets of cards, merging the matched cards and selecting unmatched cards. In addition, the machine could check the sequence of the primary file of cards. It fed up to 120 cards per minute in each feed. IBM withdrew the 85 collator from marketing on September 7, 1978.",
            "img":"images/items/collator.jpg",
            "img_alt":"Collator",
            "price":2799.99,
            "rating":0
        },
        {
            "name":"Gang Summary Punch",
            "description":"The IBM 523 gang summary punch made its debut on February 17, 1949. When attached to an IBM 400-series accounting machine, the 523 punched summary cards for various totals at the rate of 100 cards a minute. Gang punching and summary punching operations could be performed simultaneously. The last model of the 523 was withdrawn from marketing on December 1, 1975.",
            "img":"images/items/summary-punch.jpg",
            "img_alt":"Summary Punch",
            "price":1899.99,
            "rating":0
        },
        {
            "name":"Calculator",
            "description":"The IBM 608 calculator (shown at left) was the first completely transistorized computer available for commercial installation. Announced in April 1955, the 608 began the transition of IBM\'s line of small and intermediate electronic calculators from vacuum tube to transistor operation. It contained more than 3,000 transistors -- tiny germanium devices no bigger than a paper clip -- and magnetic cores -- doughnut-shaped objects slightly larger than a pinhead, in the first known use of transistors and cores together in a computer. The magnetic cores could remember information indefinitely and recall it in a few millionths of a second, and made up the machine\'s internal storage or memory.<br>The 608\'s transistors made possible a 50 percent reduction in physical size and a 90 percent reduction in power requirements over comparable vacuum tube models. The machine could perform 4,500 additions a second, a computing speed 2.5 times faster than IBM\'s Type 607 calculator introduced only two years before. It could multiply two 9-digit numbers and derive the 18-digit product in 11 one-thousandths of a second, and divide an 18-digit number by a nine-digit number to produce the nine-digit quotient in just 13 one-thousandths of a second. The associated IBM 535 card read punch (shown at right) was used for both input and output, and was designed to permit a card to be calculated and the results punched while passing through the machine at the rate of 155 cards per minute.<br>In 1957, customers could purchase the 608 for $83,210 (or rent it for $1,760 a month) and the 535 for $44,838 (or rent it for $715 a month). The 608 was withdrawn from marketing in April 1959.",
            "img":"images/items/608-calculator.jpg",
            "img_alt":"608 Calculator",
            "price":5199.99,
            "rating":0
        },
        {
            "name":"Proof Machine",
            "description":"Debuting in July 1949, the IBM 803 Proof Machine was used to sort, list, prove and endorse checks, sales tickets, vouchers and other business documents in a single operation. Containing 32 sorting receptacles, the 803 had a number of compartment adding tapes. A control tape recorded all transactions in the original sequence, with sub and final totals of distributions. The ten-key electrified adding machine keyboard simplified the 803\'s operation. The machine also had signal lights to indicate the near depletion of the tape supply and other operating conditions. The 803 Proof Machine was withdrawn in December 1981 after more 30 years in the product catalogue.",
            "img":"images/items/803-proof.jpg",
            "img_alt":"803 Proof Machine",
            "price":399.99,
            "rating":0
        },
        {
            "name":"Model 01 Typewriter",
            "description":"In 1933 IBM acquired the tools, patents and production facilities of Electromatic Typewriters, Inc., of Rochester, N.Y. In the year following the acquisition, IBM invested more than $1 million to redesign the Electromatic Typewriter, improve the company\'s research facilities and establish service centers. In 1935, the Model 01 IBM Electric Typewriter, seen here, was introduced. Wide customer acceptance soon made it the first successful electric typewriter in the United States.",
            "img":"images/items/01-typewriter.jpg",
            "img_alt":"Model 01 Electric Typewriter",
            "price":899.99,
            "rating":0
        },
        {
            "name":"Model A Typewriter",
            "description":"In 1948 IBM introduced the IBM Model A Standard Electric Typewriter. This machine gave typists a new feeling of comfort and control as the carriage return, back space, tabulator and shift were operated with a fingertip touch. The Model A\'s multiple-copy control ensured legible carbon copies and stencils.",
            "img":"images/items/a-typewriter.jpg",
            "img_alt":"Model A Standard Electric Typewriter",
            "price":1199.99,
            "rating":0
        },
        {
            "name":"Selectric Typewriter",
            "description":"Unveiled in 1961, the revolutionary Selectric typewriter eliminated the need for conventional type bars and movable carriages by using an innovative typing element on a head-and-rocker assembly, which, in turn, was mounted on a small carrier to move from left to right while typing.",
            "img":"images/items/selectric.jpg",
            "img_alt":"Selectric Typewriter",
            "price":2199.99,
            "rating":0
        }
    ];

    app.models.item.create(itemData, function(err, records) {
        if (err) {
            console.log("item data already exists.  Duplicate records found: " + err.length);
            return;
        }
        console.log('Done seeding item data, '+records.length+' records created.');
    });
	

    var inventoryData = [
		{
			"itemId": 1,
			"storeId": 1,
			"onHand": 1
		}
	];

      app.models.inventory.create(inventoryData, function(err, records) {
          if (err) {
              console.log("inventory data already exists.  Duplicate records found: " + err.length);
              return;
          }
          console.log('Done seeding inventory data, '+records.length+' records created.');
      });
	  
};
