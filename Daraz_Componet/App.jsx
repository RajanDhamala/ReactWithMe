import React from 'react';
import Shoppingcart from './components/Shopping_Cart.jsx';
import './index.css'

function App() {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 ml-1'>
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
          Discountprice={600}
          Productlink={'https://www.daraz.com.np/products/usb-20-to-rj45-wired-lan-ethernet-network-adapter-100mbps-usb-male-to-female-network-cards-i101674002-s1022428001.html?spm=a2a0e.searchlistcategory.sku.3.54de37c1TLYonp&search=1'}
        />
<Shoppingcart 
          image="https://static-01.daraz.com.np/p/c3aae7c76c1a4cc6b2f5e16d39056fc8.jpg_300x0q75.webp" 
          productname="HDMI Switch 3 in 1 Out"
          ratingObtained={5}
          itemsSold={116}
          Price={700}
          Discountprice={750}
          Productlink={'https://www.daraz.com.np/products/hdmi-switch-3-in-1-out-i119922507-s1032837326.html?spm=a2a0e.searchlistcategory.sku.2.54de37c1GWnDUm&search=1'}
        />
<Shoppingcart 
          image="https://static-01.daraz.com.np/p/8dc9dbe34f411de5ab1bce85f242709d.jpg_300x0q75.webp" 
          productname="WiFi Reciever 600Mbps USB WiFi Dongel"
          ratingObtained={3}
          itemsSold={152}
          Price={350}
          Discountprice={400}
          Productlink={'https://www.daraz.com.np/products/wifi-receiver-600mbps-usb-wifi-dongle-600mbps-wireless-wifi-receiver-adapter-80211ngb-with-wifi-antenna-i128309288-s1035564718.html?spm=a2a0e.searchlistcategory.sku.4.54de37c1qSnHmL&search=1'}
        />
      </div>
    </>
  );
}

export default App;
