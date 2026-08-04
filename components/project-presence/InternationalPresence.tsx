// "use client";

// import { motion } from "framer-motion";
// import { Globe2 } from "lucide-react";

// import { internationalPresence } from "@/data/projectPresence";

// export default function InternationalPresence() {
//   return (
//     <div className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(27,63,104,0.09)]">
//       <div className="border-b border-gray-100 bg-primary-blue px-6 py-6 md:px-7">
//         <div className="flex items-center gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
//             <Globe2 size={23} />
//           </div>

//           <div>
//             <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
//               Global Reach
//             </p>

//             <h3 className="mt-1 text-xl font-black text-white">
//               International Presence
//             </h3>
//           </div>
//         </div>
//       </div>

//       <div className="grid gap-3 p-6 sm:grid-cols-2 md:p-7">
//         {internationalPresence.map((item, index) => (
//           <motion.article
//             key={item.country}
//             initial={{
//               opacity: 0,
//               y: 14,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.4,
//               delay: index * 0.06,
//             }}
//             className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8fafc] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/20 hover:bg-white hover:shadow-[0_14px_35px_rgba(27,63,104,0.09)]"
//           >
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red/10 text-xs font-black text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
//               {item.code}
//             </div>

//             <div>
//               <p className="font-black text-primary-blue">
//                 {item.country}
//               </p>

//               <p className="mt-1 text-xs font-semibold text-gray-400">
//                 {item.region}
//               </p>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </div>
//   );
// }