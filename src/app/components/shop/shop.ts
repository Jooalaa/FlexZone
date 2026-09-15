import { Component } from '@angular/core';

export interface product{
  id:number,
  name:string,
  image:string,
  price:number,
  category:string
}

@Component({
  imports: [],
  selector: 'app-shop',
  styleUrl: './shop.css',
  templateUrl: './shop.html',
})

export class Shop {
  products:product[]=[]
  constructor(){
    this.products=[
      // ================= Supplements & Nutrition =================
  { id: 1, name: 'Whey Protein Isolate - 2kg', image: 'assets/images/whey.jpg', price: 2500, category: 'Supplements' },
  { id: 2, name: 'Creatine Monohydrate - 300g', image: 'assets/images/creatine.jpg', price: 900, category: 'Supplements' },
  { id: 3, name: 'Pre-Workout Energy Booster', image: 'assets/images/preworkout.jpg', price: 1200, category: 'Supplements' },
  { id: 4, name: 'BCAA Amino Acids - 30 Servings', image: 'assets/images/bcaa.jpg', price: 850, category: 'Supplements' },
  { id: 5, name: 'Mass Gainer - 5kg', image: 'assets/images/gainer.jpg', price: 3200, category: 'Supplements' },
  { id: 6, name: 'Multivitamin for Men - 60 Caps', image: 'assets/images/multi.jpg', price: 600, category: 'Supplements' },
  { id: 7, name: 'Fish Oil Omega 3 - 100 Softgels', image: 'assets/images/omega3.jpg', price: 750, category: 'Supplements' },
  { id: 8, name: 'Protein Bar - Chocolate (Box of 12)', image: 'assets/images/protein-bar.jpg', price: 840, category: 'Supplements' },
  { id: 9, name: '100% Natural Peanut Butter - 1kg', image: 'assets/images/peanut-butter.jpg', price: 300, category: 'Nutrition' },
  { id: 10, name: 'Premium Rolled Oats - 1kg', image: 'assets/images/oats.jpg', price: 150, category: 'Nutrition' },
  { id: 11, name: 'Premium Medjool Dates - 1kg', image: 'assets/images/dates.jpg', price: 400, category: 'Nutrition' },

  // ================= Equipment & Machines =================
  { id: 12, name: 'Adjustable Dumbbells Set - 24kg', image: 'assets/images/dumbbells.jpg', price: 4500, category: 'Equipment' },
  { id: 13, name: 'Resistance Bands Set (5 levels)', image: 'assets/images/bands.jpg', price: 450, category: 'Equipment' },
  { id: 14, name: 'Olympic Barbell - 20kg', image: 'assets/images/barbell.jpg', price: 3500, category: 'Equipment' },
  { id: 15, name: 'Bumper Weight Plates - 10kg (Pair)', image: 'assets/images/plates-10.jpg', price: 1800, category: 'Equipment' },
  { id: 16, name: 'Bumper Weight Plates - 20kg (Pair)', image: 'assets/images/plates-20.jpg', price: 3500, category: 'Equipment' },
  { id: 17, name: 'Cast Iron Kettlebell - 16kg', image: 'assets/images/kettlebell.jpg', price: 1200, category: 'Equipment' },
  { id: 18, name: 'Doorway Pull-Up Bar', image: 'assets/images/pullup.jpg', price: 650, category: 'Equipment' },
  { id: 19, name: 'Anti-Slip Yoga Mat', image: 'assets/images/yoga-mat.jpg', price: 350, category: 'Equipment' },
  { id: 20, name: 'Foam Roller for Muscle Recovery', image: 'assets/images/foam-roller.jpg', price: 400, category: 'Equipment' },
  { id: 21, name: 'Adjustable Weight Bench', image: 'assets/images/bench.jpg', price: 5500, category: 'Equipment' },
  { id: 22, name: 'Speed Jump Rope', image: 'assets/images/jump-rope.jpg', price: 200, category: 'Equipment' },
  { id: 23, name: 'Ab Roller Wheel', image: 'assets/images/ab-roller.jpg', price: 300, category: 'Equipment' },

  // ================= Accessories =================
  { id: 24, name: 'Leather Weightlifting Belt', image: 'assets/images/belt.jpg', price: 650, category: 'Accessories' },
  { id: 25, name: 'Premium Shaker Bottle 700ml', image: 'assets/images/shaker.jpg', price: 250, category: 'Accessories' },
  { id: 26, name: 'Waterproof Gym Duffle Bag', image: 'assets/images/bag.jpg', price: 850, category: 'Accessories' },
  { id: 27, name: 'Heavy Duty Lifting Straps (Pair)', image: 'assets/images/straps.jpg', price: 200, category: 'Accessories' },
  { id: 28, name: 'Wrist Wraps for Support', image: 'assets/images/wrist-wraps.jpg', price: 250, category: 'Accessories' },
  { id: 29, name: 'Neoprene Knee Sleeves (7mm)', image: 'assets/images/knee-sleeves.jpg', price: 500, category: 'Accessories' },
  { id: 30, name: 'Microfiber Gym Towel', image: 'assets/images/towel.jpg', price: 150, category: 'Accessories' },
  { id: 31, name: '2L Water Jug', image: 'assets/images/water-jug.jpg', price: 350, category: 'Accessories' },

  // ================= Apparel =================
  { id: 32, name: 'Fitted Black T-Shirt', image: 'assets/images/black-tshirt.jpg', price: 400, category: 'Apparel' },
  { id: 33, name: 'Wide-Leg Grey Sweatpants', image: 'assets/images/grey-sweatpants.jpg', price: 550, category: 'Apparel' },
  { id: 34, name: 'Oversized Gym Hoodie - Black', image: 'assets/images/hoodie.jpg', price: 850, category: 'Apparel' },
  { id: 35, name: 'Long Sleeve Compression Shirt', image: 'assets/images/compression.jpg', price: 600, category: 'Apparel' },
  { id: 36, name: 'Quick Dry Gym Shorts', image: 'assets/images/shorts.jpg', price: 450, category: 'Apparel' },
  { id: 37, name: 'Sleeveless Tank Top - White', image: 'assets/images/tank.jpg', price: 350, category: 'Apparel' }
    ]
  }

}
