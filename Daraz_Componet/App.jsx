import React from 'react';
import Shoppingcart from './components/Shopping_Cart.jsx';
import './index.css'

function App() {
  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-5  gap-4 mx-3 sm:grid-cols-3 md:grid-cols-4 m-3 md:grid-flow-row md:overflow-hidden justify-between place-items-center'>
      <Shoppingcart
      image='https://static-01.daraz.com.np/p/b73eb3b875e65691f7b2357078c417e8.jpg_300x0q75.webp'
      productname='USB Bluetooth Dongle'
      ratingObtained={3}
      itemsSold={187}
      Price={350}
      Discountprice='550'
      Productlink={'https://www.daraz.com.np/products/usb-bluetooth-dongle-i100968064-s1021504988.html?spm=a2a0e.searchlistcategory.sku.1.54de37c15PJIhY&search=1'}
      />
        <Shoppingcart 
          image="https://static-01.daraz.com.np/p/0124973d8ad0cc027cf90e2179e004bd.jpg_300x0q75.webp" 
          productname="USB 2.0 to RJ45 Wired Lan Ethernet NEtwork Adapater"
          ratingObtained={4}
          itemsSold={250}
          Price={399}
          Discountprice={''}
          Productlink={'https://www.daraz.com.np/products/usb-20-to-rj45-wired-lan-ethernet-network-adapter-100mbps-usb-male-to-female-network-cards-i101674002-s1022428001.html?spm=a2a0e.searchlistcategory.sku.3.54de37c1TLYonp&search=1'}
        />
<Shoppingcart 
          image="https://static-01.daraz.com.np/p/c3aae7c76c1a4cc6b2f5e16d39056fc8.jpg_300x0q75.webp" 
          productname="HDMI Switch 3 in 1 Out"
          ratingObtained={5}
          itemsSold={116}
          Price={600}
          Discountprice={750}
          Productlink={'https://www.daraz.com.np/products/hdmi-switch-3-in-1-out-i119922507-s1032837326.html?spm=a2a0e.searchlistcategory.sku.2.54de37c1GWnDUm&search=1'}
        />
<Shoppingcart 
          image="https://static-01.daraz.com.np/p/8dc9dbe34f411de5ab1bce85f242709d.jpg_300x0q75.webp" 
          productname="WiFi Reciever 600Mbps USB WiFi Dongel"
          ratingObtained={3}
          itemsSold={152}
          Price={350}
          Discountprice={''}
          Productlink={'https://www.daraz.com.np/products/wifi-receiver-600mbps-usb-wifi-dongle-600mbps-wireless-wifi-receiver-adapter-80211ngb-with-wifi-antenna-i128309288-s1035564718.html?spm=a2a0e.searchlistcategory.sku.4.54de37c1qSnHmL&search=1'}
        />
<Shoppingcart
image="https://static-01.daraz.com.np/p/762c22cd482d2a1bb553f83228f1ca70.jpg_300x0q75.webp"
productname='TP Link TL-WN722N Wireless Adapter'
ratingObtained={4}
itemsSold={549}
Price={1400}
Discountprice='1600'
Productlink={'https://www.daraz.com.np/products/tp-link-tl-wn722n-wireless-adapter-i100011017-s1035931113.html?spm=a2a0e.searchlistcategory.sku.4.54de37c1CTb6dd&search=1'}/>

<Shoppingcart
image="https://static-01.daraz.com.np/p/18452ff443d00fdc5e3e1707f4579008.jpg_300x0q75.webp"
productname='LB-LINK 300Mbps High Gain Smart Wireless Router'
ratingObtained={4}
itemsSold={430}
Price={1649}
Discountprice='1700'
Productlink={'https://www.daraz.com.np/products/lb-link-300mbps-high-gain-smart-wireless-router-i122840948-s1033393314.html?search=1'}/>

<Shoppingcart
image="https://static-01.daraz.com.np/p/dc77740785addba39c6b7d856f9c05f6.jpg_300x0q75.webp"
productname='Cat6 Outdoor Cable Waterproof 50M With RJ45'
ratingObtained={3}
itemsSold={''}
Price={1700}
Discountprice='1800'
Productlink={'https://www.daraz.com.np/products/cat6-outdoor-cable-waterproof-50m-with-rj45-i129779247-s1037619537.html?spm=a2a0e.searchlistcategory.sku.7.54de37c142vDCG&search=1'}/>

<Shoppingcart
image="https://static-01.daraz.com.np/p/d9a8991672bfe1498063b02cfcaffc2f.jpg_300x0q75.webp"
productname='Lb Link Wifi Dongle'
ratingObtained={2}
itemsSold={121}
Price={250}
Discountprice=''
Productlink={'https://www.daraz.com.np/products/lb-link-wifi-dongle-i120307079-s1032848753.html?spm=a2a0e.searchlistcategory.sku.8.54de37c14qAdNF&search=1'}/>

<Shoppingcart
image="https://static-01.daraz.com.np/p/61f78d031fdb0532f6d1c5e4b1f882b0.jpg_300x0q75.webp"
productname='Optical Fiber Media Converter Single mode Pair (A/B)'
ratingObtained={5}
itemsSold={''}
Price={2499}
Discountprice='4500'
Productlink={'https://www.daraz.com.np/products/optical-fiber-media-converter-single-mode-pair-ab-i128975350-s1036947830.html?spm=a2a0e.searchlistcategory.sku.14.54de37c1UgId3y&search=1'}
/>
      </div>
    </>
  );
}
export default App;
