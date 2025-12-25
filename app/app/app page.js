import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "تيشيرتات",
    items: [
      { img: "https://via.placeholder.com/400x500", title: "تيشيرت أسود قطن" },
      { img: "https://via.placeholder.com/400x500", title: "تيشيرت أبيض أوفر سايز" },
      { img: "https://via.placeholder.com/400x500", title: "تيشيرت مطبوع" }
    ]
  },
  {
    name: "هوديز",
    items: [
      { img: "https://via.placeholder.com/400x500", title: "هودي شتوي" },
      { img: "https://via.placeholder.com/400x500", title: "هودي أسود ثقيل" }
    ]
  },
  {
    name: "بناطيل",
    items: [
      { img: "https://via.placeholder.com/400x500", title: "بنطلون جينز" },
      { img: "https://via.placeholder.com/400x500", title: "بنطلون قماش" }
    ]
  }
];

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-neutral-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">ديب كلوز – Deep Clothes</h1>

      {categories.map((cat, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{cat.name}</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {cat.items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[190px] bg-neutral-900 rounded-2xl shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-t-2xl w-full h-[260px] object-cover"
                />
                <div className="p-3 text-sm text-center">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
        }
                    
